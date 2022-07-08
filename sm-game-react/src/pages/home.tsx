import api from "../api";
import {useState} from "react";
import Web3R from "web3-react";

declare global {
    interface Window {
        ethereum: any;
    }
}

function Home() {
    const [account, setAccount] =  useState("")
    const [address, setAddress] = useState<string>()
    const [lcContract, setLcContract] = useState()

    function checkMetamask(){
        const { ethereum } = window;
        if (!ethereum) {
            alert("please install metamask")
            return;
        } else {
            alert("metamask installed")

        }
    }
    const connectWalletHandler = async () => {
        /* check if MetaMask is installed */
        const {ethereum} = window;

        if (!!ethereum) {
            try {
                /* request wallet connection */
                const accounts = await ethereum.request({method: "eth_requestAccounts"})
                setAccount(accounts[0])
                /* create web3 instance & set to state */
                //const web3 = new Web3(ethereum)
                /* set web3 instance in React state */
                //setWeb3(web3)
                /* get list of accounts */
                //const accounts = await web3.eth.getAccounts()
                // /* set account 1 to React state */
                // setAddress(accounts[0])

                /* create local contract copy */
                // const lc = lotteryContract(web3)
                // setLcContract(lc)

                // window.ethereum.on('accountsChanged', async () => {
                //     const accounts = await web3.eth.getAccounts()
                //     console.log(accounts[0])
                //     /* set account 1 to React state */
                //     setAddress(accounts[0])
                // })
            } catch (err) {
            }
        } else {
            /* MetaMask is not installed */
            console.log("Please install MetaMask")
        }
    }

    const login = async () => {
        const res = await api.post("/",{
            name: "Anh",
            wallet:"test"
        });

        if (res.status === 200) {
            console.log(res)
            //setGames(res.data);
        }
    }
    return (
        <div>
            <div onClick={checkMetamask}>LVA</div>
            <div onClick={connectWalletHandler}>
                Connect wallet
            </div>
        </div>
    );
}

export default Home;
