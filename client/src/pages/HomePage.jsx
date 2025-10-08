import { useEffect } from "react";
import { Link } from "react-router-dom";
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { wakeUpServer } from '../api/axios'; // Importa la función wakeUpServer
import { useTranslation } from 'react-i18next';


const HomaPage = () => {

  useEffect(() => {
    // Llamada para despertar el servidor cuando la página cargue
    wakeUpServer();
  }, []); // Solo se ejecuta una vez al montar el componente
  const { t } = useTranslation();


  return (
    <div className="flex flex-col pt-10">
      {/* Jumbotron Section */}
      {/* <div
        className="h-screen w-full bg-center flex justify-center items-center"
        style={{
          backgroundImage: `
            linear-gradient(to top, transparent, black),
            linear-gradient(to bottom, transparent, black),
            linear-gradient(to bottom, transparent, black),
            url('${import.meta.env.BASE_URL}banner.webp')`,
          backgroundSize: 'cover', // Ajusta el tamaño de fondo para cubrir el contenedor
          backgroundRepeat: 'no-repeat', // Evita la repetición vertical y horizontal
          backgroundPosition: 'center center' // Centra la imagen
        }}
      >
        <img
          className="max-w-full max-h-full lg:p-32"
          src={`${import.meta.env.BASE_URL}logoT.png`}
          alt="Logo"
        />
      </div> */}

      <div className="relative h-screen w-full flex justify-center items-center overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
          src={`${import.meta.env.BASE_URL}tech_.mp4`}
          poster={`${import.meta.env.BASE_URL}tech_.png`}
          muted
          autoPlay
          loop
          playsInline
          onError={(e) => (e.target.style.display = 'none')}
        />

        {/* Poster Image as Fallback */}
        <img
          src={`${import.meta.env.BASE_URL}tech.png`}
          alt="Video Poster"
          className="absolute w-full h-full object-cover bg-black opacity-30"
          style={{ display: 'none' }}
          onLoad={(e) => {
            const video = document.querySelector('video');
            if (video && video.style.display === 'none') {
              e.target.style.display = 'block';
            }
          }}
        />

        {/* Fondo negro con opacidad */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70 -z-10" />

        {/* Logo */}
        <img
          className="relative z-10 max-w-full max-h-full lg:p-32"
          src={`${import.meta.env.BASE_URL}logoT.png`}
          alt="Logo"
        />

        {/* Imagen de fondo para móviles */}
        {/* <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center md:hidden -z-20" style={{ backgroundImage: `url('${import.meta.env.BASE_URL}banner.webp')` }}></div> */}
      </div>


      {/* Cards Section */}
      <div className=" mx-auto py-32 px-4 lg:px-20 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="h-full shadow-md border border-green-800 rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}global.jpg`}
              alt="Project 1"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 md:p-6">
              <h5 className="text-base md:text-xl font-semibold">{t('cards.title1')}</h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-base">{t('cards.message1')}</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full shadow-md border border-zinc-600 rounded-lg hover:bg-green-100">
            <Link to="/trading">
              <img
                src={`${import.meta.env.BASE_URL}lightbulb.jpg`}
                alt="Project 2"
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-4 md:p-6">
                <h5 className="text-base md:text-xl font-semibold">{t('cards.title2')}</h5>
                <br />
                <div className="flex flex-col space-y-3 text-left">
                  <p className="text-xs md:text-base">{t('cards.message2')}</p>
                </div>
              </div>
            </Link>

          </div>

          {/* Card 3 */}
          <div className="h-full shadow-md border border-zinc-600 rounded-lg">
            {/* <div className="h-full rounded-lg shadow-shadow-[0_0px_20px_rgba(0,100,0,0.3)]"> */}
            <img
              src={`${import.meta.env.BASE_URL}project.jpg`}
              alt="Project 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 md:p-6">
              <h5 className="text-base md:text-xl font-semibold">{t('cards.title3')}</h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-base">{t('cards.message3')}</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="h-full shadow-md border border-zinc-600 rounded-lg">
            {/* <div className="h-full rounded-lg shadow-shadow-[0_0px_20px_rgba(0,100,0,0.3)]"> */}
            <img
              src={`${import.meta.env.BASE_URL}project.jpg`}
              alt="Project 3"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 md:p-6">
              <h5 className="text-base md:text-xl font-semibold">{t('cards.title4')}</h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-base">{t('cards.message4')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*About us*/}
      <div className="bg-green-50 text-black">
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto py-20 px-4 lg:px-20 2xl:px-60">
          <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
            <h2 className="text-lg md:text-2xl font-bold text-center">
              {t("about.title")}
            </h2>
          </div>
          <div className="md:w-3/4">
            <p className="text-justify text-xs md:text-lg my-4">
              {t("about.text1")}
            </p>
            <p className="text-justify text-xs md:text-lg my-4">
              {t("about.text2")}
            </p>
            <p className="text-justify text-xs md:text-lg my-4">
              {t("about.text3")}
            </p>
          </div>
        </div>
      </div>




      {/* Prefooter Section */}
      <div
        className="w-full text-left mt-16 p-4 md:p-8 bg-repeat bg-center min-h-[400px]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, transparent, black),
            linear-gradient(to top, transparent, black),
            linear-gradient(to top, transparent, black),
            url('${import.meta.env.BASE_URL}banner.webp')`,
          backgroundSize: 'cover', // Ajusta el tamaño de fondo para cubrir el contenedor
          backgroundRepeat: 'no-repeat', // Evita la repetición vertical y horizontal
          backgroundPosition: 'center center' // Centra la imagen
        }}
      >
        <div className="px-4 md:px-8 lg:px-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            <div className="flex items-center justify-center">
              <img className="h-48 md:h-64" src={`${import.meta.env.BASE_URL}logoT.png`} alt="Logo" />
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-xl font-bold">Services</h5> <br />
                <p className="text-xs md:text-lg ">- Trading and financial investments</p>
                <p className="text-xs md:text-lg ">- Project evaluation, structuring and management</p>
                <p className="text-xs md:text-lg ">- International business consulting</p>
                <p className="text-xs md:text-lg ">- Software and Artificial Intelligence development</p>
              </div>
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-xl font-bold">Contact Us</h5> <br />
                <p className="text-xs md:text-lg ">
                  Address: Cra 42 C #3 Sur 81, Torre 1, Piso 15 <br />
                  CE Milla de Oro, Medellín Colombia
                </p>
                <a
                  href="mailto:director@panamericanprivateinvestments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-lg"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" /> {/* Ícono de Heroicons v2 */}
                  <span>director@panamericanprivateinvestments.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/panamerican-private-investments/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-lg">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M22.23 0H1.77C.792 0 0 .774 0 1.728v20.543C0 23.225.792 24 1.77 24h20.46c.978 0 1.77-.774 1.77-1.729V1.728C24 .774 23.208 0 22.23 0zM7.12 20.452H3.56V9h3.56v11.452zm-1.78-13.01a2.07 2.07 0 11-.001-4.138 2.07 2.07 0 010 4.138zm15.18 13.01h-3.56v-5.941c0-1.417-.028-3.245-1.975-3.245-1.976 0-2.278 1.543-2.278 3.14v6.045h-3.56V9h3.42v1.563h.049c.476-.9 1.636-1.846 3.368-1.846 3.602 0 4.267 2.369 4.267 5.452v6.283z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-black text-white text-xs bottom-0 w-full text-center py-1">
        <p>&copy; 2024 Panamerican Private Investments. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomaPage;
