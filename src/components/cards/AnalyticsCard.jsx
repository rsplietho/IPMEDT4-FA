import React from 'react';
import { ReactComponent as Arrow } from '../../assets/Back-Arrow.svg';
import { ReactComponent as Dash } from '../../assets/dash.svg';
import '../../styles/components/cards/AnalyticsCard.css';
const AnalyticsCard = ({ title, value, stat }) => {
  return (
    <section
      className='content'
      aria-details='A card of analytics of your income'
    >
      <h3>{title}</h3>
      <div className='analytics-card'>
        <p className='copy-bold'>
          {title === 'Income' ? '€ ' : null}
          {value}
          {title === 'Kilometers' ? 'km' : null}
        </p>
        <section className='stat'>
          {stat > 0 ? (
            <>
              <Arrow />
              <p className='small-copy' style={{ color: '#0DA916' }}>
                {stat}%
              </p>
            </>
          ) : stat < 0 ? (
            <>
              <Arrow
                className='negative'
                style={{ transform: 'rotation(-180deg)' }}
              />
              <p className='small-copy' style={{ color: '#E8200D' }}>
                {stat}%
              </p>
            </>
          ) : (
            <>
              <Dash style={{ fill: '#838A8D' }} />
              <p className='small-copy' style={{ color: '#838A8D' }}>
                {stat}%
              </p>
            </>
          )}
        </section>
        <p className='small-copy ' id='last-month'>
          vs last month
        </p>
      </div>
    </section>
  );
};

export default AnalyticsCard;
