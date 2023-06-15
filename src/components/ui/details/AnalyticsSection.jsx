import React from 'react';
import LargeAnalytics from '../../cards/LargeAnalytics';

const AnalyticsSection = ({ type }) => {
  const currentMonthIncomeExp = 1320;
  const lastMonthIncomeExp = 900;
  const NextMonthIncomeExp = 1500;
  const currentMonthIncomeValue = 1020.2;
  const lastMonthIncomeValue = 900;
  const NextMonthIncomeValue = 0;
  // Stationary time
  const currentMonthSTExp = 20;
  const lastMonthSTExp = 10;
  const NextMonthSTExp = 50;
  const currentMonthSTValue = 30;
  const lastMonthSTValue = 5;
  const NextMonthSTValue = 0;
  // Conversion Ratio
  const currentMonthCRExp = 35;
  const lastMonthCRExp = 42;
  const NextMonthCRExp = 52;
  const currentMonthCRValue = 40;
  const lastMonthCRValue = 50;
  const NextMonthCRValue = 0;
  // Reservations
  const currentMonthResExp = 45;
  const lastMonthResExp = 40;
  const NextMonthResExp = 52;
  const currentMonthResValue = 20;
  const lastMonthResValue = 30;
  const NextMonthResValue = 0;
  return (
    <>
      {type === 'income' ? (
        <section>
          <LargeAnalytics
            expectedValue={currentMonthIncomeExp}
            value={currentMonthIncomeValue}
            name={'Income'}
            tip={'You are up 20% MoM, Great work!'}
          />
          <LargeAnalytics
            expectedValue={20}
            value={30}
            name={'Stationary Time'}
            type='negative'
            tip={'Tips to decrese the value'}
          />
          <LargeAnalytics
            expectedValue={currentMonthCRExp}
            value={currentMonthCRValue}
            name={'Conversion Rate'}
            tip={'You are doing better than expected'}
          />
        </section>
      ) : type === 'reservations' ? (
        <LargeAnalytics
          expectedValue={currentMonthResExp}
          value={currentMonthResValue}
          name={'Reservations'}
          tip={'You are up 20% MoM, Great work!'}
        />
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};

export default AnalyticsSection;
