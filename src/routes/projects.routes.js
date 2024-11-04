import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import { createProject, getProjects, getProject, updateProject, deleteProject } from '../controllers/projects.controller.js';
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createProjectSchema } from "../schemas/projects.schema.js";
import { upload } from "../middlewares/multermiddleware.js";

const router = Router();

// Configuración de multer para aceptar múltiples archivos en campos específicos
const uploadFields = upload.fields([
    { name: 'file1', maxCount: 1 },
    { name: 'file2', maxCount: 1 },
    { name: 'file3', maxCount: 1 }
]);

// Definición de las rutas del proyecto
router.get('/projects', authRequired, getProjects);
router.get('/projects/:id', authRequired, getProject);
router.post('/projects', authRequired, uploadFields, validateSchema(createProjectSchema), createProject);
router.delete('/projects/:id', authRequired, deleteProject);
router.put('/projects/:id', authRequired, uploadFields, updateProject);

export default router;
