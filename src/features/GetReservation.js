import axios from 'axios';

const RESERVATIONS_DETAILS_REQUEST = 'RESERVATIONS_DETAILS_REQUEST';
const RESERVATIONS_DETAILS_SUCCESS = 'RESERVATIONS_DETAILS_SUCCESS';
const RESERVATIONS_DETAILS_FAIL = 'RESERVATIONS_DETAILS_FAIL';
export const RESERVATIONS_DETAILS_RESET = 'RESERVATIONS_DETAILS_RESET';

export const CarDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RESERVATIONS_DETAILS_REQUEST,
    });

    const { data } = await axios.get(
      `http://localhost:8000/api/reservations/${id}`
    );

    dispatch({
      type: RESERVATIONS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: RESERVATIONS_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const CarDetailsReducer = (state = { reservation: {} }, action) => {
  switch (action.type) {
    case RESERVATIONS_DETAILS_REQUEST:
      return { loading: true };
    case RESERVATIONS_DETAILS_SUCCESS:
      return { loading: false, reservation: action.payload, success: true };
    case RESERVATIONS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case RESERVATIONS_DETAILS_RESET:
      return { reservation: {} };
    default:
      return state;
  }
};
