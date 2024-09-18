import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';




dayjs.extend(utc);
dayjs.extend(timezone);

function TaskCard({ task }) {
    const { deleteTask } = useTasks();

    // Construir la URL del archivo
    const fileUrl = `http://localhost:3000/uploads/${task.file}`;

    // const fileUrl = `${process.env.REACT_APP_API_BASE_URL}/uploads/${task.file}`;

    return (
        <div className=" max-w-md w-full p-4 rounded-md flex flex-col justify-between border border-zinc-500">
            {/* <div className=" max-w-md w-full p-4 rounded-md flex flex-col justify-between border-2 border-zinc-800"> */}
            <header className="flex justify-between">
                <p className="text-zinc-600 break-words">#: {task.projectId}</p>
                <div className="flex gap-x-2 items-center">
                <Link className="text-zinc-400" to={`/tasks/${task._id}`}>
                        <PencilIcon className="h-3 w-5" />
                    </Link>
                    <button className="text-zinc-400" onClick={() => { deleteTask(task._id); }}>
                        <TrashIcon className="h-4 w-4" />
                    </button>
                </div>
            </header>
            <h1 className="text-lg font-bold break-words">{task.title}</h1>
            <p className="text-zinc-400 break-words whitespace-normal">{task.description}</p>
            <a href={fileUrl} className="text-sky-500" target="_blank" rel="noopener noreferrer">
                Open File
            </a>

            <div className="text-xs text-zinc-600">
                <p className="break-words whitespace-normal">Created: {dayjs(task.createdAt).tz("America/Bogota").format("DD/MMM/YYYY hh:mm:ss A")}</p>
                <p className="break-words whitespace-normal">Updated: {dayjs(task.updatedAt).tz("America/Bogota").format("DD/MMM/YYYY hh:mm:ss A")}</p>
            </div>
        </div>
    );
}

export default TaskCard;
