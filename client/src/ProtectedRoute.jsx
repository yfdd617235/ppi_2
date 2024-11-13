// import { Navigate, Outlet } from "react-router-dom"
// import { useAuth } from "./context/AuthContext"

// function ProtectedRoute() {
//     const { loading, isAuthenticated } = useAuth()
//     console.log(loading, isAuthenticated)

//     if(loading) return <h1>Loading...</h1>
//     if (!loading && !isAuthenticated) return <Navigate to='/' replace />

//     return <Outlet />

// }

// export default ProtectedRoute

import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import { ADMIN, CUSTOMERS } from "./projects";

function ProtectedRoute({ adminOnly, customersOnly, generalOnly }) {
  const { loading, isAuthenticated, user } = useAuth();

  if (loading) return <h1>Loading...</h1>;

  // Verificar si el usuario está autenticado
  if (!isAuthenticated) return <Navigate to="/" replace />;

  // Verificar si es administrador cuando `adminOnly` está activado
  if (adminOnly && user.email !== ADMIN) return <Navigate to="/" replace />;

  // Verificar si el usuario está en `CUSTOMERS` cuando `customersOnly` está activado
  if (customersOnly && !CUSTOMERS.includes(user.email)) return <Navigate to="/" replace />;

  // Evitar que usuarios en `CUSTOMERS` accedan a rutas generales
  if (generalOnly && CUSTOMERS.includes(user.email)) return <Navigate to="/" replace />;

  return <Outlet />;
}

export default ProtectedRoute;


