import React from 'react'
import { Link } from 'react-router-dom';
import './farms.css';

const Farms = () => {
    const [show,setshow]=React.useState(true)
    const [disable, setDisable] = React.useState(false);
    const showinput=()=>{
        if(show){
            setDisable(true);
            setshow(false)
        }else{
            setshow(true)
          
        }
        console.log("harvest");
        
    }
    return (
        <>
          <section className="main-bg">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="farm-content">

                                <div className="inner-tile text-left">
                                    <div className="row brdr">
                                        <div className="col-sm-10">
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link>
                                                        <img src="assets/img/yfeth-assets/yfeth-eth.svg" alt="" className="img-fluid" />
                                                        <span> YFBTC/ETH </span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="inner-circle">
                                                <span>10x</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row brdr ptb20">
                                        <div className="col-sm-12">
                                            <h6 className="grey">MY LP SHARE</h6>
                                            <h4>288.1344001</h4>
                                        </div>
                                    </div>
                                    <div className="row ptb20">
                                        <div className="col-sm-8">
                                            <h6 className="common-g">YFETH <span className="grey">EARN</span> </h6>
                                            <h4>0.0000</h4>
                                        </div>
                                        {!show ? 
                                        <div className="col-sm-4">
                                        <div className="inner-circle">
                                            <button className="btn-common"  >Harvest</button>
                                        </div>
                                    </div> : <div className="col-sm-4">
                                        <div className="inner-circle">
                                            <button className="btn-common" disabled >Harvest</button>
                                        </div>
                                    </div>
}
                                        
                                    </div>
                                    {show? 
                                    <div className="row brdr ptb20">
                                        <div className="col-sm-12">
                                            <button className="btn-common" onClick={showinput}>Approve Contract</button>
                                        </div>
                                    </div>:<div className="row">
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="0" />
                                        </div>
                                    </div>
                                    <div className="col-sm-3">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <span className="plus">+</span>
                                            </li>
                                            <li className="list-inline-item">
                                                <span className="minus">-</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    }
                                    {/* <div className="row brdr ptb20">
                                        <div className="col-sm-12">
                                            <button className="btn-common">Approve Contract</button>
                                        </div>
                                    </div> */}
                                    <div className="row">
                                        <div className="col-sm-12 text-center">
                                            <Link className="common-g" type="button" data-toggle="modal" data-target="#exampleModal">ROI</Link>

                                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog" role="document">
                                                    <div className="modal-content">
                                                        <div className="modal-header brdr">
                                                            <h5 className="modal-title" id="exampleModalLabel">ROI</h5>
                                                            <button type="button" className="close common-g" data-dismiss="modal" aria-label="Close">
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div className="modal-body ptb20 text-left">
                                                            <div className="row">
                                                                <div className="col-sm-4 ">
                                                                    <h5>TIMEFRAME</h5>
                                                                    <h6 className="grey">1d</h6>
                                                                    <h6 className="grey margin_margin">7d</h6>
                                                                    <h6 className="grey margin_margin">30d</h6>
                                                                    <h6 className="grey margin_margin">365d(APY)</h6>
                                                                    
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <h5>ROI</h5>
                                                                    <h6 className="grey">0.15%</h6>
                                                                    <h6 className="grey margin_margin">1.15%</h6>
                                                                    <h6 className="grey margin_margin">6.15%</h6>
                                                                    <h6 className="grey margin_margin">9.15%</h6>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <h5>YFETH PER $1,000</h5>
                                                                    <h6 className="grey">0.11</h6>
                                                                    <h6 className="grey margin_margin">0.79</h6>
                                                                    <h6 className="grey margin_margin">3.44</h6>
                                                                    <h6 className="grey margin_margin">10.56</h6>
                                                                </div>
                                                            </div>
                                                            <div className="row ptb20">
                                                                <div className="col-sm-12 text-center">
                                                                    <p className="grey">Calculated based on current rates. Compounding 1x daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.</p>

                                                                    <Link className="common-g"> <span> Get YFETH-ETH LP</span> <img src="assets/img/yfeth-assets/external-link-icon.svg" alt="" className="img-fluid" /> </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Farms;
