import React from 'react';
import '../../styles/components/cards/TipCard.css';
import { ReactComponent as Help } from '../../assets/help.svg';
const TipCard = ({ text, type }) => {
  return (
    <div className='flex'>
      <div className='tip-card small-copy'>{text}</div>{' '}
      {type ? <Help className='help' /> : null}{' '}
    </div>
  );
};

export default TipCard;
