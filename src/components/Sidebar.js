import React, { useEffect } from 'react'
// import Web3 from 'web3';
// import yfethabi from '../utils/yfethAbi.json'
// import Environment from '../utils/Environment';
// import getWeb3 from '../utils/Provider';
import {getContract} from '../utils/Provider';
import { ContarctAction } from '../redux/action';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import './sidebar.css'
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const Sidebar = () => {
  const dispatch = useDispatch();
  const { balance } = useSelector((state) => state.UserReducer);
  const [Useraccount, setAccount] = React.useState();
  const [txcontract, settxContract] = React.useState();
  const [checkuser, setcheckuser] = React.useState(false);
  const ConnectToWallet = () => {
    if (checkuser) {
      setcheckuser(false);
      console.log("hello");
      // const account=  window.ethereum.undefined();
      setAccount(undefined);
    } else {
      Ethereum();
      async function Ethereum() {
        window.ethereum.request({ method: "eth_requestAccounts" });
        if (typeof window.ethereum !== "undefined") {
          const account = await window.ethereum.request({
            method: "eth_requestAccounts",
          });
          console.log("here are the accounts====>", account);
          if (account) {
            setAccount(account[0]);
            // const Contract = new web3.eth.Contract(
            //   yfethabi,
            //   Environment.YfethContractAddress,

            // );
            const Contract=getContract()
            // console.log("Contract",Contract);
            settxContract(Contract);
          }
        }
        setcheckuser(true);
      }

    }

  };
  useEffect(() => {
    if (Useraccount !== undefined && txcontract !== undefined) {
      dispatch(ContarctAction(Useraccount, txcontract))
    }

  }, [Useraccount, txcontract])
  return (
    <>
      <div className="inner-content">
         <Link>
            <img src="assets/img/yfeth-assets/logo.svg" alt="" width="100px" className="img-fluid" />
          </Link>
        <button className="btn-common"><img src="assets/img/yfeth-assets/buy-icon.svg" alt="" /> BUY $YFETH</button>
        <div className="inner-tile text-left ptb10">
          <h3>Wallet Information</h3>
          <h6>Your Address:</h6>
          <p>{Useraccount ? Useraccount : ""}</p>
          <div className="row">
            <div className="col-sm-6">
              <div className="inner-side">
               <Link className="grey">
                  <img src="assets/img/yfeth-assets/copy-icon.svg" alt="" className="img-fluid" />
                  <span> Copy Address</span>
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="inner-side">
               <Link className="grey">
                  <img src="assets/img/yfeth-assets/external-link-icon.svg" alt="" className="img-fluid" />
                  <span> View on BscScan Explorer</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="p15">
          <h4>Your YFETH Balance:</h4>
          {/* <h5>YFETH 10.50</h5> */}
          <h6>{Useraccount ? balance : ""}</h6>
          <h6>(50.20 $)</h6>
          </div>
         
        </div>
        <div className="inner-tile1 text-left">
          <ul>
            <li>
             <Link  className="img-fluid">
                <img src="assets/img/yfeth-assets/home-icon.svg" alt="" className="img-fluid" />
                <span>	&nbsp;Homepage</span>
              </Link>
            </li>
            <li>
             <Link  className="img-fluid">
                <img src="assets/img/yfeth-assets/guide-icon.svg" alt="" className="img-fluid" />
                <span> &nbsp;Guide</span>
              </Link>
            </li>
            <li>
             <Link className="img-fluid">
                <img src="assets/img/yfeth-assets/contract-icon.svg" alt="" className="img-fluid" />
                <span> &nbsp;Contract</span>
              </Link>
            </li>
          </ul>
        </div>
        <button className="btn-common" onClick={ConnectToWallet}>
          <img src="assets/img/yfeth-assets/disconnect-icon.svg" alt="" className="img-fluid" />
          {Useraccount ? "Disconnect Wallet" : " Connect Wallet"} </button>
      </div>
    </>
  )
}

export default Sidebar;
