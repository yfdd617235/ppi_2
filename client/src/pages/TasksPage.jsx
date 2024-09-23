import { useEffect, useState } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";
import { projectList } from "../projects"; // Importa la lista de proyectos
import { useAuth } from "../context/AuthContext";

function TasksPage() {
  const { getTasks, tasks } = useTasks();
  const { user, isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(true); // Estado de loading
  const [selectedProject, setSelectedProject] = useState(''); // Estado para el proyecto seleccionado

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
    : filteredTasks.filter(task => task.user.email === user.email);

  if (loading) return <h1>Loading tasks...</h1>; // Mostrar loading mientras se obtienen las tareas

  if (displayedTasks.length === 0) return (<h1>No Tasks</h1>);

  return (

    <div className=" mx-6 lg:mx-28">
      {/* Menú desplegable para seleccionar el proyecto */}
      <select
        value={selectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="bg-black text-white px-2 py-2 rounded-md"
      >
        <option value="">All Projects</option>
        {projectList.map((projectId, index) => (
          <option key={index} value={projectId}>
            {projectId}
          </option>
        ))}
      </select>

      {/* Mostrar las tareas filtradas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center my-5">
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
