import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { getCarsReducer } from './features/AllCars';
import { getYourCarsReducer } from './features/GetYourCar';
const reducer = combineReducers({
  AllCars: getCarsReducer,
  YourCars: getYourCarsReducer,
});
const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
