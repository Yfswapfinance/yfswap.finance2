let initState = {};

export const UserReducer = (state = initState, action) => {
  const { type, payload } = action; //object destructring
  switch (type) {
    case "1":
      return {
        ...state,
        data: payload,
      };
    case "2":
      return {
        ...state,
        data: payload,
      };

    default:
      return state;
  }
};