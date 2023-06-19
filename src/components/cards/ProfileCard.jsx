import React from 'react';
import '../../styles/components/cards/Profile-Hero.css';
import profileImage from '../../assets/profile-img.jpg';
const ProfileCard = () => {
  return (
    <section className='profile-hero'>
      <img src={profileImage} alt='profile' className='rounded-img' />
      <section>
        <h1 className='hero'>Rohit Gelaudie</h1>
        <p className='small-copy-bold'>Snappcar Credits: € 16</p>
      </section>
    </section>
  );
};

export default ProfileCard;
