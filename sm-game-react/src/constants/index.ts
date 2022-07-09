export const SM_ADDRESS = '0x8117a77273c94f1e82c8314981A9FDA98b6116f8'
export const OWNER = '0x44e736d8df155b67c4a13f1668b2d29653445eb1'
export const ABI = [
    {
        "inputs": [
            {
                "internalType": "uint64",
                "name": "subscriptionId",
                "type": "uint64"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "have",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "want",
                "type": "address"
            }
        ],
        "name": "OnlyCoordinatorCanFulfill",
        "type": "error"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyer",
                "type": "address"
            }
        ],
        "name": "registerGameSuccess",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [],
        "name": "rollSuccess",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "innings",
                "type": "uint256"
            }
        ],
        "name": "getWin",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "buyerId",
                        "type": "string"
                    },
                    {
                        "internalType": "address",
                        "name": "buyerWallet",
                        "type": "address"
                    }
                ],
                "internalType": "struct Lottery.Player",
                "name": "win",
                "type": "tuple"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "giveRewards",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "isRolling",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            },
            {
                "internalType": "uint256[]",
                "name": "randomWords",
                "type": "uint256[]"
            }
        ],
        "name": "rawFulfillRandomWords",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_id",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "innings",
                "type": "uint256"
            }
        ],
        "name": "registerGame",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "result",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "roll",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "requestId",
                "type": "uint256"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rolling_innings",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_players",
        "outputs": [
            {
                "internalType": "string",
                "name": "buyerId",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "buyerWallet",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "s_winner",
        "outputs": [
            {
                "internalType": "string",
                "name": "buyerId",
                "type": "string"
            },
            {
                "internalType": "address",
                "name": "buyerWallet",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "innings",
                "type": "uint256"
            }
        ],
        "name": "setRolling",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "setWin",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "innings",
                "type": "uint256"
            }
        ],
        "name": "startInning",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
