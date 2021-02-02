const flowersReducer = (state = [], action) => {
  if (action.type === "FETCH_FLOWERS") {
    return action.payload;
  }
  return state;
};

export default flowersReducer;
