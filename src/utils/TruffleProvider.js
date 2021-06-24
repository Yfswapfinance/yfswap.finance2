import HDWalletProvider from "@truffle/hdwallet-provider";
import yfethabi from './yfethAbi.json'
import Environment from './Environment';
import Web3 from "web3";   
import getWeb3 from "./Providers"; 
import { getaccount } from "./Providers"; 
const privatekey = "54acfcc23a101895cef5a04b42e4a27006ac62ca08d6b7500e8dbf2f988250ac"; // private key
let provider = new HDWalletProvider(privatekey, "https://data-seed-prebsc-1-s1.binance.org:8545/");

const getTruffleProvider=()=>{
    const web3 = new Web3(provider);
    return web3;
}
const getContract=()=>{
    const web3=getWeb3();
    return new web3.eth.Contract(
        yfethabi,
        Environment.YfethContractAddress
    )
}
const getallvalue = async (Useraccount, txiContract) =>  {
    const useraccount=getaccount(Useraccount[0]);
    console.log("useraccount",useraccount);
    const contract=getContract();
    contract.methods
    .balanceOf(useraccount)
    .call()
    .then((balance)=>{
      console.log("balance",balance);   
        return balance;
    }).error((err)=>{
        console.log("error",err)
       return 0;
    })
    contract.methods
    .calculateBNBReward(useraccount)
    .call()
    .then((reward)=>{
         console.log("reward",reward);   
    return reward;
    })
}



export default getTruffleProvider;
export {getContract,getallvalue};