import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import { useAuth } from "../context/AuthContext";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

dayjs.extend(utc);
dayjs.extend(timezone);

function TaskTable() {
    const { tasks, deleteTask } = useTasks();
    const { user } = useAuth();

    // Filtrar tareas basadas en el email del usuario
    const filteredTasks = user?.email === 'admin@gmail.com'
        ? tasks
        : tasks.filter(task => task.user.email === user.email);

    const handleDelete = (taskId) => {
        const confirmed = window.confirm("Are you sure you want to delete this item?");
        if (confirmed) {
            deleteTask(taskId);
        }
    };

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-white px-2 py-2 text-sm sm:text-xs">#</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Username</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Email</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Project ID</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Title</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Description</th>
                        {/* <th className="text-white px-2 py-1 text-sm sm:text-xs">Updated</th> */}
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Status</th>
                        {/* <th className="text-white px-2 py-1 text-sm sm:text-xs">Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {filteredTasks.map((task, index) => (
                        <tr key={task._id} className="border-b border-zinc-600">
                            <td className="text-zinc-400 px-2 py-2 text-sm sm:text-xs">{index + 1}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.username}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.email}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.projectId}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.title}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.description}</td>
                            {/* <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">
                                {dayjs(task.updatedAt).tz("America/Bogota").format("DD/MMM/YYYY hh:mm:ss A")}
                            </td> */}
                            <td className={`px-2 py-1 text-sm sm:text-xs ${task.status === "Sent" ? "text-zinc-400" : ""} 
                                ${task.status === "Rejected" ? "text-red-700" : ""} 
                                ${task.status === "Accepted" ? "text-green-600" : ""}`}>
                                {task.status}
                            </td>
                            {/* <td className="text-zinc-400 px-2 py-1 flex gap-x-2 text-sm sm:text-xs">
                                <Link className="text-zinc-400" to={`/tasks/${task._id}`}>
                                    <PencilIcon className="h-4 w-4" />
                                </Link>
                                <button className="text-zinc-400" onClick={() => handleDelete(task._id)}>
                                    <TrashIcon className="h-4 w-4" />
                                </button>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TaskTable;
