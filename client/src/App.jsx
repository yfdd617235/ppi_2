// import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Cambia BrowserRouter por HashRouter
// import { AuthProvider } from "./context/AuthContext";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import TasksPage from "./pages/TasksPage";
// import TaskFormPage from "./pages/TaskFormPage";
// import ProfilePage from "./pages/ProfilePage";
// import ProjectFormPage from "./pages/ProjectFormPage";
// import ProjectsPage from "./pages/ProjectsPage";
// import HomePage from "./pages/HomePage";
// import ProtectedRoute from "./ProtectedRoute";
// import { TaskProvider } from "./context/TasksContext";
// import { ProjectProvider } from './context/ProjectsContext';
// import NavBar from "./components/NavBar";

// function App() {
//   return (
//     <AuthProvider>
//       <TaskProvider>
//         <ProjectProvider>
//           <Router> {/* Cambiado a HashRouter */}
//             {/* <main className="container mx-auto px-3 lg:px-25 pt-20 pb-20"> */}
//             <main className=" mx-auto">
//               <NavBar />
//               <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/login" element={<h1><LoginPage /></h1>} />
//                 <Route element={<ProtectedRoute />}>
//                   <Route path="/register" element={<h1><RegisterPage /></h1>} />
//                   <Route path="/tasks" element={<TasksPage />} />
//                   <Route path="/add-task" element={<TaskFormPage />} />
//                   <Route path="/tasks/:id" element={<TaskFormPage />} />
//                   <Route path="/projects" element={<ProjectsPage />} />
//                   <Route path="/add-project" element={<ProjectFormPage />} />
//                   <Route path="/projects/:id" element={<ProjectFormPage />} />
//                   <Route path="/profile" element={<ProfilePage />} />
//                 </Route>
//                 <Route path="*" element={<h1>404 - Page Not Found</h1>} />
//               </Routes>
//             </main>
//           </Router>
//         </ProjectProvider>
//       </TaskProvider>
//     </AuthProvider>
//   );
// }

// export default App;

import { HashRouter as Router, Routes, Route } from "react-router-dom"; 
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import ProjectFormPage from "./pages/ProjectFormPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectsView from "./pages/ProjectsView"; // Asegúrate de que esta página existe
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import { ProjectProvider } from './context/ProjectsContext';
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <ProjectProvider>
          <Router>
            <main className=" mx-auto">
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<h1><LoginPage /></h1>} />
                
                {/* Rutas protegidas generales, accesibles solo para usuarios autenticados que no sean CUSTOMERS */}
                <Route element={<ProtectedRoute generalOnly={true} />}>
                  
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Route>
                
                {/* Ruta protegida solo para el administrador */}
                <Route element={<ProtectedRoute adminOnly={true} />}>
                  <Route path="/projects" element={<ProjectsPage />} />
                  <Route path="/register" element={<h1><RegisterPage /></h1>} />
                  <Route path="/add-project" element={<ProjectFormPage />} />
                  <Route path="/projects/:id" element={<ProjectFormPage />} />
                </Route>

                {/* Ruta protegida solo para usuarios en el arreglo CUSTOMERS */}
                <Route element={<ProtectedRoute customersOnly={true} />}>
                  <Route path="/projectsview" element={<ProjectsView />} />
                </Route>

                <Route path="*" element={<h1>404 - Page Not Found</h1>} />
              </Routes>
            </main>
          </Router>
        </ProjectProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
