import React from 'react';
import '../../styles/components/cards/TipCard.css';
const TipCard = ({ text }) => {
  return <div className='tip-card small-copy'>{text}</div>;
};

export default TipCard;
