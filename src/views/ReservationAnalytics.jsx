import React from 'react';
import MonthSection from '../components/ui/details/MonthSection';
import AnalyticsSection from '../components/ui/details/AnalyticsSection';
import GraphsSection from '../components/ui/details/GraphsSection';

const ReservationAnalytics = () => {
  return (
    <section className='container'>
      <MonthSection />
      <AnalyticsSection type={'reservations'} />
      <GraphsSection type={'reservations'} />
    </section>
  );
};

export default ReservationAnalytics;
