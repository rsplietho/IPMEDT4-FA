import React, { useEffect, useState } from 'react'
import Agenda_comp from '../components/agenda/Agenda_comp'
import Car_cards from '../components/agenda/Car_cards'
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../features/ReservationState';


function Bookings () {
    const AllReservations = useSelector((state) => state.AllReservations);
    const { reservations, success, error } = AllReservations;
    const [selectedDate, setSelectedDate] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReservations());
      }, []);

    const handleDateSelection = (date) => {
        setSelectedDate(date);
      }; 

      if (reservations === undefined) {
        return <div>Loading...</div>;
      }

      const filteredReservations = reservations.filter((reservation) => {
        // Filter de reserveringen op basis van de geselecteerde datum
        return (
          selectedDate &&
          selectedDate.toDateString() ===
            new Date(reservation.start_date).toDateString()
        );
      });

  return (
    <section className='container'>
      <Agenda_comp onSelectDate={handleDateSelection}/>
      {filteredReservations?.map((reservation) => (
            <Car_cards name_car={reservation.name_car} start_date={reservation.start_date} end_date={reservation.end_date} price={reservation.price} rentee_id={reservation.rentee_id}/>
          ))}
    </section>
  )
}

export default Bookings