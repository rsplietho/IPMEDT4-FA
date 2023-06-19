import React from 'react';
import ProfileCard from '../components/cards/ProfileCard';
import EditButton from '../styles/ui/profile/EditButton';
import Cards from '../styles/ui/profile/Cards';

const Profile = () => {
  return (
    <section className='container'>
      <ProfileCard />
      <EditButton />
      <Cards />
    </section>
  );
};

export default Profile;
