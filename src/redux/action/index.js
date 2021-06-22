export const totalVotes = (Useraccount, txiContract) => async (
    dispatch
  ) => {
     txiContract.methods
      .totalVotes()
      .call()
      .then((val) => { 
        // console.log("val",val);    
        dispatch({
          type: "1",
          payload: val,
        });
      });
      txiContract.methods
      .voted(Useraccount)
      .call()
      .then((val) => { 
        // console.log("voted",val);    
        dispatch({
          type: "2",
          payload: val,
        });
      });
  };