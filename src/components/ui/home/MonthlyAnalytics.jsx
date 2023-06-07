import React from 'react';
import '../../../styles/ui/home/MonthlyAnalytics.css';
import TipCard from '../../cards/TipCard';
import AnalyticsCard from '../../cards/AnalyticsCard';
const MonthlyAnalytics = () => {
  return (
    <section
      className='monthly-analytics'
      aria-details='All the details of the monthly analytics'
    >
      <h2>Monthly Analytics</h2>
      <TipCard text='Want more insights? Click on the card' />
      <section className='analytics-grid'>
        {/*  prettier-ignore  */}
        <AnalyticsCard title='Income' value={1020.20} stat={10} />
        <AnalyticsCard title='Reservations' value={20} stat={5} />
        <AnalyticsCard title='Kilometers' value={500} stat={-2} />
        <AnalyticsCard title='Cancelations' value={0} stat={0} />
      </section>
    </section>
  );
};

export default MonthlyAnalytics;
