import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-black fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50">
      {/* <nav className="bg-black fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 px-5 lg:px-10 z-50 border-2 border-zinc-800"> */}
      <div className="mx-3 flex items-center justify-between">
        <div className="flex items-center">

          <Link to={isAuthenticated ? "/tasks" : "/"}>
            <div className="h-14 w-14 m-2 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logoT.png`}
                alt="PPI"
                className="h-full w-full object-cover object-center scale-125"
              />
            </div>
          </Link>
          {/* <Link to={isAuthenticated ? "/tasks" : "/"} className="hidden md:block">
            <h1 className="font-bold">Task Manager</h1>
          </Link> */}
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-2 md:gap-y-0 items-center">
          {isAuthenticated ? (
            <>
              <li className="text-sm text-white">
                {user.username}
              </li>
              <li>
                <Link
                  to="/add-task"
                  className="bg-green-950 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  Add Task
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => logout()}
                  className="px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
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
                  className="bg-green-950 px-2 py-1 sm:px-3 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className=" px-2 py-1 sm:px-3 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
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
