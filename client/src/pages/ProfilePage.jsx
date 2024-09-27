// import React from 'react';
// import TaskTable from '../components/TaskTable';
// import Chart from '../components/Chart'; // Importa el componente Chart

// function ProfilePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen mx-3 py-20">
//       <h2 className="font-bold">Profile Status</h2> <br />
//       {/* Contenedor flex para los componentes */}
//       <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-10 w-full">
//         {/* Contenedor para la tabla de tareas con scroll */}
//         <div className="w-full lg:w-2/3 h-[5000px] overflow-y-scroll">
//           <TaskTable />
//         </div>

//         {/* Mostrar el gráfico */}
//         <div className="w-full items-center justify-center lg:w-1/2 border border-zinc-600">
//           <Chart />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfilePage;
// import React from 'react';
// import TaskTable from '../components/TaskTable';
// import Chart from '../components/Chart'; // Importa el componente Chart

// function ProfilePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen mx-3 py-20">
//       <h2 className="font-bold">Profile Status</h2> <br />
//       {/* Contenedor flex para los componentes */}
//       <div className="flex flex-col lg:flex-row lg:justify-between gap-10 w-full">
//         {/* Contenedor para la tabla de tareas con scroll, sin altura fija */}
//         <div className="w-full lg:w-2/3 overflow-y-auto">
//           <TaskTable />
//         </div>

//         {/* Mostrar el gráfico, siempre visible */}
//         <div className="w-full lg:w-1/3 lg:sticky lg:top-20 items-center justify-center ">
//           <Chart />
//         </div>
//       </div><br /><br />

//     </div>
//   );
// }

// export default ProfilePage;

// import React from 'react';
// import TaskTable from '../components/TaskTable';
// import Chart from '../components/Chart'; // Importa el componente Chart

// function ProfilePage() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen mx-3 py-20">
//       <h2 className="font-bold">Profile Status</h2> <br />
//       <div className="flex flex-col lg:flex-row lg:justify-between gap-10 w-full">
//         {/* Contenedor para la tabla de tareas con scroll, sin altura fija */}
//         <div
//           className="w-full lg:w-2/3 overflow-y-auto"
//           style={{ pageBreakBefore: 'always' }} // Aplica un salto de página antes de este div
//         >
//           <TaskTable />
//         </div>

//         {/* Mostrar el gráfico, siempre visible */}
//         <div
//           className="w-full lg:w-1/3 lg:sticky lg:top-20 items-center justify-center"
//           style={{ pageBreakBefore: 'always' }} // Aplica un salto de página antes de este div
//         >
//           <Chart />
//         </div>
//       </div>
//       <br /><br />
//     </div>
//   );
// }

// export default ProfilePage;

import React from 'react';
import TaskTable from '../components/TaskTable';
import Chart from '../components/Chart'; // Importa el componente Chart

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-3 py-20">
      <style>
        {`
          @media print {
            .print-header, .print-footer {
              display: block;
              width: 100%;
              text-align: center;
              position: fixed;
            }
            .print-header {
              top: 0;
             
              background-color: #f8f8f8;
              border-bottom: 1px solid #000;
            }
            .print-header img {
              max-width: 100px;
              height: 40px;
              
            }
            .print-footer {
              bottom: 0;
              padding: 2px;
              background-color: white;
              border-top: 1px solid #000;
            }
            @page {
              margin: 5mm 5mm; /* Ajusta los márgenes de impresión si es necesario */
            }
          }

          @media screen {
            .print-header, .print-footer {
              display: none;
            }
          }
        `}
      </style>

      <h2 className="font-bold" >Profile Status</h2> <br />
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10 w-full" >
        {/* Contenedor para la tabla de tareas con scroll, sin altura fija */}

        <div
          className="w-full lg:w-2/3 overflow-y-auto"
          style={{
            
            marginTop: '50px' // Ajusta este valor para aumentar el margen superior
          }}
        >
          <TaskTable />
        </div>

        {/* Mostrar el gráfico, siempre visible */}
        <div
          className="w-full lg:w-1/3 lg:sticky lg:top-20 items-center justify-center"
          style={{ pageBreakBefore: 'always' }} // Aplica un salto de página antes de este div
        >
          <Chart />
        </div>
      </div>
      <br /><br />

      {/* Encabezado que solo se muestra en la impresión */}
      {/* Encabezado que solo se muestra en la impresión */}
      <div className="print-header flex items-center gap-4">
      <img src={`${import.meta.env.BASE_URL}logoT.png`} alt="Logo" className="w-12 h-12" />
      <p className="text-lg font-bold text-black">Panamerican Private Investments</p>
      
      </div>




      {/* Pie de página que solo se muestra en la impresión */}
      <div className="print-footer text-black">
        <p>Yosef David Giraldo Salazar</p>
        {/* <p>Development Manager</p> */}
      </div>
    </div>
  );
}

export default ProfilePage;
