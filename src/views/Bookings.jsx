import React, { useEffect, useState } from 'react';
import AgendaComp from '../components/agenda/AgendaComp';
import CarCards from '../components/agenda/CarCards';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../features/ReservationState';
import { getCars } from '../features/AllCars';

function Bookings() {
  const AllReservations = useSelector((state) => state.AllReservations);
  const { reservations, success, error } = AllReservations;
  const AllCars = useSelector((state) => state.AllCars);
  const { cars } = AllCars;
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
    dispatch(getCars());
  }, []);

  const handleDateSelection = (date) => {
    setSelectedDate(date);
  };

  if (reservations === undefined) {
    return <h1>Loading...</h1>;
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
      <AgendaComp onSelectDate={handleDateSelection} />
      {filteredReservations?.map((reservation) => (
        <>
          {cars?.map((car) => (
            <>
              {car.id === reservation.car_id ? (
                <>
                  {console.log('True')}
                  <CarCards
                    key={reservation._id}
                    name_car={car.nickname}
                    start_date={reservation.start_date}
                    end_date={reservation.end_date}
                    price={reservation.price}
                    rentee_id={reservation.rentee_id}
                  />
                </>
              ) : null}
            </>
          ))}
        </>
      ))}
    </section>
  );
}

export default Bookings;
