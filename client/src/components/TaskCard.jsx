import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)


function TaskCard({ task }) {

    const { deleteTask } = useTasks();

    return (
        <div className="bg-zinc-800 max-w-md w-full p-4 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center" >

                    <button className="text-red-500"
                        onClick={() => { deleteTask(task._id); }}>Delete</button>

                    <Link className="text-yellow-500"
                        to={`/tasks/${task._id}`}>Edit</Link>
                </div>
            </header>
            <p className="text-gray-400">{task.description}</p>
            <p>{dayjs(task.date).utc().format("DD/MMM/YYYY")}</p>
            <p>{new Date(task.date).toLocaleDateString('en-US', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            })}</p>

        </div>
    )
}

export default TaskCard
