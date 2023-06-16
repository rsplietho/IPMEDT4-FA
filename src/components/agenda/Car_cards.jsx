import React from 'react'
import { ReactComponent as Dashboard } from '../../assets/dashboard.svg';
import car_img from '../../assets/black_Fiat_500.jpg';
import '../../styles/components/agenda/car_card.css';

function Car_cards({name_car, start_date, end_date, price, rentee_id }) {
  return (
    <div className='card_container'>
        <img className='car_img' src={car_img} alt="car_img" />
        <span className='middle_text'>
          <p className='name'>{name_car}</p>
          <p className='time'>{start_date} - {end_date}</p> 
          <p className='request'>Request accepted</p> 
        </span>
        <span className='end_text'>
            <p>€{price}</p>
            <p>#{rentee_id}</p>
        </span>
        
    </div>
  )
}

export default Car_cards