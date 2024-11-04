import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';
import path from 'path';  // Para manejar nombres de archivo

// Configuración de almacenamiento en memoria para los archivos subidos
const storage = multer.memoryStorage();  
export const upload = multer({ storage });

// Función para subir un archivo a Cloudinary
export const uploadFileToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    // Obtener el nombre original del archivo sin la extensión
    const originalFileName = path.parse(file.originalname).name;
    const sanitizedFileName = sanitizeFileName(originalFileName);  // Sanear el nombre del archivo
    const uniqueSuffix = Date.now();  // Añade un sufijo único basado en el timestamp

    // Crear el stream de subida a Cloudinary
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',  // Permitir cualquier tipo de archivo (zip, pdf, etc.)
        public_id: `${sanitizedFileName}_${uniqueSuffix}`,  // Nombre único para evitar reemplazos
        folder: 'ppi',  // Guardar el archivo en la carpeta 'ppi'
        format: getFileFormat(file),  // Establece el formato del archivo
      },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          reject(new Error('Error uploading file to Cloudinary'));
        } else {
          resolve(result);  // Resuelve la promesa con el resultado de Cloudinary
        }
      }
    );

    // Convertir el buffer del archivo en un stream legible
    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);
    bufferStream.pipe(stream);
  });
};

// Helper para sanitizar el nombre del archivo (eliminar caracteres no válidos)
const sanitizeFileName = (fileName) => {
  return fileName.replace(/[^a-z0-9]/gi, '_').toLowerCase();  // Reemplaza caracteres no alfanuméricos por "_"
};

// Helper para obtener el formato del archivo según su extensión
const getFileFormat = (file) => {
  const fileExtension = file.originalname.split('.').pop().toLowerCase();
  return fileExtension;  // Cloudinary aceptará el formato como 'pdf', 'zip', etc.
};
