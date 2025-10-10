import { useEffect } from "react";
import { Link } from "react-router-dom";
import { wakeUpServer } from "../api/axios";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const Footer = () => {

  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("director@panamericanprivateinvestments.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const { t } = useTranslation();
  return (
    <footer className="botom-0 bg-black text-white pt-20 pb-2 px-6 lg:px-20 2xl:px-60">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-left md:text-left">

        {/* Columna Izquierda - Logo */}
        <div className="flex flex-col items-center ">
          <img
            src={`${import.meta.env.BASE_URL}logoTC.png`}
            alt="Panamerican Private Investments Logo"
            className="h-52 object-center"
          />
        </div>

        {/* Columna Central - Mensaje + Servicios */}
        <div className="flex flex-col items-left md:items-center px-4">

          {/* Enlaces a servicios (mismos títulos que en las cards) */}
          <div className="flex flex-col space-y-2 text-green-200">

            <h3 className="text-white font-bold text-lg md:text-xl pb-3">
              {t("cards.title")}
            </h3>

            <Link to="/trading" className="hover:text-green-500 transition-colors">
              {t("cards.title1")}
            </Link>
            <Link to="/" className="hover:text-green-500 transition-colors">
              {t("cards.title2")}
            </Link>
            <Link to="/" className="hover:text-green-500 transition-colors">
              {t("cards.title3")}
            </Link>
            <Link to="/" className="hover:text-green-500 transition-colors">
              {t("cards.title4")}
            </Link>
          </div>
        </div>

        {/* Columna Derecha - Contacto */}
        <div className="flex flex-col items-left md:items-end space-y-3 px-4 text-sm md:text-base">
          <h5 className="font-bold text-white mb-1 text-lg md:text-xl">
            {t("footer.contactTitle")}
          </h5>

          <p className="text-gray-300 text-left md:text-right">
            Cra 42 C #3 Sur 81, Torre 1, Piso 15 <br />
            CE Milla de Oro, Medellín, Colombia
          </p>

          {/* Email (copia al portapapeles con alert) */}
          <button
            onClick={() => {
              navigator.clipboard.writeText("director@panamericanprivateinvestments.com");
              alert("Email copiado al portapapeles 📋");
            }}
            className="flex items-center space-x-2 text-green-200 hover:text-green-500 transition-colors"
            title="Click para copiar email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M1.5 4.5A2.5 2.5 0 0 1 4 2h16a2.5 2.5 0 0 1 2.5 2.5v15a2.5 2.5 0 0 1-2.5 2.5H4a2.5 2.5 0 0 1-2.5-2.5v-15Zm2.16.5 7.81 6.2a1 1 0 0 0 1.26 0l7.82-6.2H3.66ZM20 19.5a.5.5 0 0 0 .5-.5V8.56l-6.6 5.22a3 3 0 0 1-3.8 0L3.5 8.56V19a.5.5 0 0 0 .5.5h16Z" />
            </svg>
            <span>Email</span>
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/panamerican-private-investments/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-200 hover:text-green-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+573006190721"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-green-200 hover:text-green-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5">
              <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path>
              <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-gray-500 font-bold text-sm md:text-md">
          {t("footer.centralTitle")}
        </h3>
        <p className="text-gray-500 text-sm">
          {t("footer.centralText")}
        </p>
      </div>

      {/* Línea inferior */}
      <div className=" my-2 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        &copy; 2025 Panamerican Private Investments. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

