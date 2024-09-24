// import { PolarArea } from 'react-chartjs-2';
// import { useTasks } from '../context/TasksContext';
// import { projectList } from '../projects'; // Lista de proyectos
// import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// function PolarChart() {
//   const { tasks } = useTasks();
  
//   // Calculamos el avance por proyecto
//   const progressData = projectList.map((projectId) => {
//     const projectTasks = tasks.filter(task => task.projectId === projectId); // Tareas del proyecto
//     const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'
    
//     // Calculamos el porcentaje de avance
//     const progress = (acceptedTasks.length / 10) * 100; // Cada proyecto tiene 10 tareas
//     return progress > 100 ? 100 : progress; // Asegurarse de que no pase del 100%
//   });

//   // Datos para el gráfico
//   const data = {
//     labels: projectList,
//     datasets: [
//       {
//         label: 'Project Progress (%)',
//         data: progressData, // Avance por proyecto
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Opciones para el gráfico, incluyendo las líneas de los porcentajes
//   const options = {
//     scales: {
//       r: {
//         beginAtZero: true,
//         suggestedMax: 100, // El máximo progreso es 100%
//         ticks: {
//           stepSize: 20, // Ajustar el tamaño del paso de las marcas
//         },
//         grid: {
//           color: 'rgba(128, 128, 128, 0.5)', // Color de las líneas de la cuadrícula
//           circular: true, // Asegura que las líneas sean circulares
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-xl font-bold mb-4">Projects Progress</h2>
//       <PolarArea data={data} options={options} />
//     </div>
//   );
// }

// export default PolarChart;


//---------------------------------------------------------------------------------------------------------------
// import { Bar } from 'react-chartjs-2';
// import { useTasks } from '../context/TasksContext';
// import { useAuth } from '../context/AuthContext';
// import { projectList } from '../projects'; // Lista de proyectos
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// // Registrar los componentes necesarios de Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// function BarChart() {
//   const { tasks } = useTasks();
//   const { user } = useAuth();

//   // Filtrar tareas basadas en el email del usuario
//   const filteredTasks = user?.email === 'admin@gmail.com'
//     ? tasks
//     : tasks.filter(task => task.user.email === user.email);

//   // Calculamos el avance por proyecto
//   const progressData = projectList.map((projectId) => {
//     const projectTasks = filteredTasks.filter(task => task.projectId === projectId); // Tareas del proyecto
//     const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'
    
//     // Calculamos el porcentaje de avance
//     const progress = (acceptedTasks.length / 10) * 100; // Cada proyecto tiene 10 tareas
//     return progress > 100 ? 100 : progress; // Asegurarse de que no pase del 100%
//   });

//   // Datos para el gráfico
//   const data = {
//     labels: projectList,
//     datasets: [
//       {
//         label: 'Project Progress (%)',
//         data: progressData, // Avance por proyecto
//         backgroundColor: 'rgba(34, 197, 94, 0.2)', // Verde transparente (opacidad 0.3)
//         borderColor: 'rgba(34, 197, 94, 1)', // Verde sólido para el borde
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Opciones para el gráfico
//   const options = {
//     scales: {
//       x: {
//         beginAtZero: true,
//         title: {
//           display: true,
//           text: 'Project',
//         },
//       },
//       y: {
//         beginAtZero: true,
//         suggestedMax: 100, // El máximo progreso es 100%
//         title: {
//           display: true,
//           text: 'Progress (%)',
//         },
//         ticks: {
//           stepSize: 20, // Ajustar el tamaño del paso de las marcas
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top',
//       },
//       tooltip: {
//         callbacks: {
//           label: function (tooltipItem) {
//             return `${tooltipItem.label}: ${tooltipItem.raw}%`;
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-center text-xl font-bold mb-4">Projects Progress</h2>
//       <Bar data={data} options={options} />
//     </div>
//   );
// }

// export default BarChart;


