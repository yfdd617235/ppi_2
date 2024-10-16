import React from 'react';

function TaskTableS({ tasks }) {
  return (
    <div className="overflow-x-auto max-w-full"> {/* Asegúrate de que el contenedor sea del 100% */}
            <table className="min-w-full text-left border-collapse">
                <thead>
                    <tr className="border-b">
                        <th className="text-white px-2 py-2 text-sm sm:text-xs">#</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Username</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Email</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Project ID</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Title</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Description</th>
                        <th className="text-white  px-2 py-1 text-sm sm:text-xs">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task._id} className="border-b border-zinc-800">
                            <td className="text-zinc-400 px-2 py-2 text-sm sm:text-xs">{index + 1}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.username}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.email}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.projectId}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.title}</td>
                            <td className="text-zinc-400 px-2 py-1 text-sm sm:text-xs">{task.description}</td>
                            <td className={`px-2 py-1 text-sm sm:text-xs ${task.status === "Sent" ? "text-zinc-400" : ""} 
                                ${task.status === "Rejected" ? "text-red-700" : ""} 
                                ${task.status === "Accepted" ? "text-green-600" : ""}`}>
                                {task.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
}

export default TaskTableS;
