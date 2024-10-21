// 
import React, { useState, useEffect, useCallback } from 'react';
import TaskTableS from '../components/TaskTableS';
import BarChartS from '../components/BarChartS';
import PolarChartS from '../components/PolarChartS';
import UploadHistoryChart from '../components/UploadHistoryChart';
import { useTasks } from '../context/TasksContext';
import { useAuth } from '../context/AuthContext';
import { projectList } from '../projects';
import Select from 'react-select';
import {ADMIN} from '../projects';

function ProjectReport() {
  const { tasks, getTasks } = useTasks();
  const { user } = useAuth();
  const [selectedProjects, setSelectedProjects] = useState([]);
  const [selectedUsernames, setSelectedUsernames] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [usernamesOptions, setUsernamesOptions] = useState([]);
  

  const fetchTasks = useCallback(async () => {
    await getTasks();
    console.log(tasks);
  }, [getTasks]);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (user?.email === ADMIN) {
      const usernames = [...new Set(tasks.map((task) => task.username))];
      setUsernamesOptions(usernames);
    }
  }, [tasks, user]);

  useEffect(() => {
    let filtered = [];

    if (user?.email === ADMIN) {
      filtered = tasks.filter(
        (task) =>
          (selectedUsernames.length === 0 || selectedUsernames.includes(task.username)) &&
          (selectedProjects.length === 0 || selectedProjects.includes(task.projectId))
      );
    } else {
      filtered = tasks.filter(
        (task) => task.user.email === user.email && (selectedProjects.length === 0 || selectedProjects.includes(task.projectId))
      );
    }

    setFilteredTasks(filtered);
  }, [tasks, user, selectedUsernames, selectedProjects]);

  const projectOptions = projectList.map((projectId) => ({
    value: projectId,
    label: projectId,
  }));

  const usernameOptions = usernamesOptions.map((username) => ({
    value: username,
    label: username,
  }));

  const calculateProgress = () => {
    const totalAcceptedTasks = user?.email !== ADMIN || selectedUsernames.length > 0 ? 5 : 89;

    return selectedProjects.map((projectId) => {
      const projectTasks = filteredTasks.filter((task) => task.projectId === projectId);
      const acceptedTasks = projectTasks.filter((task) => task.status === 'Accepted');

      const progress = (acceptedTasks.length / totalAcceptedTasks) * 100;
      return Math.min(progress, 100); // Asegurar que el progreso no exceda 100
    });
  };

  const progressData = calculateProgress();
  const averageProgress = progressData.length > 0 ? (progressData.reduce((total, progress) => total + progress, 0) / progressData.length).toFixed(2) : 0;

  const barChartData = {
    labels: selectedProjects,
    datasets: [
      {
        label: 'Project Progress (%)',
        data: progressData,
        backgroundColor: 'rgba(34, 197, 94, 0.3)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
      },
    ],
  };

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
      color: 'white',
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

  return (
    <div className="w-full h-full min-h-screen flex flex-col  items-center py- gap-y-5 lg:px-10 print:justify-start print:items-start">
      <div className="mb-4 lg:w-1/2">
        <Select
          isMulti
          options={projectOptions}
          value={selectedProjects.map((project) => ({ value: project, label: project }))}
          onChange={(selected) => setSelectedProjects(selected.map((option) => option.value))}
          placeholder="Select Projects..."
          styles={customStyles}
        />
        {user?.email === ADMIN && (
          <Select
            className="print:hidden"
            isMulti
            options={usernameOptions}
            value={selectedUsernames.map((username) => ({ value: username, label: username }))}
            onChange={(selected) => setSelectedUsernames(selected.map((option) => option.value))}
            placeholder="Select Usernames..."
            styles={customStyles}
          />
        )}
        <button
          onClick={() => window.print()}
          className="mb-4 px-2 py-1 text-sm bg-zinc-900 text-white border rounded-md print:hidden">
          Print Report
        </button>
      </div>



      {selectedProjects.length > 0 && (

        <div className="w-full flex flex-wrap justify-between items-center bg-zinc-950 border border-zinc-700 rounded-md gap-20 p-3">

          <div className="chart flex-1 min-w-[250px] lg:w-1/4">
            <BarChartS data={barChartData} averageProgress={averageProgress} />
          </div>
          <div className="chart flex-1 min-w-[250px] lg:w-1/4">
            <PolarChartS tasks={filteredTasks} />
          </div>
          <div className="chart flex-1 min-w-[250px] lg:w-1/4">
            <UploadHistoryChart tasks={filteredTasks} />
          </div>
        </div>

      )}
      {selectedProjects.length > 0 && (
        <div className="w-full bg-zinc-950 border border-zinc-700 rounded-md my-5">
          <TaskTableS tasks={filteredTasks} />
        </div>
      )}
    </div>
  );
}

export default ProjectReport;
