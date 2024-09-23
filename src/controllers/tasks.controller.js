// import Task from '../models/task.model.js';
// import fs from 'node:fs';
// import path from 'node:path';
// import crypto from 'crypto';


// function renamefile(file) {
//     try {
//         if (!file) return null;

//         // Genera un sufijo único
//         const uniqueSuffix = crypto.randomBytes(6).toString('hex');
//         const ext = path.extname(file.originalname);
//         const baseName = path.basename(file.originalname, ext);
//         const newFileName = `${baseName}-${uniqueSuffix}${ext}`;

//         // Define la carpeta y la ruta del archivo
//         const dir = path.join('.', 'uploads');
//         if (!fs.existsSync(dir)) {
//             fs.mkdirSync(dir, { recursive: true });
//         }

//         const newPath = path.join(dir, newFileName);
//         fs.renameSync(file.path, newPath);
//         return newFileName;
//     } catch (error) {
//         console.error("Error renaming file:", error);
//         return null;
//     }
// }

// export const getTasks = async (req, res) => {
//     const { projectId } = req.query;  // Obtenemos `projectId` de los parámetros de consulta
//     try {
//         // const query = { user: req.user.id };
//         const query = { };
//         if (projectId) {
//             query.projectId = projectId;  // Añadimos `projectId` al filtro si está presente
//         }

//         const tasks = await Task.find(query).populate('user');
//         res.json(tasks);
//     } catch (error) {
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };


// export const createTask = async (req, res) => {
//     try {
//         const { title, description, date, projectId, status } = req.body; // Asegúrate de que `projectId` venga en el cuerpo de la solicitud
//         const file = req.file;

//         console.log("File received:", file);

//         const newTask = new Task({
//             projectId,  // Asigna el `projectId` al crear la tarea
//             title,
//             description,
//             date,
//             user: req.user.id,  // Se asocia la tarea con el usuario que la creó
//             file: file ? file.filename : null,
//             status
//         });

//         if (file) {
//             newTask.file = renamefile(file);  // Renombra y guarda la ruta del archivo
//         }

//         const savedTask = await newTask.save();
//         res.json(savedTask);
//         console.log(savedTask);
//     } catch (error) {
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };


// export const getTask = async (req, res) => {
//     try {
//         const task = await Task.findById(req.params.id).populate('user')
//         if (!task) return res.status(404).json({ message: 'Task not found' })
//         res.json(task)
//     } catch (error) {
//         return res.status(404).json({ message: "Task not found" })
//     }
// }

// export const deleteTask = async (req, res) => {
//     try {
//         const task = await Task.findByIdAndDelete(req.params.id)
//         if (!task) return res.status(404).json({ message: 'Task not found' })

//         // Elimina el archivo asociado a la tarea
//         if (task.file) {
//             const filePath = path.join('.', 'uploads', task.file);
//             if (fs.existsSync(filePath)) {
//                 fs.unlinkSync(filePath); // Elimina el archivo
//             }
//         }

//         return res.sendStatus(204);
//     } catch (error) {
//         return res.status(404).json({ message: "Task not found" })
//     }
// }

// export const updateTask = async (req, res) => {
//     try {
//         const existingTask = await Task.findById(req.params.id);
//         if (!existingTask) return res.status(404).json({ message: 'Task not found' });

//         const { title, description, date, projectId, status } = req.body;
//         const file = req.file;

//         const updateData = { title, description, date, projectId, status };  // Añadimos `projectId` a los datos actualizados

//         if (file) {
//             if (existingTask.file) {
//                 const oldFilePath = path.join('.', 'uploads', existingTask.file);
//                 if (fs.existsSync(oldFilePath)) {
//                     fs.unlinkSync(oldFilePath);
//                 }
//             }
//             updateData.file = renamefile(file);
//         } else {
//             updateData.file = existingTask.file;
//         }

//         const updatedTask = await Task.findByIdAndUpdate(req.params.id, updateData, {
//             new: true,
//         });

//         res.json(updatedTask);
//     } catch (error) {
//         console.error("Error updating task:", error);
//         return res.status(500).json({ message: "Something went wrong" });
//     }
// };

import Task from '../models/task.model.js';
import { uploadFileToCloudinary } from '../middlewares/multermiddleware.js';
import cloudinary from '../cloudinary.js';

export const getTasks = async (req, res) => {
    const { projectId } = req.query;
    try {
        const query = {};
        if (projectId) {
            query.projectId = projectId;
        }

        const tasks = await Task.find(query).populate('user');
        res.json(tasks);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const createTask = async (req, res) => {
    try {
        const { title, description, date, projectId, status } = req.body;
        const file = req.file;

        let fileUrl = null;
        let filePublicId = null;

        if (file) {
            const uploadResult = await uploadFileToCloudinary(file);
            fileUrl = uploadResult.secure_url;
            filePublicId = uploadResult.public_id;  // Guardamos el `public_id` del archivo en Cloudinary
        }

        const newTask = new Task({
            projectId,
            title,
            description,
            date,
            user: req.user.id,
            file: fileUrl,  // Guardamos la URL del archivo
            filePublicId,   // Guardamos el `public_id` para futuras eliminaciones
            status
        });

        const savedTask = await newTask.save();
        res.json(savedTask);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

export const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).populate('user');
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });

        // Si existe un archivo, lo eliminamos de Cloudinary
        if (task.filePublicId) {
            await cloudinary.uploader.destroy(task.filePublicId);
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Task not found" });
    }
};

export const updateTask = async (req, res) => {
    try {
        const existingTask = await Task.findById(req.params.id);
        if (!existingTask) return res.status(404).json({ message: 'Task not found' });

        const { title, description, date, projectId, status } = req.body;
        const file = req.file;

        const updateData = { title, description, date, projectId, status };

        if (file) {
            // Si hay un archivo existente, lo eliminamos de Cloudinary
            if (existingTask.filePublicId) {
                await cloudinary.uploader.destroy(existingTask.filePublicId);
            }

            // Subimos el nuevo archivo
            const uploadResult = await uploadFileToCloudinary(file);
            updateData.file = uploadResult.secure_url;
            updateData.filePublicId = uploadResult.public_id;
        } else {
            updateData.file = existingTask.file;
            updateData.filePublicId = existingTask.filePublicId;
        }

        const updatedTask = await Task.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        });

        res.json(updatedTask);
    } catch (error) {
        console.error("Error updating task:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
