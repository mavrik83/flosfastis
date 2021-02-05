export const fetchFlowers = () => async (dispatch) => {
  const response = await fetch("http://localhost:3002/flowers")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "FETCH_FLOWERS", payload: response.data });
};

export const createFlower = (formValues) => async (dispatch) => {
  const response = await fetch("http://localhost:3002/flowers", {
    method: "POST",
    body: JSON.stringify(formValues),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "CREATE_FLOWER", payload: response.data });
};
};
