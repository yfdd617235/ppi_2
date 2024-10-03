// import { useState, useEffect } from 'react';
// import { Bar } from 'react-chartjs-2';
// import { useTasks } from '../context/TasksContext';
// import { useAuth } from '../context/AuthContext';
// import { projectList } from '../projects'; // Lista de proyectos
// import Select from 'react-select';
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';

// // Registrar los componentes necesarios de Chart.js
// ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// function BarChart() {
//   const { tasks } = useTasks();
//   const { user } = useAuth();
//   const [selectedProjects, setSelectedProjects] = useState([]);
//   const [selectedUsernames, setSelectedUsernames] = useState([]);
//   const [usernamesOptions, setUsernamesOptions] = useState([]);

//   useEffect(() => {
//     if (user?.email === 'panamerican.pi@gmail.com') {
//       // Filtrar los nombres de usuario únicos para el filtro de username
//       const usernames = [...new Set(tasks.map(task => task.username))];
//       setUsernamesOptions(usernames);
//     }
//   }, [tasks, user]);

//   // Filtrar tareas basadas en el email del usuario
//   const filteredTasks = user?.email === 'panamerican.pi@gmail.com'
//     ? tasks.filter(task => selectedUsernames.length === 0 || selectedUsernames.includes(task.username))
//     : tasks.filter(task => task.user.email === user.email);

//   // Calcula el progreso por proyecto
//   const calculateProgress = (projects) => {
//     return projects.map((projectId) => {
//       const projectTasks = filteredTasks.filter(task => task.projectId === projectId); // Tareas del proyecto
//       const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'

//       // Verificar si el usuario no es 'panamerican.pi@gmail.com' o si se seleccionó algún usuario específico
//       const totalAcceptedTasks = (user?.email !== 'panamerican.pi@gmail.com' || selectedUsernames.length > 0)
//         ? 6  // Total para otros usuarios o si se selecciona un usuario específico
//         : 107; // Total para 'panamerican.pi@gmail.com'

//       // Calcula el porcentaje de avance
//       const progress = (acceptedTasks.length / totalAcceptedTasks) * 100;
//       return progress > 100 ? 100 : progress; // Asegúrate de que no pase del 100%
//     });
//   };

//   // Filtrar los proyectos seleccionados
//   const progressData = calculateProgress(selectedProjects);

//   // Datos para el gráfico
//   const data = {
//     labels: selectedProjects,
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

//   // Opciones para react-select de proyectos
//   const projectOptions = projectList.map(projectId => ({
//     value: projectId,
//     label: projectId,
//   }));

//   // Opciones para react-select de usernames (solo si el usuario es admin)
//   const usernameOptions = usernamesOptions.map(username => ({
//     value: username,
//     label: username,
//   }));

//   // Estilos para el componente Select
//   const customStyles = {
//     control: (provided) => ({
//       ...provided,
//       backgroundColor: 'black',
//       border: '1px solid gray',
//     }),
//     menu: (provided) => ({
//       ...provided,
//       backgroundColor: 'black',
//     }),
//     option: (provided, state) => ({
//       ...provided,
//       backgroundColor: state.isSelected ? 'gray' : state.isFocused ? 'darkgray' : 'black',
//       color: 'white',
//     }),
//     singleValue: (provided) => ({
//       ...provided,
//       color: 'white',
//     }),
//     placeholder: (provided) => ({
//       ...provided,
//       color: 'white',
//     }),
//     indicatorSeparator: (provided) => ({
//       ...provided,
//       backgroundColor: 'white',
//     }),
//     dropdownIndicator: (provided) => ({
//       ...provided,
//       color: 'white',
//     }),
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-center font-bold mb-4">Projects Progress</h2>
      
//       {/* Filtro de proyectos */}
//       <Select
//         isMulti
//         options={projectOptions}
//         value={selectedProjects.map(project => ({ value: project, label: project }))}
//         onChange={(selected) => setSelectedProjects(selected.map(option => option.value))}
//         className="mb-4 text-xs text-black"
//         classNamePrefix="custom-select"
//         placeholder="Select Projects..."
//         styles={customStyles}
//       />

