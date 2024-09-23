import { PolarArea } from 'react-chartjs-2';
import { useTasks } from '../context/TasksContext';
import { projectList } from '../projects'; // Lista de proyectos
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

function PolarChart() {
  const { tasks } = useTasks();
  
  // Calculamos el avance por proyecto
  const progressData = projectList.map((projectId) => {
    const projectTasks = tasks.filter(task => task.projectId === projectId); // Tareas del proyecto
    const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'
    
    // Calculamos el porcentaje de avance
    const progress = (acceptedTasks.length / 10) * 100; // Cada proyecto tiene 10 entregas
    return progress > 100 ? 100 : progress; // Asegurarse de que no pase del 100%
  });

  // Datos para el gráfico
  const data = {
    labels: projectList,
    datasets: [
      {
        label: 'Project Progress (%)',
        data: progressData, // Avance por proyecto
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico
  const options = {
    scale: {
      ticks: {
        beginAtZero: true,
        max: 100, // El máximo progreso es 100%
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-center text-xl font-bold mb-4">Project Progress</h2>
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default PolarChart;
