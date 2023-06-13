import React from 'react';
import { ReactComponent as FullStar } from '../../assets/star.svg';
import { ReactComponent as Tree } from '../../assets/tree.svg';
import { ReactComponent as Sun } from '../../assets/Sun.svg';
import { ReactComponent as Car } from '../../assets/car-ill.svg';
import '../../styles/components/cards/HeroCard.css';
const HeroCard = ({ user }) => {
  return (
    <section className='hero-card'>
      <section className='hidden'>
        <Sun className='sun ' />
      </section>
      <h2>Good evening, Luke</h2>
      <div className='rating'>
        <FullStar className='star' />

        <p>4.6 Avg</p>
      </div>
      <section className='hidden'>
        <Car className='car' />
        <Tree className='tree' />
        <div className='grass'></div>
      </section>
    </section>
  );
};

export default HeroCard;
