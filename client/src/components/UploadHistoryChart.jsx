import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek'; // Para manejar semanas ISO
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import 'chart.js/auto';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(isoWeek);

Chart.register(...registerables);

const UploadHistoryChart = ({ tasks }) => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    if (tasks.length > 0) {
      generateChartData();
    }
  }, [tasks]);

  const generateChartData = () => {
    // Agrupar por semanas
    const taskCountByWeek = {};

    tasks.forEach(task => {
      const createdWeek = dayjs(task.createdAt).tz("America/Bogota").isoWeek();
      const updatedWeek = dayjs(task.updatedAt).tz("America/Bogota").isoWeek();
      
      const createdYear = dayjs(task.createdAt).tz("America/Bogota").year();
      const updatedYear = dayjs(task.updatedAt).tz("America/Bogota").year();
      
      // Inicializar contadores por semana
      const createdKey = `${createdYear}-W${createdWeek}`;
      const updatedKey = `${updatedYear}-W${updatedWeek}`;

      if (!taskCountByWeek[createdKey]) taskCountByWeek[createdKey] = { created: 0, updated: 0 };
      if (!taskCountByWeek[updatedKey]) taskCountByWeek[updatedKey] = { created: 0, updated: 0 };

      taskCountByWeek[createdKey].created += 1;
      taskCountByWeek[updatedKey].updated += 1;
    });

    // Extraer etiquetas (semanas) y datos
    const weeks = Object.keys(taskCountByWeek).sort();
    const createdData = weeks.map(week => taskCountByWeek[week].created);
    const updatedData = weeks.map(week => taskCountByWeek[week].updated);

    const data = {
      labels: weeks,
      datasets: [
        {
          label: 'Created Tasks',
          data: createdData,
          borderColor: 'rgba(75, 192, 192, 1)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          fill: true,
          tension: 0.4,
        },
        {
          label: 'Updated Tasks',
          data: updatedData,
          borderColor: 'rgba(255, 159, 64, 1)',
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          fill: true,
          tension: 0.4,
        },
      ],
    };

    setChartData(data);
  };

  const chartOptions = {
    responsive: true,
    animation: {
      duration: 1500,
      easing: 'linear',
  },
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Week of the Year',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Tasks',
        },
        beginAtZero: true,
        grid: {
          color: "rgba(255, 255, 255, 0.2)",
      },
      },
    },
  };

  return (
    <div className="w-full">
      {chartData && chartData.labels && chartData.labels.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>No task data available for the selected range.</p>
      )}
    </div>
  );
};

export default UploadHistoryChart;