//       {/* Filtro de usernames (solo si el usuario es admin) */}
//       {user?.email === 'panamerican.pi@gmail.com' && (
//         <Select
//           isMulti
//           options={usernameOptions}
//           value={selectedUsernames.map(username => ({ value: username, label: username }))}
//           onChange={(selected) => setSelectedUsernames(selected.map(option => option.value))}
//           className="mb-4 text-xs text-black"
//           classNamePrefix="custom-select"
//           placeholder="Select Usernames..."
//           styles={customStyles}
//         />
//       )}

//       <Bar data={data} options={options} />
    
//     </div>
//   );
// }

// export default BarChart;


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
  const [usernamesOptions, setUsernamesOptions] = useState([]);

  useEffect(() => {
    if (user?.email === 'panamerican.pi@gmail.com') {
      // Filtrar los nombres de usuario únicos para el filtro de username
      const usernames = [...new Set(tasks.map(task => task.username))];
      setUsernamesOptions(usernames);
    }
  }, [tasks, user]);

  // Filtrar tareas basadas en el email del usuario
  const filteredTasks = user?.email === 'panamerican.pi@gmail.com'
    ? tasks.filter(task => selectedUsernames.length === 0 || selectedUsernames.includes(task.username))
    : tasks.filter(task => task.user.email === user.email);

  // Calcula el progreso por proyecto
  const calculateProgress = (projects) => {
    return projects.map((projectId) => {
      const projectTasks = filteredTasks.filter(task => task.projectId === projectId); // Tareas del proyecto
      const acceptedTasks = projectTasks.filter(task => task.status === 'Accepted'); // Tareas con estado 'Accepted'

      // Verificar si el usuario no es 'panamerican.pi@gmail.com' o si se seleccionó algún usuario específico
      const totalAcceptedTasks = (user?.email !== 'panamerican.pi@gmail.com' || selectedUsernames.length > 0)
        ? 5  // Total para otros usuarios o si se selecciona un usuario específico
        : 89; // Total para 'panamerican.pi@gmail.com'

      // Calcula el porcentaje de avance
      const progress = (acceptedTasks.length / totalAcceptedTasks) * 100;
      return progress > 100 ? 100 : progress; // Asegúrate de que no pase del 100%
    });
  };

  // Filtrar los proyectos seleccionados
  const progressData = calculateProgress(selectedProjects);

  // Calcula el progreso total promedio
  const averageProgress = progressData.length > 0 
    ? (progressData.reduce((total, progress) => total + progress, 0) / progressData.length).toFixed(2)
    : 0;

  // Datos para el gráfico
  const data = {
    labels: selectedProjects,
    datasets: [
      {
        label: 'Project Progress (%)',
        data: progressData, // Avance por proyecto
        backgroundColor: 'rgba(34, 197, 94, 0.3)', // Verde transparente (opacidad 0.3)
        borderColor: 'rgba(34, 197, 94, 1)', // Verde sólido para el borde
        borderWidth: 2,
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
        color: '#ffffff', // Color blanco para el título del eje X
      },
      ticks: {
        color: '#ffffff', // Color blanco para las etiquetas del eje X
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 100, // El máximo progreso es 100%
      title: {
        display: true,
        text: 'Progress (%)',
        color: '#ffffff', // Color blanco para el título del eje Y
      },
      ticks: {
        stepSize: 10, // Ajustar el tamaño del paso de las marcas
        color: '#ffffff', // Color blanco para las etiquetas del eje Y
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#ffffff', // Color blanco para el texto de la leyenda
      },
    },
    tooltip: {
      backgroundColor: '#333333', // Fondo oscuro del tooltip
      titleColor: '#ffffff', // Color blanco para el título del tooltip
      bodyColor: '#ffffff', // Color blanco para el cuerpo del tooltip (texto principal)
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
      <h2 className="text-center font-bold mb-4">Total Average Progress: {averageProgress}%</h2>
      
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
      {user?.email === 'panamerican.pi@gmail.com' && (
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

      <Bar data={data} options={options}/>
    </div>
  );
}

export default BarChart;
