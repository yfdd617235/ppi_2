// import multer from 'multer';

// export const upload = multer({dest: 'uploads/'})

import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { Readable } from 'stream';

const storage = multer.memoryStorage();  // Usar memoria para los archivos
export const upload = multer({ storage });

export const uploadFileToCloudinary = (file) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: 'auto' },  // Esto permite subir cualquier tipo de archivo (zip, pdf, etc.)
      (error, result) => {
        if (error) {
          reject(error);
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


