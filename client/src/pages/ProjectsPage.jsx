import { useEffect, useState } from "react";
import { useProjects } from "../context/ProjectsContext";
import { useAuth } from "../context/AuthContext";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { ArrowPathIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);

function ProjectTable() {
    const { projects, getProjects, deleteProject } = useProjects();
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
        <div className="mt-20 mx-6 md:mx-16">
            <Link
                to="/add-project"
                className="text-green-600 px-2 py-1 sm:px-2 rounded-sm text-sm sm:text-base border border-zinc-800 my-4">
                Add Project
            </Link> <br /><br />
            
            
            <div className="overflow-x-auto max-w-full bg-zinc-950 border border-zinc-800 rounded-lg">
                <table className="min-w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b text-black">
                            <th className="text-white px-2 py-2 text-sm sm:text-xs">#</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Project ID</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Description</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Start Date</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">End Date</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Attachments</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Status</th>
                            <th className="text-white px-2 py-1 text-sm sm:text-xs">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr key={project._id} className="border-b border-zinc-700">
                                <td className="text-zinc-400 px-2 py-2 text-sm sm:text-xs">{index + 1}</td>
                                <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.projectId}</td>
                                <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{project.description}</td>
                                <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">
                                    {dayjs(project.startDate).format("DD-MMM-YYYY")}
                                </td>
                                <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">
                                    {dayjs(project.endDate).format("DD-MMM-YYYY")}
                                </td>
                                <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs space-y-2">
                                    {project.file1 && (
                                        <a href={project.file1} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Download File 1
                                        </a>
                                    )}
                                    {project.file2 && (
                                        <a href={project.file2} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Download File 2
                                        </a>
                                    )}
                                    {project.file3 && (
                                        <a href={project.file3} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                                            Download File 3
                                        </a>
                                    )}
                                </td>
                                <td className={` 
                    ${project.status === "Open" ? "text-zinc-400" : ""} 
                    ${project.status === "In Progress" ? "text-blue-500" : ""} 
                    ${project.status === "Completed" ? "text-green-600" : ""} px-2 py-1 text-sm sm:text-xs`}
                                >
                                    {project.status}</td>
                                <td className="px-2 py-1 text-sm sm:text-xs flex space-x-2">
                                    <Link to={`/projects/${project._id}`} className="text-zinc-400 hover:text-blue-700">
                                        <PencilIcon className="h-5 w-5" />
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(project._id)}
                                        className="text-zinc-400 hover:text-red-700"
                                    >
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default ProjectTable;
