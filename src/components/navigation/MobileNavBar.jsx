import React from 'react';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import '../../styles/components/navigation/MobNav.css';
const MobileNavBar = () => {
  return (
    <header>
      <nav>
        <Logo className='mob-logo' />
      </nav>
    </header>
  );
};

export default MobileNavBar;
