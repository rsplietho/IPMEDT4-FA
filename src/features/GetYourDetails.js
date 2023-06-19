import axios from 'axios';

const YOUR_DETAILS_REQUEST = 'YOUR_DETAILS_REQUEST';
const YOUR_DETAILS_SUCCESS = 'YOUR_DETAILS_SUCCESS';
const YOUR_DETAILS_FAIL = 'YOUR_DETAILS_FAIL';
export const YOUR_DETAILS_RESET = 'YOUR_DETAILS_RESET';

export const YourDetails = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: YOUR_DETAILS_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await axios.get(
      `${process.env.REACT_API_URL}/user`,
      config
    );

    dispatch({
      type: YOUR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: YOUR_DETAILS_FAIL,
      payload: message,
    });
  }
};

export const YourDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case YOUR_DETAILS_REQUEST:
      return { ...state, loading: true };
    case YOUR_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case YOUR_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case YOUR_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};
