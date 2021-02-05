const frostReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_FROST":
      return action.payload;
    default:
      return state;
  }
};

export default frostReducer;
