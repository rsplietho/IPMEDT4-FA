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
      {filteredReservations.length > 0 ? (
        <>
          {filteredReservations?.map((reservation) => (
            <div key={reservation.id}>
              {cars?.map((car) => (
                <div key={car.id}>
                  {' '}
                  {car.id == reservation.car_id ? (
                    <div>
                      {' '}
                      <CarCards
                        key={reservation.id}
                        name_car={car.nickname}
                        start_date={reservation.start_date}
                        end_date={reservation.end_date}
                        price={reservation.price}
                        rentee_id={reservation.rentee_id}
                      />{' '}
                    </div>
                  ) : null}{' '}
                </div>
              ))}{' '}
            </div>
          ))}{' '}
        </>
      ) : (
        <h2 style={{ margin: '0 auto' }}>No Bookings Today</h2>
      )}{' '}
    </section>
  );
}
export default Bookings;
