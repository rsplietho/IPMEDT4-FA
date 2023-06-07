import React from 'react';
import MediumCard from '../../cards/MediumCard';
import '../../../styles/ui/home/BookingToday.css';
import TipCard from '../../cards/TipCard';
const BookingToday = () => {
  const bookings = true;
  return (
    <section className='booking-today'>
      <h2>Bookings Today</h2>
      {bookings ? (
        <section className='card-section'>
          <MediumCard />
          <MediumCard />
        </section>
      ) : (
        <>
          <p>No Bookings Today</p>
          <TipCard text='Click here for tips on how to increase bookings' />
        </>
      )}
    </section>
  );
};

export default BookingToday;
