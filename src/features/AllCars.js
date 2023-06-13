import axios from 'axios';
const GET_CARS_REQUEST = 'GET_CARS_REQUEST';
const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
const GET_CARS_FAIL = 'GET_CARS_FAIL';
const GET_CARS_RESET = 'GET_CARS_RESET';
export const getCars = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_CARS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:8000/api/cars`);

    dispatch({
      type: GET_CARS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_CARS_FAIL,
      payload: message,
    });
  }
};

export const getCarsReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case GET_CARS_REQUEST:
      return { loading: true };
    case GET_CARS_SUCCESS:
      return { loading: false, cars: action.payload, success: true };
    case GET_CARS_FAIL:
      return { loading: false, error: action.payload };
    case GET_CARS_RESET:
      return { cars: [] };
    default:
      return state;
  }
};
