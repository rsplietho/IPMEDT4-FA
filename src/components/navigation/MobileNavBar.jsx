import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '../../styles/components/navigation/MobNav.css';
import { Link } from 'react-router-dom';
const MobileNavBar = () => {
  return (
    <header>
      <nav>
        <Link to={'/'} className='link-fix'>
          <Logo className='mob-logo' />
        </Link>

        <ul className='flex mob-hidden'>
          <li>
            <Link to={'/'}> Dashboard</Link>
          </li>
          <li>
            <Link to={'/cars'}>Cars</Link>
          </li>
          <li>
            <Link to={'/bookings'}>Bookings</Link>
          </li>
          <li>
            <Link to={'/messages'}>Messages</Link>
          </li>
          <li>
            <Link to={'/profile'}>Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavBar;
