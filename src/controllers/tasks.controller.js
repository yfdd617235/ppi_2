import Task from '../models/task.model.js';
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'crypto';


function renamefile(file) {
    try {
        if (!file) return null;

        // Genera un sufijo único
        const uniqueSuffix = crypto.randomBytes(6).toString('hex');
        const ext = path.extname(file.originalname);
        const baseName = path.basename(file.originalname, ext);
        const newFileName = `${baseName}-${uniqueSuffix}${ext}`;

        // Define la carpeta y la ruta del archivo
        const dir = path.join('.', 'uploads');
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        const newPath = path.join(dir, newFileName);
        fs.renameSync(file.path, newPath);
        return newFileName;
    } catch (error) {
        console.error("Error renaming file:", error);
        return null;
    }
}


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

        // Elimina el archivo asociado a la tarea
        if (task.file) {
            const filePath = path.join('.', 'uploads', task.file);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath); // Elimina el archivo
            }
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" })
    }
}


export const updateTask = async (req, res) => {
    try {
        // Primero obtenemos la tarea existente
        const existingTask = await Task.findById(req.params.id);
        if (!existingTask) return res.status(404).json({ message: 'Task not found' });

        const { title, description, date } = req.body;
        const file = req.file;

        // Preparamos los datos para la actualización
        const updateData = { title, description, date };

        // Si hay un nuevo archivo
        if (file) {
            // Elimina el archivo anterior si existe
            if (existingTask.file) {
                const oldFilePath = path.join('.', 'uploads', existingTask.file);
                if (fs.existsSync(oldFilePath)) {
                    fs.unlinkSync(oldFilePath); // Elimina el archivo antiguo
                }
            }

            // Renombra el nuevo archivo y lo asigna a la tarea
            updateData.file = renamefile(file);
        } else {
            // Si no hay archivo nuevo, mantenemos el archivo anterior
            updateData.file = existingTask.file;
        }

        // Actualiza la tarea con los datos nuevos
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, updateData, {
            new: true, // Devuelve la nueva tarea actualizada
        });

        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};