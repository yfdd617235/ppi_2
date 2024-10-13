import { useState, useEffect, useCallback } from 'react';
import { PolarArea } from 'react-chartjs-2';
import { useTasks } from '../context/TasksContext';
import { useAuth } from '../context/AuthContext';
import { projectList } from '../projects';
import Select from 'react-select';
import { Chart as ChartJS, RadialLinearScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

ChartJS.register(RadialLinearScale, PointElement, ArcElement, Tooltip, Legend);

function PolarChart() {
    const { tasks, getTasks } = useTasks();
    const { user } = useAuth();
    const [selectedProjects, setSelectedProjects] = useState([]); // Proyectos seleccionados
    const [loading, setLoading] = useState(true);
    const [usernamesOptions, setUsernamesOptions] = useState([]);
    const [usernameTaskCounts, setUsernameTaskCounts] = useState([]);

    const fetchTasks = useCallback(async () => {
        await getTasks();
        setLoading(false);
        console.log(tasks);
    }, []);

    useEffect(() => {
        fetchTasks();
    }, []);

    useEffect(() => {
        // Actualizamos el estado con los usernames disponibles cuando se seleccionan proyectos
        if (selectedProjects.length > 0) {
            const filteredTasks = tasks.filter(task => selectedProjects.includes(task.projectId));
            const usernames = [...new Set(filteredTasks.map(task => task.username))];
            setUsernamesOptions(usernames);
        } else {
            setUsernamesOptions([]);
        }
    }, [tasks, selectedProjects]);

    useEffect(() => {
        // Si ya se han seleccionado proyectos y se han filtrado usernames, calculamos el número de tareas
        if (selectedProjects.length > 0) {
            const filteredTasks = tasks.filter(task => selectedProjects.includes(task.projectId));
            const counts = usernamesOptions.map(username => ({
                username,
                count: filteredTasks.filter(task => task.username === username).length,
            }));
            setUsernameTaskCounts(counts);
        } else {
            setUsernameTaskCounts([]);
        }
    }, [tasks, selectedProjects, usernamesOptions]);

    // Función para generar colores aleatorios
    // const generateColors = (count) => {
    //     return Array.from({ length: count }, () =>
    //         `rgba(${Math.floor(Math.random() * 50)}, ${Math.floor(150 + Math.random() * 105)}, ${Math.floor(Math.random() * 50)}, 0.5)`
    //     );
    // };

    const generateChartColors = (count) => {
        const chartColors = [
            'rgba(255, 99, 132, 0.5)',   // Rojo
            'rgba(255, 159, 64, 0.5)',   // Naranja
            'rgba(255, 205, 86, 0.5)',   // Amarillo
            'rgba(75, 192, 192, 0.5)',   // Verde
            'rgba(54, 162, 235, 0.5)',   // Azul
        ];

        return Array.from({ length: count }, (_, i) => chartColors[i % chartColors.length]);
    };



    const data = {
        labels: usernameTaskCounts.map(item => item.username), // Lista de usernames
        datasets: [
            {
                //label: 'Tasks per Username',
                data: usernameTaskCounts.map(item => item.count), // Cantidad de tareas por username
                backgroundColor: generateChartColors(usernameTaskCounts.length),
                borderColor: "none", // Bordes con opacidad completa
                borderWidth: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        animation: {
            duration: 3000, // Duración de la animación en milisegundos
            easing: 'easeOutQuad', // Tipo de easing (puedes cambiarlo)
        },
        scales: {
            r: {
                min: 0,
                // max: 6,
                grid: {
                    color: "rgba(255, 255, 255, 0.2)", // Color de los radios
                },
                pointLabels: {
                    display: true,
                    centerPointLabels: true,
                    color: "white",
                    font: {
                        size: 9,
                    },
                },
                ticks: {
                    stepSize: 1,
                    display: true, // Muestra los valores en la escala de los radios
                    color: "white", // Color de los ticks (valores de la escala)
                    font: {
                        size: 14, // Tamaño de los ticks
                    },
                    backdropColor: 'transparent', // Fondo de los ticks transparente
                },
            },
        },
        plugins: {
            legend: {
                position: 'bottom',
                display: false,
            },
            title: {
                display: true,
                text: 'Tasks published by Provider',
                color: "white",
                font: {
                    size: 16, // Tamaño de los ticks
                },
            },
        },
    };

    const projectOptions = projectList.map(projectId => ({
        value: projectId,
        label: projectId,
    }));

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'black',
            color: 'white',
            border: '1px solid white',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid white',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? 'white' : 'black',
            color: state.isSelected ? 'black' : 'white',
            '&:hover': {
                backgroundColor: 'gray',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: 'white',
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: 'white',
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: 'white',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
            },
        }),
    };

    if (loading) return (
        <div className="flex items-center justify-center h-screen">
            <ArrowPathIcon className="animate-spin h-5 w-5" />
            <span className="ml-2">Loading tasks...</span>
        </div>
    );

    return (
        <div className=''>
            <Select
                isMulti
                options={projectOptions}
                value={selectedProjects.map((project) => ({ value: project, label: project }))}
                onChange={(selected) => setSelectedProjects(selected.map((option) => option.value))}
                className="mb-4 text-xs print:hidden"
                classNamePrefix="custom-select"
                placeholder="Select Projects..."
                styles={customStyles}
            />
            <PolarArea data={data} options={options} />
        </div>
    );
}

export default PolarChart;
