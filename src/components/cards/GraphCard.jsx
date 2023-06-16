import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import '../../styles/components/cards/GraphCard.css';
import TipCard from './TipCard';
import { useEffect, useState } from 'react';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GraphCard = ({ dataArr1, dataArr2, title, text }) => {
  const [labels, setLabels] = useState(getLabels(window.innerWidth));

  function getLabels(width) {
    if (width < 768) {
      return ['January', 'February', 'March', 'April'];
    } else if (width >= 768 && width < 1024) {
      return ['January', 'February', 'March', 'April', 'May'];
    } else {
      return ['January', 'February', 'March', 'April', 'May', 'June'];
    }
  }

  useEffect(() => {
    const resizeListener = () => {
      setLabels(getLabels(window.innerWidth));
    };
    window.addEventListener('resize', resizeListener);

    // clean up function
    return () => {
      window.removeEventListener('resize', resizeListener);
    };
  }, []);
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Expected',
        data: dataArr1,
        borderColor: '#2B97C5',
        fill: false,
      },
      {
        label: 'True',
        data: dataArr2,
        borderColor: '#FF8331',
        fill: false,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
    maintainAspectRatio: true,
    plugins: {
      title: {
        display: true,
        text: title,
      },
      legend: {
        labels: {
          font: {
            color: 'black',
          },
        },
        position: 'bottom',
      },
    },
  };

  return (
    <div className='graph-card'>
      <Line data={data} options={options} height={250} />
      <TipCard text={text} />
    </div>
  );
};

export default GraphCard;
