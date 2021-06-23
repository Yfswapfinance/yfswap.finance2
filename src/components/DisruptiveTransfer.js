import React from 'react';
import './disruptive.css';

const DisruptiveTransfer = () => {
    return (
        <>
         <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12 text-center">
                    <div class="disrpt-content">

                        <div class="inner-tile">
                            <h4>Disuptive Transfer between 2 wallets <span class="circle">?</span> </h4>
                             <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Recipient (address)"/>
                              </div>
                              <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Amount (YFETH)"/>
                                <span class="common-g">Max</span>
                              </div>

                              <button class="btn-common">
                                  <img src="assets/img/yfeth-assets/send-icon.svg" alt="" class="img-fluid"/>
                                  <span>Send</span>
                              </button>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
        </>
    )
}

export default DisruptiveTransfer;
