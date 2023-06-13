import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '../Alert';
import { getYourCars } from '../../../features/GetYourCar';

const AllCars = () => {
  const dispatch = useDispatch();
  const YourCars = useSelector((state) => state.YourCars);
  const { cars, success, error } = YourCars;
  useEffect(() => {
    dispatch(getYourCars());
  }, []);
  return (
    <>
      {success ? (
        <div>
          {cars.map((car) => (
            <h1 key={car.id}>{car.nickname}</h1>
          ))}
        </div>
      ) : (
        <Alert message={error} type='warning' />
      )}
    </>
  );
};

export default AllCars;
