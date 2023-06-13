import axios from 'axios';

const CAR_DETAILS_REQUEST = 'CAR_DETAILS_REQUEST';
const CAR_DETAILS_SUCCESS = 'CAR_DETAILS_SUCCESS';
const CAR_DETAILS_FAIL = 'CAR_DETAILS_FAIL';
export const CAR_DETAILS_RESET = 'CAR_DETAILS_RESET';

export const CarDetails = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CAR_DETAILS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:8000/api/cars/${id}`);

    dispatch({
      type: CAR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: CAR_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const CarDetailsReducer = (state = { car: {} }, action) => {
  switch (action.type) {
    case CAR_DETAILS_REQUEST:
      return { loading: true };
    case CAR_DETAILS_SUCCESS:
      return { loading: false, car: action.payload, success: true };
    case CAR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case CAR_DETAILS_RESET:
      return { car: {} };
    default:
      return state;
  }
};
