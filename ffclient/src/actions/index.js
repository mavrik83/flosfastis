export const fetchFlowers = () => async (dispatch) => {
  const response = await fetch("http://localhost:3002/flowers")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "FETCH_FLOWERS", payload: response.data });
};

export const selectFlower = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3002/flowers/${id}`)
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "SELECT_FLOWER", payload: response.data });
};
