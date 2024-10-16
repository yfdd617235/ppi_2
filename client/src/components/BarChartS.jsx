import React from 'react';
import { Bar } from 'react-chartjs-2';

function BarChartS({ data, averageProgress }) {
  if (!data || data.labels.length === 0) {
    return <div>No data available</div>; // Manejo de error cuando no hay datos
  }

  // Cambiar el nombre del objeto data para evitar conflicto
  const chartData = {
    labels: data.labels,  // Usa las etiquetas del prop data
    datasets: [
      {
        label: 'Progress',
        data: data.datasets[0].data,  // Usa los datos del prop data
        borderColor: 'rgba(0, 255, 0, 1)',  // Verde neón brillante
        backgroundColor: 'rgba(0, 255, 0, 0.2)',  // Verde neón con transparencia
        borderWidth: 0.5,
      },
    ],
  };

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
          color: "#4f4f4f",
        },
      },
    },
  };

  return (
    <div className='flex flex-col justify-center items-center h-80'>
      <h1 className='font-bold'>Average Progress: {averageProgress}%</h1> {/* Mostrar el progreso promedio */}
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default BarChartS;
