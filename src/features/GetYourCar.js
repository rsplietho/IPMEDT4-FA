import axios from 'axios';
const GET_YOUR_CARS_REQUEST = 'GET_YOUR_CARS_REQUEST';
const GET_YOUR_CARS_SUCCESS = 'GET_YOUR_CARS_SUCCESS';
const GET_YOUR_CARS_FAIL = 'GET_YOUR_CARS_FAIL';
const GET_YOUR_CARS_RESET = 'GET_YOUR_CARS_RESET';
export const getYourCars = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_YOUR_CARS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:8000/api/usercars`, 2);

    dispatch({
      type: GET_YOUR_CARS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_YOUR_CARS_FAIL,
      payload: message,
    });
  }
};

export const getYourCarsReducer = (state = { cars: [] }, action) => {
  switch (action.type) {
    case GET_YOUR_CARS_REQUEST:
      return { loading: true };
    case GET_YOUR_CARS_SUCCESS:
      return { loading: false, cars: action.payload, success: true };
    case GET_YOUR_CARS_FAIL:
      return { loading: false, error: action.payload };
    case GET_YOUR_CARS_RESET:
      return { cars: [] };
    default:
      return state;
  }
};