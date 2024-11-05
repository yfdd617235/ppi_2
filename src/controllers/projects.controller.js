import Project from '../models/project.model.js';
import { uploadFileToCloudinary } from '../middlewares/multermiddleware.js';
import cloudinary from '../cloudinary.js';
import { ADMIN_EMAIL } from '../config.js';

// Obtener todos los proyectos, con opción de filtrar por projectId
export const getProjects = async (req, res) => {
    const { projectId } = req.query;
    try {
        const query = {};
        if (projectId) {
            query._id = projectId; // Cambiar a buscar por el ID del proyecto
        }

        const projects = await Project.find(query).populate('user');
        res.json(projects);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

// Crear un nuevo proyecto
export const createProject = async (req, res) => {
    try {
        const { projectId, description, startDate, endDate, status, email, username } = req.body;
        const files = req.files; // Obtener todos los archivos

        let fileUrls = [null, null, null];
        let filePublicIds = [null, null, null];

        // Manejar la carga de los tres archivos
        for (let i = 0; i < 3; i++) {
            const file = files[`file${i + 1}`]?.[0]; // Obtén el archivo del campo correspondiente
            if (file) {
                const uploadResult = await uploadFileToCloudinary(file);
                fileUrls[i] = uploadResult.secure_url;
                filePublicIds[i] = uploadResult.public_id;  // Guardamos el `public_id` del archivo en Cloudinary
            }
        }

        const newProject = new Project({
            projectId,
            description,
            startDate,
            endDate,
            user: req.user.id,
            username,
            email,
            file1: fileUrls[0],
            file1PublicId: filePublicIds[0],
            file2: fileUrls[1],
            file2PublicId: filePublicIds[1],
            file3: fileUrls[2],
            file3PublicId: filePublicIds[2],
            status
        });

        const savedProject = await newProject.save();
        res.json(savedProject);
    } catch (error) {
        return res.status(500).json({ message: "Something went wrong" });
    }
};

// Obtener un proyecto por ID
export const getProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id).populate('user');
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (error) {
        return res.status(404).json({ message: "Project not found" });
    }
};

// Eliminar un proyecto
export const deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        // Si existen archivos, los eliminamos de Cloudinary
        for (let i = 1; i <= 3; i++) {
            const publicId = project[`file${i}PublicId`];
            if (publicId) {
                try {
                    const result = await cloudinary.uploader.destroy(publicId, { resource_type: "Raw" });
                    console.log("Cloudinary destroy result:", result);

                    if (result.result !== 'ok') {
                        const fallbackResult = await cloudinary.uploader.destroy(publicId);
                        console.log("Fallback Cloudinary destroy result:", fallbackResult);
                    }
                } catch (error) {
                    console.error("Error deleting file from Cloudinary:", error);
                }
            }
        }

        return res.sendStatus(204);
    } catch (error) {
        return res.status(404).json({ message: "Project not found" });
    }
};

// Actualizar un proyecto
export const updateProject = async (req, res) => {
    try {
        const existingProject = await Project.findById(req.params.id);
        if (!existingProject) return res.status(404).json({ message: 'Project not found' });

        const { projectId, description, startDate, endDate, status } = req.body;
        const files = req.files; // Obtener los archivos

        const updateData = { projectId, description, startDate, endDate, status };

        // Actualiza los archivos
        for (let i = 0; i < 3; i++) {
            const file = files[`file${i + 1}`]?.[0]; // Obtener el archivo correspondiente
            if (file) {
                // Si hay un archivo existente, lo eliminamos de Cloudinary
                if (existingProject[`file${i + 1}PublicId`]) {
                    await cloudinary.uploader.destroy(existingProject[`file${i + 1}PublicId`]);
                }

                // Subimos el nuevo archivo
                const uploadResult = await uploadFileToCloudinary(file);
                updateData[`file${i + 1}`] = uploadResult.secure_url;
                updateData[`file${i + 1}PublicId`] = uploadResult.public_id;
            } else {
                // Mantener el archivo existente si no hay un nuevo archivo
                updateData[`file${i + 1}`] = existingProject[`file${i + 1}`];
                updateData[`file${i + 1}PublicId`] = existingProject[`file${i + 1}PublicId`];
            }
        }

        const updatedProject = await Project.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        });

        res.json(updatedProject);
    } catch (error) {
        console.error("Error updating project:", error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};
