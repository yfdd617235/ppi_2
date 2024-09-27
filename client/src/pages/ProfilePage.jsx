import React from 'react';
import TaskTable from '../components/TaskTable';
import Chart from '../components/Chart'; // Importa el componente Chart

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-3 py-20">
      <h2 className="font-bold">Profile Status</h2> <br />
      {/* Contenedor flex para los componentes */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-10 w-full">
        {/* Contenedor para la tabla de tareas con scroll */}
        <div className="w-full lg:w-2/3 h-[500px] overflow-y-scroll">
          <TaskTable />
        </div>

        {/* Mostrar el gráfico */}
        <div className="w-full items-center justify-center lg:w-1/2 border border-zinc-600">
          <Chart />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
