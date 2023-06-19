import axios from 'axios';
import { GET_CARS_RESET } from './AllCars';
import { CAR_DETAILS_RESET } from './GetCarDetails';
import { GET_YOUR_CARS_RESET } from './GetYourCar';
import { YOUR_DETAILS_RESET } from './GetYourDetails';

const USER_LOGIN_REQUEST = ' USER_LOGIN_REQUEST';
const USER_LOGIN_SUCCESS = ' USER_LOGIN_SUCCESS';
const USER_LOGIN_FAIL = ' USER_LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: GET_CARS_RESET });
  dispatch({ type: CAR_DETAILS_RESET });
  dispatch({ type: GET_YOUR_CARS_RESET });
  dispatch({ type: YOUR_DETAILS_RESET });
  document.location.href = '/login';
};
export const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
