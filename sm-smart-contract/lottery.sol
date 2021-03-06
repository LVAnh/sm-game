// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';


contract Lottery is VRFConsumerBaseV2 {
    VRFCoordinatorV2Interface COORDINATOR;
    uint64 s_subscriptionId;
    address vrfCoordinator = 0x6168499c0cFfCaCD319c818142124B7A15E857ab;
    bytes32 s_keyHash = 0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc;
    uint32 callbackGasLimit = 40000;
    uint16 requestConfirmations = 3;
    address s_owner;

    mapping(uint256 => Player[]) s_players;
    mapping(uint256 => Player) s_winner;
    uint256 current_innings;
    uint256 public rolling_innings;

    uint256 public result;
    bool public isRolling = false;
    bool isOpen = false;
    bool public isFinishRoll = false;
    struct Player{
        string id;
        address wallet;
        string reward;
    }


    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
        current_innings = 1;
        isOpen = true;
    }

    event rollSuccess();
    event registerGameSuccess(string _id, address buyer);
    function getInning()public view returns(uint256){
        return current_innings;
    }
    function getPlayers(uint256 innings) public view returns(Player[] memory) {
        Player[] memory data = s_players[innings];
        return data;
    }

    function getWinner(uint256 innings) public view returns(Player memory) {
        return s_winner[innings];
    }
    function startInning(uint256 innings) public onlyOwner{
        current_innings = innings;
    }

    function getWin(uint256 innings) public returns (Player memory win){
        return s_winner[current_innings];
    }

    function registerGame(string memory _id,string memory reward) public {
        if(isOpen == true){
            Player memory player = Player(_id, msg.sender, reward);
            s_players[current_innings].push(player);
            emit registerGameSuccess(_id, msg.sender);
        }
    }

    function roll() public onlyOwner returns (uint256 requestId){
        if(current_innings > rolling_innings){
            setRolling(current_innings);
            isRolling = true;
            isFinishRoll = false;
            isOpen = false;
            return COORDINATOR.requestRandomWords(
                s_keyHash,
                s_subscriptionId,
                requestConfirmations,
                callbackGasLimit,
                1
            );
        }
    }
    function setRolling(uint256 innings) public onlyOwner{
        rolling_innings = innings;
    }
    function startGame() public onlyOwner returns (bool){
        if(isOpen == false){
            current_innings += 1;
            isOpen = true;
            return true;
        }
        return false;
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomness) internal override {
        result = randomness[0];
        isFinishRoll = true;
        emit rollSuccess();
    }

    function giveRewards() public{

    }

    function setWin() public onlyOwner{
        isRolling = false;
        isFinishRoll = false;
        s_winner[rolling_innings] = (s_players[rolling_innings])[result%(s_players[rolling_innings].length)];
    }


    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }
}
