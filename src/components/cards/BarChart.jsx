import React, { useEffect, useState } from 'react';
import TipCard from './TipCard';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarChart = ({ dataArr, title, text }) => {
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
        label: 'Conversion rate',
        data: dataArr,
        backgroundColor: '#5AAACC',
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
      <Bar data={data} options={options} height={250} />
      <TipCard text={text} />
    </div>
  );
};

export default BarChart;
