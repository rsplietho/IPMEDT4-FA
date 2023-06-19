import axios from 'axios';
const GET_YOUR_RESERVATIONS_REQUEST = 'GET_YOUR_RESERVATIONS_REQUEST';
const GET_YOUR_RESERVATIONS_SUCCESS = 'GET_YOUR_RESERVATIONS_SUCCESS';
const GET_YOUR_RESERVATIONS_FAIL = 'GET_YOUR_RESERVATIONS_FAIL';
export const GET_YOUR_RESERVATIONS_RESET = 'GET_YOUR_RESERVATIONS_RESET';
export const getYourReservations = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_YOUR_RESERVATIONS_REQUEST,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/userreservations`,
      1
    );

    dispatch({
      type: GET_YOUR_RESERVATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_YOUR_RESERVATIONS_FAIL,
      payload: message,
    });
  }
};

export const getYourReservationsReducer = (
  state = { reservations: [] },
  action
) => {
  switch (action.type) {
    case GET_YOUR_RESERVATIONS_REQUEST:
      return { loading: true };
    case GET_YOUR_RESERVATIONS_SUCCESS:
      return { loading: false, cars: action.payload, success: true };
    case GET_YOUR_RESERVATIONS_FAIL:
      return { loading: false, error: action.payload };
    case GET_YOUR_RESERVATIONS_RESET:
      return { reservations: [] };
    default:
      return state;
  }
};
