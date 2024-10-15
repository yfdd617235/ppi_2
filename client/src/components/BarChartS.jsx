import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChartS({ data, averageProgress }) {
  if (!data || data.labels.length === 0) {
    return <div>No data available</div>; // Manejo de error cuando no hay datos
  }

  const options = {
    responsive: true,
        animation: {
            duration: 1500,
            easing: 'linear',
        },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
      },
      },
    },
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className='font-bold'>Average Progress: {averageProgress}%</h1> {/* Mostrar el progreso promedio */}
      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChartS;
