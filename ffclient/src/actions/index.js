export const fetchFlowers = () => async (dispatch) => {
  const response = await fetch("http://localhost:3002/flowers")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "FETCH_FLOWERS", payload: response.data });
};

