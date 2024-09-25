// import { useEffect, useState } from "react";
// import { useTasks } from "../context/TasksContext";
// import TaskCard from "../components/TaskCard";
// // import TaskTable from "../components/TaskTable";
// // import PolarChart from "../components/PolarChart"; // Importa el componente PolarChart
// import { projectList } from "../projects"; // Importa la lista de proyectos
// import { useAuth } from "../context/AuthContext";
// import { Link } from "react-router-dom";

// function TasksPage() {
//   const { getTasks, tasks } = useTasks();
//   const { user, isAuthenticated } = useAuth();
//   const [loading, setLoading] = useState(true); // Estado de loading
//   const [selectedProject, setSelectedProject] = useState(''); // Estado para el proyecto seleccionado

//   useEffect(() => {
//     async function fetchTasks() {
//       await getTasks();
//       setLoading(false); // Detener el loading cuando las tareas están listas
//     }
//     fetchTasks(); // Obtener las tareas
//   }, [getTasks]); // Dependencia para asegurar que getTasks no cambie

//   // Filtrar las tareas por el proyecto seleccionado
//   const filteredTasks = selectedProject
//     ? tasks.filter(task => task.projectId === selectedProject)
//     : tasks;

//   // Filtrar las tareas para mostrar solo las del usuario si no es admin
//   const displayedTasks = user?.email === 'admin@gmail.com'
//     ? filteredTasks
//     : filteredTasks.filter(task => task.user?.email === user.email); // Verifica que user y email existen

//   if (loading) return <h1 className="flex items-center justify-center h-screen text-xl">Loading tasks...</h1>; // Mostrar loading mientras se obtienen las tareas

//   if (displayedTasks.length === 0) return (<h1 className="flex items-center justify-center h-screen">No Tasks</h1>);

//   return (
//     <div className="mx-3 lg:mx-28 pt-20">
//       <div>
//       <Link
//           to="/add-task"
//           className="bg-green-950 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
//         >
//           Add Task
//         </Link>
//         {/* Menú desplegable para seleccionar el proyecto */}
//         <select
//           value={selectedProject}
//           onChange={(e) => setSelectedProject(e.target.value)}
//           className="bg-black text-white px-2 py-2 rounded-md"
//         >
//           <option value="">All Projects</option>
//           {projectList.map((projectId, index) => (
//             <option key={index} value={projectId}>
//               {projectId}
//             </option>
//           ))}
//         </select>
//       </div> <br />

//       {/* Mostrar las tareas filtradas */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
//         {displayedTasks.length === 0 ? (
//           <h1>No tasks for this project</h1>
//         ) : (
//           displayedTasks.map((task) => (
//             <TaskCard task={task} key={task._id} />
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default TasksPage;

import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { projectList } from "../projects"; // Importa la lista de proyectos
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const { user } = useAuth(); // Obtener user de useAuth
  const [loading, setLoading] = useState(true); // Estado de loading
  const [selectedProject, setSelectedProject] = useState(''); // Estado para el proyecto seleccionado

  // Obtener tareas al cargar la página
  useEffect(() => {
    async function fetchTasks() {
      await getTasks();
      setLoading(false); // Detener el loading cuando las tareas están listas
    }
    fetchTasks(); // Obtener las tareas
  }, [getTasks]);

  // Filtrar las tareas por el proyecto seleccionado
  const filteredTasks = selectedProject
    ? tasks.filter(task => task.projectId === selectedProject)
    : tasks;

  // Filtrar las tareas para mostrar solo las del usuario si no es admin
  const displayedTasks = user?.email === 'admin@gmail.com'
    ? filteredTasks
    : filteredTasks.filter(task => task.user?.email === user.email);

  if (loading) return <h1 className="flex items-center justify-center h-screen text-xl">Loading tasks...</h1>; // Mostrar loading mientras se obtienen las tareas

  if (displayedTasks.length === 0) return (

    <div className="flex flex-col items-center justify-center h-screen">
  <Link
    to="/add-task"
    className="text-green-600 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800 mb-4"
  >
    Add Task
  </Link>
  <h1>No Tasks</h1>
</div>

  );

  return (
    <div className="mx-3 lg:mx-28 pt-20">
      <div>
        {/* Enlace para añadir tarea */}
        <Link
          to="/add-task"
          className="text-green-600 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
        >
          Add Task
        </Link>

        {/* Menú desplegable para seleccionar el proyecto */}
        <select
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          className="bg-black text-white px-2 py-2 rounded-md ml-4"
        >
          <option value="">All Projects</option>
          {projectList.map((projectId, index) => (
            <option key={index} value={projectId}>
              {projectId}
            </option>
          ))}
        </select>
      </div>
      <br />

      {/* Mostrar las tareas filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {displayedTasks.length === 0 ? (
          <h1>No tasks for this project</h1>
        ) : (
          displayedTasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))
        )}
      </div>
    </div>
  );
}

export default TasksPage;
