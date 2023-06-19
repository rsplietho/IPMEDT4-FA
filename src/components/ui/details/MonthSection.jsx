import React from 'react';
import { ReactComponent as ArrowLeft } from '../../../assets/chevron-Left.svg';
import { ReactComponent as ArrowRight } from '../../../assets/chevron-Right.svg';
import '../../../styles/ui/details/MonthSection.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFirstSVG,
  toggleSecondSVG,
  updateText,
} from '../../../features/MonthSelector';

const MonthSection = () => {
  const dispatch = useDispatch();
  const { text } = useSelector((state) => state.Month);

  const handleFirstSVGClick = () => {
    if (text === 'Current month') {
      dispatch(updateText('Previous month'));
    } else if (text === 'Next month') {
      dispatch(updateText('Current month'));
    }
  };

  const handleRightArrowClick = () => {
    if (text === 'Previous month') {
      dispatch(updateText('Current month'));
    } else if (text === 'Current month') {
      dispatch(updateText('Next month'));
    }
  };

  return (
    <section className='month-selector'>
      {text !== 'Previous month' && (
        <ArrowLeft
          style={{
            transform: 'scale(2)',
            fill: 'white',
            width: '24px',
            height: '24px',
          }}
          onClick={handleFirstSVGClick}
        />
      )}
      <h2>{text}</h2>
      {text !== 'Next month' && (
        <ArrowRight
          style={{
            transform: 'scale(2)',
            fill: 'white',
            width: '24px',
            height: '24px',
          }}
          onClick={handleRightArrowClick}
        />
      )}
    </section>
  );
};

export default MonthSection;
