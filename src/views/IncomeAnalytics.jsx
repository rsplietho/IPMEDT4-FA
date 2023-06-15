import AnalyticsSection from '../components/ui/details/AnalyticsSection';
import GraphsSection from '../components/ui/details/GraphsSection';
import MonthSection from '../components/ui/details/MonthSection';

const IncomeAnalytics = () => {
  return (
    <section className='container'>
      <MonthSection />
      <AnalyticsSection type={'income'} />
      <GraphsSection type={'income'} />
    </section>
  );
};

export default IncomeAnalytics;
