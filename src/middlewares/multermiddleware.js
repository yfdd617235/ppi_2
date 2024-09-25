// import multer from 'multer';
// import { v2 as cloudinary } from 'cloudinary';
// import { Readable } from 'stream';

// const storage = multer.memoryStorage();  // Usar memoria para los archivos
// export const upload = multer({ storage });

// export const uploadFileToCloudinary = (file) => {
//   return new Promise((resolve, reject) => {
//     const stream = cloudinary.uploader.upload_stream(
//       { resource_type: 'auto' },  // Esto permite subir cualquier tipo de archivo (zip, pdf, etc.)
//       (error, result) => {
//         if (error) {
//           reject(error);
//         } else {
//           resolve(result);
//         }
//       }
//     );
//     // Convertir el buffer de archivo en un stream legible
//     const bufferStream = new Readable();
//     bufferStream.push(file.buffer);
//     bufferStream.push(null);
//     bufferStream.pipe(stream);
//   });
// };

import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

const storage = multer.memoryStorage();  // Usar memoria para los archivos
export const upload = multer({ storage });

export const uploadFileToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto', // Si sabes que trabajas mayormente con archivos no multimedia, podrías usar 'raw'
        format: getFileFormat(file),  // Establece el formato si es necesario
        folder: 'my_files',  // Puedes organizar archivos en una carpeta específica si lo deseas
      },
      (error, result) => {
        if (error) {
          console.error("Error uploading to Cloudinary:", error);
          reject(new Error('Error uploading file to Cloudinary'));  // Mensaje de error más claro
        } else {
          resolve(result);
        }
      }
    );
    
    // Convertir el buffer de archivo en un stream legible
    const bufferStream = new Readable();
    bufferStream.push(file.buffer);
    bufferStream.push(null);
    bufferStream.pipe(stream);
  });
};

// Helper para obtener el formato del archivo según su extensión
const getFileFormat = (file) => {
  const fileExtension = file.originalname.split('.').pop().toLowerCase();
  return fileExtension;  // Cloudinary aceptará el formato como 'pdf', 'zip', etc.
};


