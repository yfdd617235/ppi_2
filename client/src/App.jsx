import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import TasksPage from "./pages/TasksPage";
import TaskFormPage from "./pages/TaskFormPage";
import ProfilePage from "./pages/ProfilePage";
import Homepage from "./pages/Homepage";
import ProtectedRoute from "./ProtectedRoute";
import { TaskProvider } from "./context/TasksContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <BrowserRouter>
        {/* <BrowserRouter basename="/ppi_2"> */}
        <main className="container mx-auto px-3 lg:px-25 pt-20 pb-20">
        <NavBar/>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<h1><LoginPage /></h1>} />
            <Route path="/register" element={<h1><RegisterPage /></h1>} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/add-task" element={<TaskFormPage />} />
              <Route path="/tasks/:id" element={<TaskFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
          </Routes>
        </main>
        </BrowserRouter>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
