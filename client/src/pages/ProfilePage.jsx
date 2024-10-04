// import React, { useState, useEffect } from 'react';
// import { ListBulletIcon, ChartBarIcon, UserIcon, FolderIcon } from '@heroicons/react/24/outline'; // Importa los iconos de Heroicons
// import TaskTable from '../components/TaskTable';
// import Chart from '../components/Chart';

// function ProfilePage() {
//   const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú hamburguesa
//   const [activeComponent, setActiveComponent] = useState('chart'); // Estado para manejar el componente activo

//   const toggleMenu = () => {
//     setIsOpen(!isOpen); // Cambiar el estado al hacer clic
//   };

//   const handleClickOutside = (event) => {
//     const menu = document.getElementById('hamburger-menu');
//     const button = document.getElementById('hamburger-button');
//     // Cerrar el menú si el clic está fuera de él y del botón
//     if (menu && !menu.contains(event.target) && button && !button.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside); // Agregar el manejador al documento
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside); // Limpiar el manejador al desmontar
//     };
//   }, []);

//   return (
//     <div className="flex sm:flex flex-wrap mt-16 h-screen">

//       {/* Ícono de hamburguesa visible solo en pantallas pequeñas */}
//       <div className="sm:hidden p-4 z-50">
//         <button onClick={toggleMenu} className="text-white" id="hamburger-button">
//           {/* Ícono de hamburguesa */}
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
//           </svg>
//         </button>
//       </div>

//       {/* Menú lateral para pantallas grandes (siempre visible) */}
//       <div className="hidden print:hidden sm:flex flex-col justify-center lg:w-1/8 p-4 gap-4 h-screen fixed top-0 left-0 z-40">
//         <p
//           className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg cursor-pointer"
//           onClick={() => setActiveComponent('list')}
//         >
//           <ListBulletIcon className="h-5 w-5 text-green-500" /> List
//         </p>
//         <p
//           className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg cursor-pointer"
//           onClick={() => setActiveComponent('chart')}
//         >
//           <ChartBarIcon className="h-5 w-5 text-green-500" /> Progress
//         </p>
//         <p className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg">
//           <UserIcon className="h-5 w-5 text-green-500" /> Users
//         </p>
//         <p className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg">
//           <FolderIcon className="h-5 w-5 text-green-500" /> Projects
//         </p>
//       </div>

//       {/* Menú lateral para pantallas pequeñas (controlado por el estado isOpen) */}
//       <div
//         id="hamburger-menu"
//         className={`sm:hidden flex flex-col justify-center lg:w-1/8 p-4 pl-0 gap-5 bg-black fixed top-1/3 left-0 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
//       >
//         <p
//           className="bg-black p-2 border text-white border-zinc-800 flex items-center gap-2 rounded-lg cursor-pointer"
//           onClick={() => setActiveComponent('list')}
//         >
//           <ListBulletIcon className="h-5 w-5 text-green-500" /> List
//         </p>
//         <p
//           className="bg-black p-2 border text-white border-zinc-800 flex items-center gap-2 rounded-lg cursor-pointer"
//           onClick={() => setActiveComponent('chart')}
//         >
//           <ChartBarIcon className="h-5 w-5 text-green-500" /> Progress
//         </p>
//         <p className="bg-black p-2 border text-white border-zinc-800 flex items-center gap-2 rounded-lg">
//           <UserIcon className="h-5 w-5 text-green-500" /> Users
//         </p>
//         <p className="bg-black p-2 border text-white border-zinc-800 flex items-center gap-2 rounded-lg">
//           <FolderIcon className="h-5 w-5 text-green-500" /> Projects
//         </p>
//       </div>

//       {/* Sección derecha con scroll interno */}
//       <div className="flex-grow h-full lg:ml-40 md:ml-40">
//         {/* Contenido dinámico del lado derecho */}
//         <div className="flex flex-col items-center">
//           {activeComponent === 'chart' && (
//             <div className="w-full lg:w-9/12 items-center justify-center">
//               <Chart />
//             </div>
//           )}

