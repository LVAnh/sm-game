import {Contract, ethers} from "ethers";
import {Store} from "redux";
import {ABI, SM_ADDRESS} from "../constants";

export default class SmartContractService {
    private contract?: Contract;
    private account?: string;
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
            this.account = accounts[0]
            this.provider = new ethers.providers.Web3Provider(ethereum);
            this.signer = this.provider.getSigner();
            this.contract = new ethers.Contract(SM_ADDRESS, ABI, this.provider);
            return this.account && this.provider && this.signer && this.contract
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
}
