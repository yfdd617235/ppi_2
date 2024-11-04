import axios from './axios';

// Funciones para manejar solicitudes relacionadas con proyectos
export const getProjectsRequest = () => axios.get('/projects');

export const getProjectRequest = (id) => axios.get(`/projects/${id}`);

export const createProjectRequest = (project) => axios.post('/projects', project);

export const updateProjectRequest = (id, project) => axios.put(`/projects/${id}`, project);

export const deleteProjectRequest = (id) => axios.delete(`/projects/${id}`);
