import {Contract, ethers} from "ethers";
import {Store} from "redux";
import {ABI, SM_ADDRESS} from "../constants";
import {connect} from "../reduxs/slices/wallet";
import {fetchPlayer} from "../reduxs/slices/game";
import PlayerType from "../types/PlayerType";

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
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            this.reduxStore?.dispatch(connect({
                address: accounts[0]
            }))
            this.provider = new ethers.providers.Web3Provider(ethereum);
            this.signer = this.provider.getSigner();
            this.contract = new ethers.Contract(SM_ADDRESS, ABI, this.provider);
            return accounts[0] && this.provider && this.signer && this.contract
        } catch (error) {
            console.log(error);
            return false
        }
    }


    async connectContract() {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
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
            const result: PlayerType[] = [];
            for (let i = 0; ; i++) {
                try {
                    const res = await contractSigner.s_players(2, i);
                    result.push({
                        buyerId: res[0],
                        buyerWallet: res[1],
                        rewardId: "1",
                    })
                } catch (e) {
                    break
                }
            }
            console.log(result)
            this.reduxStore?.dispatch(fetchPlayer({
                players: result.reverse()
            }))
        }
    }

    async registerGame(id: string, inning: number) {
        if (this.contract && this.signer) {
            const contractSigner = this.contract?.connect(this.signer);
            const res = await contractSigner.registerGame(id, inning);
            console.log(res)
            alert("Register game success");
        } else {
            alert("Please connect MetaMask!");
        }
    }
}
