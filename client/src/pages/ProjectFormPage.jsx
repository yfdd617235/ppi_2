import { useForm } from 'react-hook-form';
import { useProjects } from '../context/ProjectsContext';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import { useAuth } from '../context/AuthContext'; 
import { ArrowPathIcon } from '@heroicons/react/24/outline'; 
import { ADMIN } from '../projects';

dayjs.extend(utc);

// Importa la lista de proyectos
import { projectList } from '../projects';

function ProjectFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createProject, getProject, updateProject } = useProjects();
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('Open'); // Estado inicial para el status

  useEffect(() => {
    async function loadProject() {
      if (params.id) {
        const project = await getProject(params.id);
        console.log(project);
        setValue('projectId', project.projectId);
        setValue('description', project.description);
        setValue('startDate', dayjs(project.startDate).format('YYYY-MM-DD')); // Asegúrate de formatear correctamente la fecha
        setValue('endDate', dayjs(project.endDate).format('YYYY-MM-DD'));
        setStatus(project.status || 'Open'); // Cargar el status actual del proyecto
      }
    }
    loadProject();
  }, [params.id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('projectId', data.projectId);
    formData.append('description', data.description);
    formData.append('startDate', dayjs.utc(data.startDate).format());
    formData.append('endDate', dayjs.utc(data.endDate).format());
    formData.append('status', status);
    formData.append('username', user.username); 
    formData.append('email', user.email);

    // Añadir archivos si existen
    for (let i = 1; i <= 3; i++) {
      if (data[`file${i}`]) {
        formData.append(`file${i}`, data[`file${i}`][0]);
      }
    }

    try {
      if (params.id) {
        await updateProject(params.id, formData);
      } else {
        await createProject(formData);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
      navigate('/projects'); // Redirige a la lista de proyectos después de guardar
    }
  });

  return (
    <div className='m-3 flex h-[calc(100vh-100px)] items-center justify-center'>
      <div className='max-w-md p-10 rounded-md border border-zinc-500'>
        <h1 className='text-xl'>{params.id ? 'Edit Project' : 'Add Project'}</h1>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <input
            type="text"
            placeholder='Project ID'
            {...register('projectId', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            autoFocus
          />
          <textarea
            rows="3"
            placeholder='Description'
            {...register('description', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          ></textarea>
          
          <input
            type="date"
            {...register('startDate', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          <input
            type="date"
            {...register('endDate', { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
          />
          
          {/* Inputs para los archivos */}
          {[...Array(3)].map((_, index) => (
            <input
              key={index}
              type="file"
              {...register(`file${index + 1}`)}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            />
          ))}

          {/* Mostrar el campo de status solo si el usuario es "ADMIN" */}
          {user.email === ADMIN && (
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          )}

          <div className='flex justify-between'>
            <button 
              type='submit'
              className='flex items-center justify-center text-green-600 px-3 py-1 rounded-sm border border-zinc-800'
            >
              {loading ? (
                <ArrowPathIcon className="animate-spin h-5 w-5 text-green-600" />
              ) : (
                "Save"
              )}
            </button>
            <Link 
              to="/projects"
              className=' px-3 py-1 rounded-sm border border-zinc-800'
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectFormPage;
