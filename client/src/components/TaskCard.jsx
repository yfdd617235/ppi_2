import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

function TaskCard({ task }) {

    const { deleteTask } = useTasks();
    // console.log(task)
    return (
        <div className="bg-zinc-800 max-w-md w-full p-4 rounded-md flex flex-col justify-between">
            <header className="flex justify-between">
                <h1 className="text-xl font-bold break-words">{task.title}</h1>
                <div className="flex gap-x-2 items-center">

                    <button className="text-red-500"
                        onClick={() => { deleteTask(task._id); }}>Delete</button>

                    <Link className="text-yellow-500"
                        to={`/tasks/${task._id}`}>Edit</Link>
                </div>
            </header>

            <p className="text-zinc-400 break-words whitespace-normal">{task.description}</p>

            <div className="text-xs text-zinc-600">
            <p className="break-words whitespace-normal">Created: {dayjs(task.createdAt).tz("America/Bogota").format("DD/MMM/YYYY hh:mm:ss A")}</p>
            <p className="break-words whitespace-normal">Updated: {dayjs(task.updatedAt).tz("America/Bogota").format("DD/MMM/YYYY hh:mm:ss A")}</p>
            </div>
            
        </div>
    )
}

export default TaskCard;
