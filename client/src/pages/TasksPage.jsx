import { useEffect } from "react"
import { useTasks } from "../context/TasksContext"
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks()

  useEffect(() => {
    getTasks();
  }, [])

  if (tasks.length == 0) return (<h1>No Tasks</h1>)

  return (


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center my-20">
      {tasks.map((task) => (
          <TaskCard task={task} key={task._id}/>
        ))}
    </div>


  )
}

export default TasksPage
