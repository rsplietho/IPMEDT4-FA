import React from 'react';
import '../../styles/components/cards/MediumCard.css';
const MediumCard = () => {
  const time = '13:00 - 17:00';
  const car = 'Peugeot 208';
  const rentee = 'Annelies Smith';
  return (
    <div className='medium-card'>
      <p className='small-copy time'>{time}</p>
      <h4 className='copy-bold'>{car}</h4>
      <p className='small-copy rentee'>{rentee}</p>
      <button className='small-copy'>View</button>
    </div>
  );
};

export default MediumCard;
