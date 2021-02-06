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

export const deleteFlower = (id) => async (dispatch) => {
  await fetch(`http://localhost:3002/flowers/${id}`, {
    method: "DELETE",
  });
  dispatch({ type: "DELETE_FLOWER", payload: id });
};

export const getFrostInfo = (zip) => async (dispatch) => {
  const response = await fetch(`http://localhost:3002/scrape/${zip}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "GET_FROST", payload: response });
};

export const fetchEvents = () => async (dispatch) => {
  const response = await fetch("http://localhost:3002/events")
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "FETCH_EVENTS", payload: response.data });
};

export const createEvent = (eventObject) => async (dispatch) => {
  const response = await fetch("http://localhost:3002/events", {
    method: "POST",
    body: JSON.stringify(eventObject),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
  dispatch({ type: "CREATE_EVENT", payload: response.data });
};

