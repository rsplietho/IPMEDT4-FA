import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './views/Home';
import { Provider } from 'react-redux';
import AllCars from './components/ui/cars/AllCars';
import Login from './views/Login';
import Bookings from './views/Bookings';
import IncomeAnalytics from './views/IncomeAnalytics';
import ReservationAnalytics from './views/ReservationAnalytics';
import NotFound from './views/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='*' element={<NotFound />} />
      <Route path='' element={<Home />} />
      <Route path='/testing' element={<AllCars />} />
      <Route path='/login' element={<Login />} />
      <Route path='/bookings' element={<Bookings />} />
      <Route path='/income' element={<IncomeAnalytics />} />
      <Route path='/reservations' element={<ReservationAnalytics />} />
    </Route>
  )
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
