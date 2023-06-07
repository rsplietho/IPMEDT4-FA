import React from 'react';
import HeroCard from '../components/cards/HeroCard';
import BookingToday from '../components/ui/home/BookingToday';
import MonthlyAnalytics from '../components/ui/home/MonthlyAnalytics';

const Home = () => {
  return (
    <section className='container'>
      <HeroCard />
      <BookingToday />
      <MonthlyAnalytics />
    </section>
  );
};

export default Home;
