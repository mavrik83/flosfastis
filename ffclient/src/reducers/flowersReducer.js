const flowersReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_FLOWERS":
      return action.payload;
    case "CREATE_FLOWER":
      return [...state, action.payload];
    case "DELETE_FLOWER":
      return state.filter((item) => item.attributes.id !== action.payload);
    default:
      return state;
  }
};

export default flowersReducer;
