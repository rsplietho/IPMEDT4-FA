import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CrashedCar } from '../assets/broken-car.svg';
import '../styles/views/404.css';
const NotFound = () => {
  return (
    <section className='container notfound-container'>
      <h1>If this page is a car this is what it would look like</h1>
      <CrashedCar />
      <Link to={'/'}>Click here to fix the car</Link>
    </section>
  );
};

export default NotFound;
