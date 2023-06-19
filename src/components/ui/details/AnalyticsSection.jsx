import React from 'react';
import { useSelector } from 'react-redux';
import LargeAnalytics from '../../cards/LargeAnalytics';

const AnalyticsSection = ({ type }) => {
  const currentMonth = useSelector((state) => state.Month);
  const { text } = currentMonth;
  console.log({ text });

  const nextMonthValues = {
    incomeExp: 1500,
    incomeValue: 0,
    stExp: 50,
    stValue: 0,
    crExp: 52,
    crValue: 0,
    resExp: 52,
    resValue: 0,
  };

  const previousMonthValues = {
    incomeExp: 900,
    incomeValue: 900,
    stExp: 10,
    stValue: 5,
    crExp: 42,
    crValue: 50,
    resExp: 40,
    resValue: 30,
  };
  const currentMonthValues = {
    incomeExp: 800,
    incomeValue: 600,
    stExp: 20,
    stValue: 5,
    crExp: 30,
    crValue: 42,
    resExp: 25,
    resValue: 30,
  };

  const getValuesByMonth = () => {
    if (text === 'Next month') {
      return nextMonthValues;
    } else if (text === 'Previous month') {
      return previousMonthValues;
    } else {
      return currentMonthValues;
    }
  };

  const valuesByMonth = getValuesByMonth();

  const getIncomeValues = (
    previousMonthValues,
    nextMonthValues,
    currentMonthValues
  ) => {
    if (text === 'Previous month') {
      return {
        expectedValue: previousMonthValues.incomeExp,
        value: previousMonthValues.incomeValue,
      };
    }
    if (text === 'Next month') {
      return {
        expectedValue: nextMonthValues.incomeExp,
        value: nextMonthValues.incomeValue,
      };
    } else {
      return {
        expectedValue: currentMonthValues?.incomeExp,
        value: currentMonthValues?.incomeValue,
      };
    }
  };
  const getStationaryTimeValues = (
    previousMonthValues,
    nextMonthValues,
    currentMonthValues
  ) => {
    if (text === 'Previous month') {
      return {
        expectedValue: previousMonthValues.stValue,
        value: previousMonthValues.stExp,
      };
    }
    if (text === 'Next month') {
      return {
        expectedValue: nextMonthValues.stValue,
        value: nextMonthValues.stExp,
      };
    } else {
      return {
        expectedValue: currentMonthValues?.stValue,
        value: currentMonthValues?.stExp,
      };
    }
  };

  const getConversionRatioValues = (
    previousMonthValues,
    nextMonthValues,
    currentMonthValues
  ) => {
    if (text === 'Previous month') {
      return {
        expectedValue: previousMonthValues.crExp,
        value: previousMonthValues.crValue,
      };
    }
    if (text === 'Next month') {
      return {
        expectedValue: nextMonthValues.crExp,
        value: nextMonthValues.crValue,
      };
    } else {
      return {
        expectedValue: currentMonthValues?.crExp,
        value: currentMonthValues?.crValue,
      };
    }
  };

  const getReservationsValues = (
    previousMonthValues,
    nextMonthValues,
    currentMonthValues
  ) => {
    if (text === 'Previous month') {
      console.log('prev month');
      return {
        expectedValue: previousMonthValues.resExp,
        value: previousMonthValues.resValue,
      };
    }
    if (text === 'Next month') {
      console.log('Next month');
      return {
        expectedValue: nextMonthValues.resExp,
        value: nextMonthValues.resValue,
      };
    } else {
      console.log('Current month');
      return {
        expectedValue: currentMonthValues.resExp,
        value: currentMonthValues.resValue,
      };
    }
  };

  return (
    <>
      {valuesByMonth ? (
        <section>
          {type === 'income' && (
            <>
              <LargeAnalytics
                {...getIncomeValues(
                  previousMonthValues,
                  nextMonthValues,
                  currentMonthValues
                )}
                name={'Income'}
                tip={'You are up 20% MoM, Great work!'}
              />
              <LargeAnalytics
                {...getStationaryTimeValues(
                  previousMonthValues,
                  nextMonthValues,
                  currentMonthValues
                )}
                name={'Stationary Time'}
                type='negative'
                tip={'Tips to decrease the value'}
              />
              <LargeAnalytics
                {...getConversionRatioValues(
                  previousMonthValues,
                  nextMonthValues,
                  currentMonthValues
                )}
                name={'Conversion Rate'}
                tip={'You are doing better than expected'}
              />
            </>
          )}
          {type === 'reservations' && (
            <LargeAnalytics
              {...getReservationsValues(
                previousMonthValues,
                nextMonthValues,
                currentMonthValues
              )}
              name={'Reservations'}
              tip={'You are up 20% MoM, Great work!'}
            />
          )}
        </section>
      ) : (
        <h1>No data</h1>
      )}
    </>
  );
};

export default AnalyticsSection;
