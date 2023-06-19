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
  const { text, showFirstSVG, showSecondSVG } = useSelector(
    (state) => state.Month
  );
  console.log(text);
  const handleFirstSVGClick = () => {
    if (text === 'This month') {
      dispatch(updateText('Previous month'));
      dispatch(toggleFirstSVG());
    } else if (text === 'Next month') {
      dispatch(updateText('Current month'));
    }
  };

  const handleRightArrowClick = () => {
    if (text === 'Previous month') {
      dispatch(updateText('Current month'));
      dispatch(toggleFirstSVG());
    } else if (text === 'Current month') {
      dispatch(updateText('Next month'));
      dispatch(toggleSecondSVG());
    }
  };

  const handleSecondSVGClick = () => {
    if (text === 'Next month') {
      dispatch(updateText('Current month'));
      dispatch(toggleSecondSVG());
    }
  };

  return (
    <section className='month-selector'>
      {showFirstSVG && (
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
      {showSecondSVG && (
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
