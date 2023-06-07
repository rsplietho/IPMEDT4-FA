import React from 'react';
import { ReactComponent as Dashboard } from '../../assets/dashboard.svg';
import { ReactComponent as Cars } from '../../assets/car.svg';
import { ReactComponent as Bookings } from '../../assets/bookings.svg';
import { ReactComponent as Messages } from '../../assets/message.svg';
import { ReactComponent as Profile } from '../../assets/profile.svg';
import '../../styles/components/navigation/BottomNav.css';
import { Link } from 'react-router-dom';
const BottomNav = () => {
  return (
    <section className='bottom-bar'>
      <Link to='/' className='item'>
        <Dashboard />
        <p>Dashboard</p>
      </Link>
      <Link to='/cars' className='item'>
        <Cars />
        <p>Cars</p>
      </Link>
      <Link to='/bookings' className='item'>
        <Bookings />
        <p>Bookings</p>
      </Link>
      <Link to='/messages' className='item'>
        <Messages />
        <p>Messages</p>
      </Link>
      <Link to='/profile' className='item'>
        <Profile />
        <p>Profile</p>
      </Link>
    </section>
  );
};

export default BottomNav;
