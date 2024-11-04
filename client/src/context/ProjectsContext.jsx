import { useContext, useState, createContext } from "react";
import { 
    createProjectRequest, 
    getProjectsRequest, 
    deleteProjectRequest, 
    getProjectRequest,
    updateProjectRequest
} from "../api/projects"; // Asegúrate de que las solicitudes estén en el archivo correcto

const ProjectContext = createContext();

export const useProjects = () => {
    const context = useContext(ProjectContext);
    if (!context) {
        throw new Error("useProjects must be used within a ProjectProvider");
    }
    return context;
};

export function ProjectProvider({ children }) {
    const [projects, setProjects] = useState([]);

    const getProjects = async () => {
        try {
            const res = await getProjectsRequest();
            setProjects(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const createProject = async (project) => {
        try {
            const res = await createProjectRequest(project);
            setProjects([...projects, res.data]); // Agrega el nuevo proyecto a la lista
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const deleteProject = async (id) => {
        try {
            const res = await deleteProjectRequest(id);
            if (res.status === 204) {
                setProjects(projects.filter(project => project._id !== id));
            }
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const getProject = async (id) => {
        try {
            const res = await getProjectRequest(id);
            return res.data;
        } catch (error) {
            console.error(error);
        }
    };

    const updateProject = async (id, project) => {
        try {
            const res = await updateProjectRequest(id, project);
            setProjects(projects.map(p => (p._id === id ? res.data : p))); // Actualiza el proyecto en la lista
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <ProjectContext.Provider
            value={{
                projects,
                createProject,
                getProjects,
                deleteProject,
                getProject,
                updateProject,
            }}>
            {children}
        </ProjectContext.Provider>
    );
}
