// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import { ArrowRightOnRectangleIcon, ClipboardDocumentCheckIcon, UserCircleIcon } from '@heroicons/react/24/outline';

// function NavBar() {
//   const [isVisible, setIsVisible] = useState(false);
//   const { isAuthenticated, logout, user } = useAuth();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 5000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <nav
//       className={`bg-black fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
//     >
//       <div className="mx-3 flex items-center justify-between">
//         <div className="flex items-center">
//           <Link to={isAuthenticated ? "/tasks" : "/"}>
//             <div className="h-14 w-14 m-2 overflow-hidden">
//               <img
//                 src={`${import.meta.env.BASE_URL}logoT.png`}
//                 alt="PPI"
//                 className="h-full w-full object-cover object-center scale-125"
//               />
//             </div>
//           </Link>
//         </div>

//         <ul className="flex flex-wrap gap-x-3 gap-y-2 md:gap-y-0 items-center">
//           {isAuthenticated ? (
//             <>
//               <li className="text-sm text-white">{user.username}</li>
//               <li>
//                 <Link
//                   to="/tasks"
//                   className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
//                 >
//                   <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
//                   <span className="sr-only">Tasks</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/profile"
//                   className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
//                 >
//                   <UserCircleIcon className="h-5 w-5 text-green-500" />
//                   <span className="sr-only">Profile</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/"
//                   onClick={() => logout()}
//                   className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
//                 >
//                   <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
//                   <span className="sr-only">Logout</span>
//                 </Link>
//               </li>
//             </>
//           ) : (
//             <>
//               <li>
//                 <Link
//                   to="/login"
//                   className="bg-green-950 px-2 py-1 sm:px-3 sm:py-1 rounded-sm text-sm border border-zinc-800"
//                 >
//                   Provider
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/register"
//                   className="px-2 py-1 sm:px-3 sm:py-1 rounded-sm text-sm border border-zinc-800"
//                 >
//                   Register
//                 </Link>
//               </li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArrowRightOnRectangleIcon, ClipboardDocumentCheckIcon, UserCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline';

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`bg-black fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
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
        </div>

        <ul className="flex flex-wrap gap-x-3 gap-y-2 md:gap-y-0 items-center">
          {isAuthenticated ? (
            <>
              <li className="text-sm text-white">{user.username}</li>
              <li>
                <Link
                  to="/tasks"
                  className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
                  <span className="sr-only">Tasks</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  <UserCircleIcon className="h-5 w-5 text-green-600" />
                  <span className="sr-only">Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={() => logout()}
                  className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                  <span className="sr-only">Logout</span>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-800"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5 text-white" />
                  <span className="sr-only">Login</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="px-2 py-1 sm:px-3 sm:py-1 rounded-sm text-sm border border-zinc-800"
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
