export const ContarctAction = (Useraccount, txiContract) => async (
    dispatch
  ) => {
     txiContract.methods
      .balanceOf(Useraccount)
      .call()
      .then((balance) => { 
        // console.log("balance",balance);    
        dispatch({
          type: "BALANCE",
          payload: balance,
        });
      });
      txiContract.methods
      .calculateBNBReward(Useraccount)
      .call()
      .then((reward) => { 
        console.log("reward",reward);    
        dispatch({
          type: "USER_REWARD",
          payload: reward,
        });
      });
  };