
import React from 'react';
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, ArcElement, Tooltip, Legend);

function PolarChart({ tasks }) {
    // Generador de colores
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

    // Agrupa las tareas por usuario
    const usernameTaskCounts = tasks.reduce((acc, task) => {
        const { username } = task;
        acc[username] = (acc[username] || 0) + 1;
        return acc;
    }, {});

    // Configuración de los datos para el gráfico
    const data = {
        labels: Object.keys(usernameTaskCounts),
        datasets: [
            {
                data: Object.values(usernameTaskCounts),
                backgroundColor: generateChartColors(Object.keys(usernameTaskCounts).length),
                borderColor: "none",
                borderWidth: 0,
            },
        ],
    };

    // Opciones del gráfico
    const options = {
        responsive: true,
        animation: {
            duration: 1500,
            easing: 'linear',
        },
        scales: {
            r: {
                min: 0,
                grid: {
                    color: "rgba(255, 255, 255, 0.2)",
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
                    display: true,
                    color: "white",
                    font: {
                        size: 14,
                    },
                    backdropColor: 'transparent',
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
                    size: 16,
                },
            },
        },
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <PolarArea data={data} options={options} />
        </div>
    );
}

export default PolarChart;
