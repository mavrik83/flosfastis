const selectedReducer = (state = [], action) => {
  if (action.type === "SELECT_FLOWER") {
    return action.payload;
  }
  return state;
};

export default selectedReducer;
