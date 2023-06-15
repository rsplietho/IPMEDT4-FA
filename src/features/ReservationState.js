import axios from 'axios';

const GET_RESERVATIONS_REQUEST = 'GET_RESERVATIONS_REQUEST';
const GET_RESERVATIONS_SUCCESS = 'GET_RESERVATIONS_SUCCESS';
const GET_RESERVATIONS_FAIL = 'GET_RESERVATIONS_FAIL';
export const GET_RESERVATIONS_RESET = 'GET_RESERVATIONS_RESET';

export const getReservations = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_RESERVATIONS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:8000/api/reservations`);

    dispatch({
      type: GET_RESERVATIONS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: GET_RESERVATIONS_FAIL,
      payload: message,
    });
  }
};

export const getReservationsReducer = (
  state = { reservations: [] },
  action
) => {
  switch (action.type) {
    case GET_RESERVATIONS_REQUEST:
      return { loading: true };
    case GET_RESERVATIONS_SUCCESS:
      return { loading: false, cars: action.payload, success: true };
    case GET_RESERVATIONS_FAIL:
      return { loading: false, error: action.payload };
    case GET_RESERVATIONS_RESET:
      return { reservations: [] };
    default:
      return state;
  }
};
