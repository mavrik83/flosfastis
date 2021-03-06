const eventReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_EVENTS":
      return action.payload;
    case "CREATE_EVENT":
      return [...state, action.payload];
    case "DELETE_EVENT":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default eventReducer;
