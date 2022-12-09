import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar as ReactBarChart } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
);

export const options = {
  barPercentage: 0.3,
  responsive: true,
  plugins: {
    title: {
      display: true,
      color:'#8b93a2',
      align:'start',
      position:'top',
      padding: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 30
      },
      text: 'Chart title',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      backgroundColor: 'rgba(12,110,252,255)',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 60 })),
      backgroundColor: 'rgba(220,53,69,255)',
    },
  ],
};

function BarChart() {
  return (
    <ReactBarChart 
      style={{backgroundColor:'#313348',padding:'0 14px'}} 
      options={{...options,}} 
      data={data} />
  )
}

export default BarChart