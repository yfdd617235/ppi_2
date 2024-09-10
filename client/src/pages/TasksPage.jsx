import { useAuth } from "../context/AuthContext"

function TasksPage() {

  const {user}  = useAuth()
  console.log(user)

  return (
    <div>
      Tasks Page
    </div>
  )
}

export default TasksPage
