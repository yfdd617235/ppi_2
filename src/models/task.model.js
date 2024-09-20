// import mongoose from "mongoose";

// const taskSchema = new mongoose.Schema({
//     projectId: {
//         type: String,
//         required: true,  // El campo projectId es obligatorio para asociar la tarea con un proyecto
//     },
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//         required: true,
//     },
//     date: {
//         type: Date,
//         default: Date.now,
//     },
//     user: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,  // Esto es para que cada tarea esté vinculada con el usuario que la creó
//     },
//     file: {  
//         type: String,
//         required: true,  // Se mantiene el campo para el archivo como obligatorio
//     },
//     status: {
//         type: String,
//         default: "Sent",  // Campo status con valor predeterminado "Sent"
//     }
// }, {
//     timestamps: true
// });

// export default mongoose.model("Task", taskSchema);
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true,  // El campo projectId es obligatorio para asociar la tarea con un proyecto
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,  // Esto es para que cada tarea esté vinculada con el usuario que la creó
    },
    file: {  
        type: String,  // URL del archivo en Cloudinary
        required: false,
    },
    filePublicId: {  
        type: String,  // public_id del archivo en Cloudinary para poder eliminarlo
        required: false,
    },
    status: {
        type: String,
        default: "Sent",  // Campo status con valor predeterminado "Sent"
    }
}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);
