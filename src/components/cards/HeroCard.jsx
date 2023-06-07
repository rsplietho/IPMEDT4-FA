import React from 'react';
import { ReactComponent as FullStar } from '../../assets/star.svg';
import '../../styles/components/cards/HeroCard.css';
const HeroCard = ({ user }) => {
  return (
    <section className='hero-card'>
      <h2>Good evening, Luke</h2>
      <div className='rating'>
        <FullStar className='star' />

        <p>4.6 Avg</p>
      </div>
    </section>
  );
};

export default HeroCard;
