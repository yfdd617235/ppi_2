import Task from '../models/task.model.js'
import fs from 'fs'

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({
            user: req.user.id
        }).populate('user') // trae los datos del usuario junto con las tareas
        res.json(tasks)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description, date } = req.body;

        const file = req.file;
        console.log("File received:", file)

        const newTask = new Task({
            title,
            description,
            date,
            user: req.user.id,
            file: file ? file.filename : null
        });

        function renamefile(file) {
            if (!file) return null;
            const newPath = `./uploads\\${file.originalname}`;
            fs.renameSync(file.path, newPath)
            return newPath
        }

        if (file) {
            newTask.file = renamefile(file); // Guarda la nueva ruta del archivo renombrado
        }

        const savedTask = await newTask.save();
        res.json(savedTask);
        console.log(savedTask)
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" })
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user')
        if (!task) return res.status(404).json({ message: 'Task not found' })
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "Task not found" })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) return res.status(404).json({ message: 'Task not found' })
        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" })
    }
}


export const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true, //para que devuelva la nueva tarea y no la anterior (mongo)
        })
        if (!task) return res.status(404).json({ message: 'Task not found' })
        res.json(task)
    } catch (error) {
        return res.status(404).json({ message: "Task not found" })
    }
}