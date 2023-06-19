import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getCarsReducer } from './features/AllCars';
import { getYourCarsReducer } from './features/GetYourCar';
import { CarDetailsReducer } from './features/GetCarDetails';
import { YourDetailsReducer } from './features/GetYourDetails';
import { LoginReducer } from './features/UserLogin';
import { getReservationsReducer } from './features/ReservationState';
import { getYourReservationsReducer } from './features/GetYourReservations';
import { monthReducer } from './features/MonthSelector';
const reducer = combineReducers({
  AllCars: getCarsReducer,
  CarDetails: CarDetailsReducer,
  YourCars: getYourCarsReducer,
  YourDetails: YourDetailsReducer,
  UserLogin: LoginReducer,
  AllReservations: getReservationsReducer,
  Reservation: getReservationsReducer,
  YourReservations: getYourReservationsReducer,
  Month: monthReducer,
});
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
