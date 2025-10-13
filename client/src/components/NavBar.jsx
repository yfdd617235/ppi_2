import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRightOnRectangleIcon,
  AdjustmentsHorizontalIcon,
  ClipboardDocumentCheckIcon,
  ArrowLeftOnRectangleIcon,
  UserPlusIcon,
  Bars3Icon,
  FolderIcon
} from "@heroicons/react/24/outline";
import { ADMIN, CUSTOMERS } from '../projects';
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`bg-black fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50 print:hidden`}
    >
      <div className="mr-2 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <div className="h-12 w-12 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logoT.png`}
                alt="PPI"
                className="h-full w-full object-cover object-center scale-125"
              />
            </div>
          </Link>
        </div>

        {/*Flags for lenguage*/}
        <div className="flex items-center space-x-5 ml-auto mr-4">
          <button onClick={() => changeLanguage('en')} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
          </button>
          <button onClick={() => changeLanguage('es')} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
          </button>
        </div>

        <div className="flex items-center">
          {isAuthenticated && (
            <div className="text-sm text-green-500 flex items-center flex-grow md:flex-grow-0 mx-4">
              {user.username}
            </div>
          )}

          {/* Mostrar el menú hamburguesa o el icono de login según el estado de autenticación */}
          {isAuthenticated ? (
            <button onClick={toggleMenu} className="text-white md:hidden">
              <Bars3Icon className="h-6 w-6" />
            </button>
          ) : (
            <Link to="/login" className="text-white md:hidden">
              <ArrowLeftOnRectangleIcon className="h-6 w-6" />
            </Link>
          )}

          {/* Menú de navegación para pantallas grandes */}
          <ul className={`hidden md:flex flex-wrap gap-x-3 items-center ${!isAuthenticated ? 'justify-end' : ''}`}>
            {isAuthenticated ? (
              CUSTOMERS.includes(user.email) ? (
                // Menú específico para usuarios en el arreglo CUSTOMERS
                <>
                  <li>
                    <Link
                      to="/projectsView"
                      className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-500"
                    >
                      <FolderIcon className="h-5 w-5 text-yellow-500" />
                      <span className="sr-only">Projects View</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        logout();
                        closeMenu(); // Cerrar el menú al hacer clic en Logout
                      }}
                      className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-500"
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                      <span className="sr-only">Logout</span>
                    </Link>
                  </li>
                </>
              ) : (
                // Menú para otros usuarios autenticados que no están en CUSTOMERS
                <>
                  <li>
                    <Link
                      to="/tasks"
                      className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-500"
                    >
                      <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
                      <span className="sr-only">Tasks</span>
                    </Link>
                  </li>
                  {user.email === ADMIN && (
                    <>
                      <li>
                        <Link
                          to="/profile"
                          className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-500"
                        >
                          <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-500" />
                          <span className="sr-only">Profile</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/projects"
                          className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm border border-zinc-500"
                        >
                          <FolderIcon className="h-5 w-5 text-yellow-500" />
                          <span className="sr-only">Projects</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/register"
                          className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm border border-zinc-500"
                        >
                          <UserPlusIcon className="h-5 w-5 text-blue-500" />
                          <span className="sr-only">Register</span>
                        </Link>
                      </li>
                    </>
                  )}
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        logout();
                        closeMenu(); // Cerrar el menú al hacer clic en Logout
                      }}
                      className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-500"
                    >
                      <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                      <span className="sr-only">Logout</span>
                    </Link>
                  </li>
                </>
              )
            ) : (
              <li>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-2 py-1 sm:px-2 sm:py-1 rounded-sm text-sm sm:text-base border border-zinc-700"
                >
                  <ArrowLeftOnRectangleIcon className="h-5 w-5 text-white" />
                  <span className="sr-only">Login</span>
                </Link>
              </li>
            )}
          </ul>


          {/* Menú hamburguesa desplegable para pantallas pequeñas */}
          {isMenuOpen && (
            <ul className="absolute right-0 top-12 text-white rounded-md flex flex-col gap-3 md:hidden">
              {isAuthenticated ? (
                CUSTOMERS.includes(user.email) ? (
                  // Menú específico para usuarios en el arreglo CUSTOMERS
                  <>
                    <li>
                      <Link
                        to="/projectsView"
                        className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                        onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                      >
                        <FolderIcon className="h-5 w-5 text-yellow-500" />
                        <span className="sr-only">Projects View</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          logout();
                          closeMenu(); // Cerrar el menú al hacer clic en Logout
                        }}
                        className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                      >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                        <span className="sr-only">Logout</span>
                      </Link>
                    </li>
                  </>
                ) : (
                  // Menú para otros usuarios autenticados que no están en CUSTOMERS
                  <>
                    <li>
                      <Link
                        to="/tasks"
                        className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                        onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                      >
                        <ClipboardDocumentCheckIcon className="h-5 w-5 text-white" />
                        <span className="sr-only">Tasks</span>
                      </Link>
                    </li>
                    {user.email === ADMIN && (
                      <>
                        <li>
                          <Link
                            to="/profile"
                            className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                            onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                          >
                            <AdjustmentsHorizontalIcon className="h-5 w-5 text-green-600" />
                            <span className="sr-only">Profile</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/projects"
                            className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                            onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                          >
                            <FolderIcon className="h-5 w-5 text-yellow-500" />
                            <span className="sr-only">Projects</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/register"
                            className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                            onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                          >
                            <UserPlusIcon className="h-5 w-5 text-blue-500" />
                            <span className="sr-only">Register</span>
                          </Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link
                        to="/"
                        onClick={() => {
                          logout();
                          closeMenu(); // Cerrar el menú al hacer clic en Logout
                        }}
                        className="bg-black flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                      >
                        <ArrowRightOnRectangleIcon className="h-5 w-5 text-red-500" />
                        <span className="sr-only">Logout</span>
                      </Link>
                    </li>
                  </>
                )
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="flex items-center gap-2 px-2 py-1 rounded-sm text-sm border border-zinc-700"
                    onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 text-white" />
                    <span className="sr-only">Login</span>
                  </Link>
                </li>
              )}
            </ul>
          )}

        </div>
      </div>
    </nav>
  );
}

export default NavBar;

