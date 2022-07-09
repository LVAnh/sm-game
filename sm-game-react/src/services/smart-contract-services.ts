import {Contract, ethers} from "ethers";
import {Store} from "redux";
import {ABI, SM_ADDRESS} from "../constants";
import {connect} from "../reduxs/slices/wallet";
import {fetchGame, fetchPlayer, setIsRolling, getInning} from "../reduxs/slices/game";
import PlayerType from "../types/PlayerType";
import GameType from "../types/GameType";

declare global {
    interface Window {
        ethereum?: any
    }
}
export default class SmartContractService {
    private contract?: Contract;
    private provider?: ethers.providers.Web3Provider;
    private signer?: ethers.providers.JsonRpcSigner;
    private static _instance ?: SmartContractService;
    private reduxStore ?: Store;

    setReduxStore(store ?: Store) {
        if (store) {
            this.reduxStore = store;
        }
    }

    static instance(store ?: Store): SmartContractService {
        if (!SmartContractService._instance) {
            SmartContractService._instance = new SmartContractService();
        }
        if (!!store) {
            SmartContractService._instance.setReduxStore(store)
        }
        return SmartContractService._instance;
    }

    async connectWallet() {
        try {
            const {ethereum} = window;
            if (!ethereum) {
                alert("Please install MetaMask!");
                return;
            }

            this.provider = new ethers.providers.Web3Provider(ethereum);
            const accounts = await this.provider.send("eth_requestAccounts", []);
            this.signer = this.provider.getSigner();
            this.reduxStore?.dispatch(connect({
                address: await this.signer.getAddress()
            }))

            this.contract = new ethers.Contract(SM_ADDRESS, ABI, this.provider);
            return accounts[0] && this.provider && this.signer && this.contract
        } catch (error) {
            console.log(error);
            return false
        }
    }


    async startNewGame() {
        if (this.contract && this.signer) {
            try {
                const contractSigner = this.contract?.connect(this.signer);
                await contractSigner.startGame();
                alert("Start Game success");
            } catch (e) {
                alert("Start Game fail");
            }
        } else {
            alert("Start Game fail");
        }
    };

    checkRollSuccess() {
        if (this.contract && this.signer) {
            this.reduxStore?.dispatch(setIsRolling(1))

            const contractSigner = this.contract?.connect(this.signer);

            let seconds = 100;
            let myInterval = setInterval(() => {
                if (seconds > 0) {
                    seconds--;
                    contractSigner.isFinishRoll().then((res: boolean) => {
                        if (res) {
                            this.reduxStore?.dispatch(setIsRolling(2))
                            alert("Roll success. Please Finish roll")
                            clearInterval(myInterval)
                        }
                    })
                }
                if (seconds === 0) {
                    clearInterval(myInterval)
                }
            }, 3000)
        }
    }

    async getInning() {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
            const inningRes = await contractSigner.getInning();
            const inning = Number(inningRes)
            this.reduxStore?.dispatch(getInning(inning))
        }
    }


    async roll() {
        if (this.contract && this.signer) {
            try {
                const contractSigner = this.contract?.connect(this.signer);
                await contractSigner.roll();
                this.checkRollSuccess()
                alert("Start roll!");
            } catch (e) {
                alert("Roll fail");
            }
        } else {
            alert("Roll fail");
        }
    };

    async finishRoll() {
        if (this.contract && this.signer) {
            try {
                const contractSigner = this.contract?.connect(this.signer);
                await contractSigner.setWin();
                this.reduxStore?.dispatch(setIsRolling(0))
                alert("Finish roll!");
            } catch (e) {
                alert("Roll fail");
            }
        } else {
            alert("Roll fail");
        }
    };

    async getWinner() {
        if (this.contract) {
            return await this.contract.s_winner(1);
        }
    }

    async getAllPlayer() {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
            const inningRes = await contractSigner.getInning();
            const inning = Number(inningRes)
            const result: PlayerType[] = [];
            const res = await contractSigner.getPlayers(inning);
            console.log(res)
            res.forEach((player: string[]) => {
                result.push({
                    id: player[0],
                    wallet: player[1],
                    reward: player[2],
                })
            })
            this.reduxStore?.dispatch(fetchPlayer(result.reverse()))
        }
    }

    async getAllGame() {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
            const result: GameType[] = [];
            const currentInning = await contractSigner.getInning();
            const isFinishRoll = await contractSigner.isFinishRoll();
            this.reduxStore?.dispatch(setIsRolling(isFinishRoll?2:0))

            for (let i = 1; i <= currentInning; i++) {
                const players = await contractSigner.getPlayers(i);
                const winner = await contractSigner.getWinner(i);
                result.push({
                    inning: i,
                    total_player: players.length || 0,
                    winner: (!winner[0]) ? '' : winner[1],
                })
            }
            console.log(result)
            this.reduxStore?.dispatch(fetchGame(result))
        }
    }

    async registerGame(id: string, reward: string) {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
            const res = await contractSigner.registerGame(id, reward);
            console.log(res)
            alert("Register game success");
        } else {
            alert("Please connect MetaMask!");
        }
    }
}
