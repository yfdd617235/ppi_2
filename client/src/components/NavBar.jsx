import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-600 fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-4 px-5 lg:px-10 z-50 my-1 rounded-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to={isAuthenticated ? "/tasks" : "/"} className="hidden md:block">
          <h1 className="text-xl sm:text-2xl font-bold">PPI - Task Manager</h1>
        </Link>
        <ul className="flex flex-wrap gap-x-3 gap-y-2 md:gap-y-0 items-center">
          {isAuthenticated ? (
            <>
              <li className="text-sm sm:text-lg md:text-xl font-bold text-black">
                Account: - {user.username} -
              </li>
              <li>
                <Link
                  to="/add-task"
                  className="bg-green-900 px-3 py-1 sm:px-4 sm:py-1 rounded-sm text-sm sm:text-base"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => logout()}
                  className="bg-red-700 px-3 py-1 sm:px-4 sm:py-1 rounded-sm text-sm sm:text-base"
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-green-900 px-3 py-1 sm:px-4 sm:py-1 rounded-sm text-sm sm:text-base"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="bg-green-900 px-3 py-1 sm:px-4 sm:py-1 rounded-sm text-sm sm:text-base"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