//------------------------------------------------------------------------------------------------------
import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { useTasks } from '../context/TasksContext';
import { useAuth } from '../context/AuthContext';
import { projectList } from '../projects'; // Lista de proyectos
import Select from 'react-select';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const { tasks } = useTasks();
  const { user } = useAuth();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedUsernames, setSelectedUsernames] = useState([]);

  useEffect(() => {
    if (user?.email === 'admin@gmail.com') {
      // Filtrar los nombres de usuario únicos para el filtro de username
      const usernames = [...new Set(tasks.map(task => task.username))];
      setUsernamesOptions(usernames);
    }
  }, [tasks, user]);

  // Filtrar tareas basadas en el email del usuario
  const filteredTasks = user?.email === 'admin@gmail.com'
    ? tasks.filter(task => selectedUsernames.length === 0 || selectedUsernames.includes(task.username))
    : tasks.filter(task => task.user.email === user.email);

  // Calcula el progreso por proyecto
  const calculateProgress = (projects) => {
    return projects.map((projectId) => {
      const projectTasks = filteredTasks.filter(task => task.projectId === projectId); // Tareas del proyecto
      const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'
      
      // Calcula el porcentaje de avance
      const progress = (acceptedTasks.length / 10) * 100; // Cada proyecto tiene 10 tareas
      return progress > 100 ? 100 : progress; // Asegúrate de que no pase del 100%
    });
  };

  // Filtrar los proyectos seleccionados
  const progressData = calculateProgress(selectedProjects);

  // Datos para el gráfico
  const data = {
    labels: selectedProjects,
    datasets: [
      {
        label: 'Project Progress (%)',
        data: progressData, // Avance por proyecto
        backgroundColor: 'rgba(34, 197, 94, 0.2)', // Verde transparente (opacidad 0.3)
        borderColor: 'rgba(34, 197, 94, 1)', // Verde sólido para el borde
        borderWidth: 1,
      },
    ],
  };

  // Opciones para el gráfico
  const options = {
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Project',
        },
      },
      y: {
        beginAtZero: true,
        suggestedMax: 100, // El máximo progreso es 100%
        title: {
          display: true,
          text: 'Progress (%)',
        },
        ticks: {
          stepSize: 20, // Ajustar el tamaño del paso de las marcas
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          },
        },
      },
    },
  };

  // Opciones para react-select de proyectos
  const projectOptions = projectList.map(projectId => ({
    value: projectId,
    label: projectId,
  }));

  // Opciones para react-select de usernames (solo si el usuario es admin)
  const [usernamesOptions, setUsernamesOptions] = useState([]);
  const usernameOptions = usernamesOptions.map(username => ({
    value: username,
    label: username,
  }));

  // Estilos para el componente Select
  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'black',
      border: '1px solid gray',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? 'gray' : state.isFocused ? 'darkgray' : 'black',
      color: 'white',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: 'white',
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: 'white',
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: 'white',
    }),
  };

  return (
    <div className="p-4">
      <h2 className="text-center font-bold mb-4">Projects Progress</h2>
      
      {/* Filtro de proyectos */}
      <Select
        isMulti
        options={projectOptions}
        value={selectedProjects.map(project => ({ value: project, label: project }))}
        onChange={(selected) => setSelectedProjects(selected.map(option => option.value))}
        className="mb-4 text-xs text-black"
        classNamePrefix="custom-select"
        placeholder="Select Projects..."
        styles={customStyles}
      />

      {/* Filtro de usernames (solo si el usuario es admin) */}
      {user?.email === 'admin@gmail.com' && (
        <Select
          isMulti
          options={usernameOptions}
          value={selectedUsernames.map(username => ({ value: username, label: username }))}
          onChange={(selected) => setSelectedUsernames(selected.map(option => option.value))}
          className="mb-4 text-xs text-black"
          classNamePrefix="custom-select"
          placeholder="Select Usernames..."
          styles={customStyles}
        />
      )}

      <Bar data={data} options={options} />
    </div>
  );
}

export default BarChart;
