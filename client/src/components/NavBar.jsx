// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../context/AuthContext";
// import {
//   ArrowRightOnRectangleIcon,
//   AdjustmentsHorizontalIcon,
//   ClipboardDocumentCheckIcon,
//   ArrowLeftOnRectangleIcon,
//   UserPlusIcon,
//   Bars3Icon,
//   FolderIcon
// } from "@heroicons/react/24/outline";
// import { ADMIN, CUSTOMERS } from '../projects';
// import { useTranslation } from 'react-i18next';

// function NavBar() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const { isAuthenticated, logout, user } = useAuth();
//   const { t, i18n } = useTranslation();

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   // Detectar scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
//   const closeMenu = () => setIsMenuOpen(false);
//   const changeLanguage = (lng) => i18n.changeLanguage(lng);

//   return (
//     <nav
//       className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50 print:hidden transition-colors duration-500 ${
//         isScrolled ? "bg-black/95 backdrop-blur-sm shadow-md" : "bg-transparent"
//       }`}
//     >
//       <div className="mr-2 flex items-center justify-between p-2">
//         <div className="flex items-center">
//           <Link to="/">
//             <div className="h-10 w-10 overflow-hidden bg-green-950 rounded-full">
//               <img
//                 src={`${import.meta.env.BASE_URL}logoTCS.png`}
//                 alt="PPI"
//                 className="h-full w-full object-cover object-center scale-75"
//               />
//             </div>
//           </Link>
//         </div>

//         {/*Flags for language*/}
//         <div className="flex items-center space-x-5 ml-auto mr-4">
//           <button onClick={() => changeLanguage('en')} className="w-6 h-6">
//             <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
//           </button>
//           <button onClick={() => changeLanguage('es')} className="w-6 h-6">
//             <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
//           </button>
//         </div>

//       </div>
//     </nav>


//   );
// }

// export default NavBar;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  // Detecta scroll para cambiar fondo
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  // 🧭 Scroll suave hacia el fondo (footer)
  const scrollToFooter = () => {
    const footer = document.querySelector("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🟩 Funciones para controlar dropdown con pequeño delay
  let closeTimeout;
  const handleMouseEnter = () => {
    clearTimeout(closeTimeout);
    setShowServices(true);
  };
  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => setShowServices(false), 150);
  };

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full z-50 transition-colors duration-500 ${isScrolled ? "bg-black/95 backdrop-blur-sm shadow-md" : "bg-transparent"
        }`}
    >
      <div className="flex items-center justify-between px-4 py-2 md:px-6">
        {/* 🟩 Logo */}
        <div className="flex items-center">
          <Link to="/">
            <div className="h-10 w-10 overflow-hidden bg-green-950 rounded-full">
              <img
                src={`${import.meta.env.BASE_URL}logoTCS.png`}
                alt="PPI"
                className="h-full w-full object-cover object-center scale-75"
              />
            </div>
          </Link>
        </div>

        {/* 🧭 Menu principal */}
        <div className="hidden md:flex items-center space-x-10 text-green-500 font-semibold">
          <Link
            to="/"
            className="hover:text-green-300 transition-colors duration-300"
          >
            {t("navbar.home")}
          </Link>

          {/* Dropdown Services */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-green-300 transition-colors duration-300">
              {t("navbar.service")} ▾
            </button>

            {showServices && (
              <div
                className="absolute left-0 mt-2 w-52 bg-white text-green-500 rounded-lg shadow-lg overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to="/consulting"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  {t("navbar.services.consulting")}
                </Link>
                <Link
                  to="/projectsbank"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  {t("navbar.services.projects")}
                </Link>
                <Link
                  to="/education"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  {t("navbar.services.education")}
                </Link>
                <Link
                  to="/trading"
                  className="block px-4 py-2 hover:bg-green-100"
                >
                  {t("navbar.services.software")}
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={scrollToFooter}
            className="hover:text-green-300 transition-colors duration-300"
          >
            {t("navbar.contact")}
          </button>
        </div>

        {/* 🌎 Language flags */}
        <div className="flex items-center space-x-4">
          <button onClick={() => changeLanguage("en")} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
          </button>
          <button onClick={() => changeLanguage("es")} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
          </button>
        </div>

        {/* 🍔 Mobile Menu Button */}
        <div className="md:hidden ml-2">
          <button onClick={toggleMenu} className="text-green-500 focus:outline-none">
            {isMenuOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 text-white px-6 py-4 space-y-4">
          <Link
            to="/"
            onClick={closeMenu}
            className="block hover:text-green-300 transition-colors"
          >
            {t("navbar.home")}
          </Link>

          {/* Services dropdown mobile */}
          <details className="group">
            <summary className="cursor-pointer hover:text-green-300">
              {t("navbar.service")}
            </summary>
            <div className="pl-4 mt-2 space-y-2 text-sm">
              <Link
                to="/consulting"
                onClick={closeMenu}
                className="block hover:text-green-300"
              >
                {t("navbar.services.consulting")}
              </Link>
              <Link
                to="/projectsbank"
                onClick={closeMenu}
                className="block hover:text-green-300"
              >
                {t("navbar.services.projects")}
              </Link>
              <Link
                to="/education"
                onClick={closeMenu}
                className="block hover:text-green-300"
              >
                {t("navbar.services.education")}
              </Link>
              <Link
                to="/trading"
                onClick={closeMenu}
                className="block hover:text-green-300"
              >
                {t("navbar.services.software")}
              </Link>
            </div>
          </details>

          <button
            onClick={() => {
              scrollToFooter();
              closeMenu();
            }}
            className="block hover:text-green-300 transition-colors"
          >
            {t("navbar.contact")}
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
