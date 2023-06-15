import BarChart from '../../cards/BarChart';
import GraphCard from '../../cards/GraphCard';

const GraphsSection = ({ type }) => {
  if (type === 'income') {
    return (
      <section style={{ marginBottom: '2rem' }}>
        <GraphCard
          title={'Income'}
          dataArr1={[1000, 1210, 1000, 625, 900, 1200]}
          dataArr2={[450, 735, 425, 1500, 1100, 1100]}
          text={'Click here for tips and tricks'}
        />
        <BarChart
          title={'Conversion Ratio'}
          dataArr={[40, 20, 45, 22, 54, 60]}
          text={'Click here for tips and tricks'}
        />
      </section>
    );
  }
  if (type === 'reservations') {
    return (
      <section style={{ marginBottom: '2rem' }}>
        <GraphCard
          title={'Reservations'}
          dataArr1={[20, 50, 20, 80, 40, 20]}
          text={'Click here for tips and tricks'}
        />
      </section>
    );
  }
};

export default GraphsSection;
