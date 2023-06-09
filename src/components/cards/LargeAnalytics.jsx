import TipCard from './TipCard';
import '../../styles/components/cards/LargeAnalyticsCard.css';
const LargeAnalytics = ({ value, expectedValue, name, tip, type }) => {
  console.log({ expectedValue, value });
  return (
    <>
      <h2 className='analytics-title'>{name}</h2>
      <div className='large-analytics-card'>
        <section className='values'>
          <div>
            <h3>
              {name === 'Income' ? '€' : null}
              {value}
              {name === 'Conversion Rate'
                ? '%'
                : name === 'Stationary Time'
                ? 'h'
                : null}
            </h3>
            <p>So far</p>
          </div>
          <div>
            <h3>
              {name === 'Income' ? '€' : null}
              {expectedValue}
              {name === 'Conversion Rate'
                ? '%'
                : name === 'Stationary Time'
                ? 'h'
                : null}
            </h3>
            <p>Expected</p>
          </div>
        </section>
        <TipCard text={tip} type={type} />
      </div>
    </>
  );
};

export default LargeAnalytics;
