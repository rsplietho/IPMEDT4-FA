import React from 'react';
import { ReactComponent as ArrowLeft } from '../../../assets/chevron-Left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/chevron-Right.svg';
import '../../../styles/ui/details/MonthSection.css';
const MonthSection = () => {
  return (
    <section className='month-selector'>
      <ArrowLeft
        style={{
          transform: 'scale(2)',
          fill: 'white',
          width: '24px',
          height: '24px',
        }}
      />
      <h2>This month</h2>
      <ArrowRight
        style={{
          transform: 'scale(2)',
          fill: 'white',
          width: '24px',
          height: '24px',
        }}
      />
    </section>
  );
};

export default MonthSection;
