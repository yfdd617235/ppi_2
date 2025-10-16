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
import TradingPage from "./pages/TradingPage";
import ConsultingPage from "./pages/ConsultingPage";
import ProjectsBankPage from "./pages/ProjectsBankPage";
import EducationPage from "./pages/EducationPage";
import './i18n/i18n';



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
                <Route path="/trading" element={<h1><TradingPage /></h1>} />
                <Route path="/consulting" element={<h1><ConsultingPage /></h1>}/>
                <Route path="/projectsbank" element={<h1><ProjectsBankPage /></h1>}/>
                <Route path="/education" element={<h1><EducationPage/></h1>}/>
                
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
            <Footer/>
          </Router>
        </ProjectProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
