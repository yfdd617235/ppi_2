import { useEffect } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid"
import { wakeUpServer } from '../api/axios'; // Importa la función wakeUpServer

const HomaPage = () => {

  useEffect(() => {
    // Llamada para despertar el servidor cuando la página cargue
    wakeUpServer();
  }, []); // Solo se ejecuta una vez al montar el componente


  return (
    <div className="flex flex-col pt-10">
      {/* Jumbotron Section */}
      <div
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
      </div>

      {/* Cards Section */}
      <div className="container mx-auto py-32 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {/* Card 1 */}
          <div className="h-full shadow-md border border-zinc-600 rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}global.jpg`}
              alt="Project 1"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 md:p-6">
              <h5 className="text-base md:text-xl font-semibold">CONSULTING</h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-sm">- Projects Structuring</p>
                <p className="text-xs md:text-sm">- Evaluation and Valuation of companies and projects</p>
                <p className="text-xs md:text-sm">- Networking, Startups and angel investors</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="h-full shadow-md border border-zinc-600 rounded-lg">
            <img
              src={`${import.meta.env.BASE_URL}lightbulb.jpg`}
              alt="Project 2"
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4 md:p-6">
              <h5 className="text-base md:text-xl font-semibold">SOFTWARE DEVELOPMENT</h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-sm">- Leverage for Environmental Investments</p>
                <p className="text-xs md:text-sm">- Financial arbitraje with licensed entities</p>
                <p className="text-xs md:text-sm">- International Commerce (Food and other commodities)</p>
                <p className="text-xs md:text-sm">- Algorithmic trading and market analysis Software</p>
              </div>
            </div>
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
              <h5 className="text-base md:text-xl font-semibold">
                PROJECTS
              </h5>
              <br />
              <div className="flex flex-col space-y-3 text-left">
                <p className="text-xs md:text-sm">- Structuring</p>
                <p className="text-xs md:text-sm">- Implementation, support and management</p>
                <p className="text-xs md:text-sm">- Promotion and marketing for fundraising</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*About us*/}
      <div className="border-y border-zinc-600 my-24">
      <div className="container flex flex-col md:flex-row justify-center items-center mx-auto py-20 px-4 md:px-10">
        <div className="flex-shrink-0 md:w-1/4 flex justify-center items-center">
          <h2 className="text-lg md:text-xl font-bold text-center">About Us</h2>
        </div>
        <div className="md:w-3/4">
          <p className="text-xs md:text-sm my-2">
            We are a dedicated team of professionals committed to driving growth and innovation in business. Our mission is to provide comprehensive solutions in business consulting, software development, and project management.
          </p>
          <p className="text-xs md:text-sm my-2">
            We focus on building strong relationships with our clients, understanding their unique needs, and crafting personalized strategies that deliver sustainable results. With expertise in project evaluation and international trade, we ensure our clients receive the support they need to thrive in a competitive environment.
          </p>
          <p className="text-xs md:text-sm my-2">
            We believe in collaboration and transparency, working closely with our partners to achieve common goals while maximizing opportunities at every step.
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
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Services</h5> <br />
                <p className="text-xs md:text-sm ">- Trading and financial investments</p>
                <p className="text-xs md:text-sm ">- Project evaluation, structuring and management</p>
                <p className="text-xs md:text-sm ">- International business consulting</p>
                <p className="text-xs md:text-sm ">- Software and Artificial Intelligence development</p>
              </div>
            </div>
            <div className="flex items-center justify-left m-6">
              <div className="flex flex-col space-y-3 text-left">
                <h5 className="text-xs md:text-sm lg:text-lg font-bold">Contact Us</h5> <br />
                <p className="text-xs md:text-sm ">
                  Address: Cra 42 C #3 Sur 81, Torre 1, Piso 15 <br />
                  CE Milla de Oro, Medellín Colombia
                </p>
                <a
                  href="mailto:director@panamericanprivateinvestments.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm"
                >
                  <EnvelopeIcon className="w-4 h-4 text-white" /> {/* Ícono de Heroicons v2 */}
                  <span>director@panamericanprivateinvestments.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/panamerican-private-investments/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-xs md:text-sm">
                  <svg role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
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