//           {activeComponent === 'list' && (
//             <div className="w-full lg:w-9/12 mt-12">
//               <TaskTable />
//             </div>
//           )}
//         </div>

//         {/* Footer con tu nombre y developer */}
//         <footer className="w-full p-4 mt-8 print:block hidden">
//           <p className='text-black font-bold'>Yosef David Giraldo Salazar</p>
//           <p>Developer</p>
//         </footer>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;


import React, { useState, useEffect } from 'react';
import { ListBulletIcon, ChartBarIcon, UserIcon, FolderIcon } from '@heroicons/react/24/outline'; // Importa los iconos de Heroicons
import TaskTable from '../components/TaskTable';
import Chart from '../components/Chart';

function ProfilePage() {
  const [isOpen, setIsOpen] = useState(false); // Estado para manejar el menú hamburguesa
  const [activeComponent, setActiveComponent] = useState('chart'); // Estado para manejar el componente activo

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambiar el estado al hacer clic
  };

  const handleClickOutside = (event) => {
    const menu = document.getElementById('hamburger-menu');
    const button = document.getElementById('hamburger-button');
    // Cerrar el menú si el clic está fuera de él y del botón
    if (menu && !menu.contains(event.target) && button && !button.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // Agregar el manejador al documento
    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Limpiar el manejador al desmontar
    };
  }, []);

  return (
    <div className="flex sm:flex flex-wrap pt-16 h-screen">

      {/* Ícono de hamburguesa visible solo en pantallas pequeñas */}
      <div className="p-1 z-40 fixed ">
        <button onClick={toggleMenu} className="text-green-500" id="hamburger-button">
          {/* Ícono de hamburguesa */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>

        </button>
      </div>

      {/* Menú lateral para pantallas pequeñas (controlado por el estado isOpen) */}
      <div
        id="hamburger-menu"
        className={`flex flex-col mt-10 h-screen p-5 -ml-6 gap-5 fixed left-0 z-50 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}
      >
        <p
          className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg cursor-pointer"
          onClick={() => setActiveComponent('list')}
        >
          <ListBulletIcon className="h-5 w-5 text-white" /><span className="sr-only">List</span>
        </p>
        <p
          className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg cursor-pointer"
          onClick={() => setActiveComponent('chart')}
        >
          <ChartBarIcon className="h-5 w-5 text-green-500" /> <span className="sr-only">Progress</span>
        </p>
        <p className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg">
          <UserIcon className="h-5 w-5 text-blue-500" /> <span className="sr-only">Users</span>
        </p>
        <p className="bg-black p-2 border text-white border-zinc-700 flex items-center gap-2 rounded-lg">
          <FolderIcon className="h-5 w-5 text-yellow-500" /><span className="sr-only">Projects</span>
        </p>
      </div>


      {/* Sección derecha con scroll interno */}
      <div className="flex-grow h-full">
        {/* Contenido dinámico del lado derecho */}
        <div className="flex flex-col items-center w-full px-4">
          {activeComponent === 'chart' && (
            <div className="w-full max-w-screen-lg overflow-x-auto">
              <Chart />
            </div>
          )}

          {activeComponent === 'list' && (
            <div className="w-full max-w-screen-lg overflow-x-auto">
              <TaskTable />
            </div>
          )}
        </div>

        {/* Footer con tu nombre y developer */}
        <footer className="w-full p-4 mt-8 print:block hidden">

          <div className='flex gap-4'>
            <div className="h-14 w-14 overflow-hidden">
              <img
                src={`${import.meta.env.BASE_URL}logo.svg`}
                alt="PPI"
                className="h-full w-full object-cover object-center scale-125 "
              />
            </div>
            <div>
              <p className="text-black font-bold">Yosef David Giraldo Salazar</p>
              <p>Developer</p>
            </div>

          </div>

        </footer>
      </div>

    </div>
  );
}

export default ProfilePage;

