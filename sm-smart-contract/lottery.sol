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

    uint32 range = 5;
    mapping(uint256 => Ticket[]) private s_ticket;
    mapping(uint256 => uint256) private s_win;
    uint256 current_innings = 1;

    struct Ticket{
        string buyerId;
        address buyerWallet;
        uint luckyNumber;
    }

    constructor(uint64 subscriptionId) VRFConsumerBaseV2(vrfCoordinator) {
        COORDINATOR = VRFCoordinatorV2Interface(vrfCoordinator);
        s_owner = msg.sender;
        s_subscriptionId = subscriptionId;
    }

    event rollSuccess();
    event buyTicketSuccess(string _id, address buyer);

    function setInnings(uint256 innings) public onlyOwner{
        current_innings = innings;
    }

    function buyTicket(string memory _id, uint number, uint256 innings) public {
        if(innings == current_innings){
            Ticket memory ticket = Ticket(_id, msg.sender, number);
            s_ticket[innings].push(ticket);
            emit buyTicketSuccess(_id, msg.sender);
        }
    }

    function roll() public onlyOwner returns (uint256 requestId){
        return COORDINATOR.requestRandomWords(
            s_keyHash,
            s_subscriptionId,
            requestConfirmations,
            callbackGasLimit,
            1
        );
    }

    function fulfillRandomWords(uint256 requestId, uint256[] memory randomness) internal override {
        s_win[current_innings] = randomness[0]%range;
    }

    function giveRewards() public{

    }

    modifier onlyOwner() {
        require(msg.sender == s_owner);
        _;
    }
}
