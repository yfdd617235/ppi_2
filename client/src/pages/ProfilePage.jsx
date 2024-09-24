import React from 'react';
import TaskTable from '../components/TaskTable';
import PolarChart from '../components/PolarChart'; // Importa el componente PolarChart

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mx-3 lg:m-16">
      {/* Contenedor flex para los componentes */}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between gap-10 w-full ">
        {/* Mostrar la tabla de tareas */}
        <div className="w-full lg:w-2/3">
          <TaskTable />
        </div>

        {/* Mostrar el diagrama polar */}
        <div className="w-full items-center justify-center lg:w-1/3 border border-zinc-600">
          <PolarChart />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
