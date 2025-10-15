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
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-full py-0 z-50 print:hidden transition-colors duration-500 ${
        isScrolled ? "bg-black/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mr-2 flex items-center justify-between p-2">
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

        {/*Flags for language*/}
        <div className="flex items-center space-x-5 ml-auto mr-4">
          <button onClick={() => changeLanguage('en')} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}enFlag.png`} alt="English" />
          </button>
          <button onClick={() => changeLanguage('es')} className="w-6 h-6">
            <img src={`${import.meta.env.BASE_URL}esFlag.png`} alt="Español" />
          </button>
        </div>
        
      </div>
    </nav>
  );
}

export default NavBar;
