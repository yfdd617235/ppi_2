import { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectsContext"; // Asegúrate de tener el contexto para proyectos
import { useAuth } from "../context/AuthContext";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ArrowPathIcon } from '@heroicons/react/24/outline'; // Importar el ícono de carga
import { Link } from 'react-router-dom';
import { ADMIN } from '../projects';

dayjs.extend(utc);
dayjs.extend(timezone);

function ProjectTable() {
    const { projects, getProjects, deleteProject } = useProjects(); // Contexto para proyectos
    const { user } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            await getProjects();
            setLoading(false);
            console.log(projects);
        }
        fetchProjects();
    }, []);

    const filteredProjects = loading
        ? []
        : user?.email === ADMIN
            ? projects
            : projects.filter(project => project.user.email === user.email);

    const handleDelete = (projectId) => {
        const confirmed = window.confirm("Are you sure you want to delete this project?");
        if (confirmed) {
            deleteProject(projectId);
        }
    };

    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <ArrowPathIcon className="animate-spin h-5 w-5" />
            <span className="ml-2">Loading projects...</span>
        </div>
    );

    return (
        <div className="overflow-x-auto max-w-full"> {/* Asegúrate de que el contenedor sea del 100% */}
            <table className="min-w-full text-left border-collapse">
                <thead>
                    <tr className="border-b text-black">
                        <th className="text-white px-2 py-2 text-sm sm:text-xs">#</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Username</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Email</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Project ID</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Description</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Status</th>
                        <th className="text-white px-2 py-1 text-sm sm:text-xs">Actions</th> {/* Nueva columna para acciones */}
                    </tr>
                </thead>
                <tbody>
                    {filteredProjects.map((project, index) => (
                        <tr key={project._id} className="border-b border-zinc-700">
                            <td className="text-zinc-400 px-2 py-2 text-sm sm:text-xs">{index + 1}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.username}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.email}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.projectId}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.description}</td>
                            <td className={`px-2 py-1 text-sm sm:text-xs ${project.status === "Open" ? "text-blue-500" : ""} 
                                ${project.status === "In Progress" ? "text-yellow-500" : ""} 
                                ${project.status === "Completed" ? "text-green-600" : ""}`}>
                                {project.status}
                            </td>
                            <td className="px-2 py-1 text-sm sm:text-xs">
                                <Link to={`/projects/edit/${project._id}`} className="text-blue-500 hover:text-blue-700 mr-2">
                                    Edit
                                </Link>
                                <button 
                                    onClick={() => handleDelete(project._id)} 
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProjectTable;
