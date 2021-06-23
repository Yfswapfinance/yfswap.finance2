import React from 'react';
import Web3 from 'web3';
import { useSelector } from 'react-redux'

const RewardPool = () => {
    // const web3=new Web3();
    // const getbalance=web3.eth.getBalance();
    // console.log("getbalance",getbalance);
    const { reward } = useSelector((state) => state.UserReducer);
    console.log("reward",reward);
    return (
        <>
    <section className="secondlast">
        {/* <div className="container-fluid">
            <div className="row"> */}
                <div className="col-sm-12 p_00">
                    <div className="inner-tile-11">
                        <div className="row">
                            <div className="col-sm-4">
                                <div className="inner-content2 text-center">
                                    <h4>Reward Pool</h4>
                                    <img src="assets/img/yfeth-assets/reward-pool-image.svg" alt="" className="img-fluid"/>
                                    <h4>BNB 150.98</h4>
                                </div>
                            </div> 
                             <div className="col-sm-8">
                                <div className=" text-center">
                                    <h4>My Reward: <strong>{reward} BNB</strong> </h4>
                                    <h6 className="common-g ptb20">*pool is always changing based on buys, sell, and collects by others, learn more here<span className="br">?</span></h6>
                                    <h5 className="ptb20">You will be received {reward} BNB (ather tax)</h5>
                                    <button className="btn-common">
                                        <img src="assets/img/yfeth-assets/claim-reward-icon.svg" alt="" className="img-fluid"/>
                                        <span className=""> Claim My Reward</span> 
                                    </button>
                                </div>
                            </div>                
                        </div>
                    </div>
                </div>
            {/* </div>
            
        </div> */}
    </section>
            
        </>
    )
}

export default RewardPool
