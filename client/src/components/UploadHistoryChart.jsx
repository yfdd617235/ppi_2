// import React, { useEffect, useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import dayjs from 'dayjs';
// import isoWeek from 'dayjs/plugin/isoWeek'; // Para manejar semanas ISO
// import timezone from 'dayjs/plugin/timezone';
// import utc from 'dayjs/plugin/utc';
// import 'chart.js/auto';

// dayjs.extend(utc);
// dayjs.extend(timezone);
// dayjs.extend(isoWeek);

// Chart.register(...registerables);

// const UploadHistoryChart = ({ tasks }) => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     if (tasks.length > 0) {
//       generateChartData();
//       console.log("tasks for history",tasks)
//     }
//   }, []);

//   const generateChartData = () => {
//     // Agrupar por semanas
//     const taskCountByWeek = {};

//     tasks.forEach(task => {
//       const createdWeek = dayjs(task.createdAt).tz("America/Bogota").isoWeek();
//       const updatedWeek = dayjs(task.updatedAt).tz("America/Bogota").isoWeek();
      
//       const createdYear = dayjs(task.createdAt).tz("America/Bogota").year();
//       const updatedYear = dayjs(task.updatedAt).tz("America/Bogota").year();
      
//       // Inicializar contadores por semana
//       const createdKey = `${createdYear}-W${createdWeek}`;
//       const updatedKey = `${updatedYear}-W${updatedWeek}`;

//       if (!taskCountByWeek[createdKey]) taskCountByWeek[createdKey] = { created: 0, updated: 0 };
//       if (!taskCountByWeek[updatedKey]) taskCountByWeek[updatedKey] = { created: 0, updated: 0 };

//       taskCountByWeek[createdKey].created += 1;
//       taskCountByWeek[updatedKey].updated += 1;
//     });

//     // Extraer etiquetas (semanas) y datos
//     const weeks = Object.keys(taskCountByWeek).sort();
//     const createdData = weeks.map(week => taskCountByWeek[week].created);
//     const updatedData = weeks.map(week => taskCountByWeek[week].updated);

//     const data = {
//       labels: weeks,
//       datasets: [
//         {
//           label: 'Created Tasks',
//           data: createdData,
//           borderColor: 'rgba(0, 255, 0, 1)',  // Verde neón brillante
//           backgroundColor: 'rgba(0, 255, 0, 0.2)',  // Verde neón con transparencia
//           fill: true,
//           tension: 0.4,
//           borderWidth: 1,
//         },
//         {
//           label: 'Updated Tasks',
//           data: updatedData,
//           borderColor: 'rgba(85, 107, 47, 1)',  // Azul brillante
//           backgroundColor: 'rgba(85, 107, 47, 0.2)',  // Azul brillante con transparencia
//           fill: true,
//           tension: 0.4,
//           borderWidth: 1,
//         },
//       ],
      
//     };

//     setChartData(data);
//   };

//   const chartOptions = {
//     responsive: true,
//     animation: {
//       duration: 1500,
//       easing: 'linear',
//   },
//     maintainAspectRatio: false,
//     scales: {
//       x: {
//         title: {
//           display: true,
//           text: 'Week of the Year',
//         },
//         grid: {
//           color: "#4f4f4f",
//         },
//       },
//       y: {
//         title: {
//           display: true,
//           text: 'Number of Tasks',
//         },
//         beginAtZero: true,
//         grid: {
//           color: "#4f4f4f",
//       },
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col justify-center items-center w-full h-72">
// <h1 className='font-bold'> Uploads History </h1>
//       {chartData && chartData.labels && chartData.labels.length > 0 ? (
        
//         <Line data={chartData} options={chartOptions}/>
//       ) : (
//         <p>No task data available for the selected range.</p>
//       )}
//     </div>
//   );
// };

// export default UploadHistoryChart;

import React from 'react';
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

function UploadHistoryChart({ tasks }) {
  // Generar los datos del gráfico basado en las tasks
  const generateChartData = () => {
    const taskCountByWeek = {};

    tasks.forEach(task => {
      const createdWeek = dayjs(task.createdAt).tz("America/Bogota").isoWeek();
      const updatedWeek = dayjs(task.updatedAt).tz("America/Bogota").isoWeek();

      const createdYear = dayjs(task.createdAt).tz("America/Bogota").year();
      const updatedYear = dayjs(task.updatedAt).tz("America/Bogota").year();

      const createdKey = `${createdYear}-W${createdWeek}`;
      const updatedKey = `${updatedYear}-W${updatedWeek}`;

      if (!taskCountByWeek[createdKey]) taskCountByWeek[createdKey] = { created: 0, updated: 0 };
      if (!taskCountByWeek[updatedKey]) taskCountByWeek[updatedKey] = { created: 0, updated: 0 };

      taskCountByWeek[createdKey].created += 1;
      taskCountByWeek[updatedKey].updated += 1;
    });

    const weeks = Object.keys(taskCountByWeek).sort();
    const createdData = weeks.map(week => taskCountByWeek[week].created);
    const updatedData = weeks.map(week => taskCountByWeek[week].updated);

    return {
      labels: weeks,
      datasets: [
        {
          label: 'Created Tasks',
          data: createdData,
          borderColor: 'rgba(0, 255, 0, 1)',  // Verde neón brillante
          backgroundColor: 'rgba(0, 255, 0, 0.2)',  // Verde neón con transparencia
          fill: true,
          tension: 0.4,
          borderWidth: 1,
        },
        {
          label: 'Updated Tasks',
          data: updatedData,
          borderColor: 'rgba(85, 107, 47, 1)',  // Azul brillante
          backgroundColor: 'rgba(85, 107, 47, 0.2)',  // Azul brillante con transparencia
          fill: true,
          tension: 0.4,
          borderWidth: 1,
        },
      ],
    };
  };

  // Opciones del gráfico
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
        grid: {
          color: "#4f4f4f",
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Tasks',
        },
        beginAtZero: true,
        grid: {
          color: "#4f4f4f",
        },
      },
    },
  };

  const chartData = generateChartData();

  return (
    <div className="flex flex-col justify-center items-center w-full h-72">
      <h1 className='font-bold'>Uploads History</h1>
      {chartData && chartData.labels && chartData.labels.length > 0 ? (
        <Line data={chartData} options={chartOptions} />
      ) : (
        <p>No task data available for the selected data.</p>
      )}
    </div>
  );
}

export default UploadHistoryChart;
