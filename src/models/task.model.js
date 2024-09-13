import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
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
        required: true
    }, // Esto es para que cada tarea sea guardada con el usuario específico que la creó
    file: {  // Agregamos el campo para el archivo
        type: String,
        required: false, // No es obligatorio
    }

}, {
    timestamps: true
});

export default mongoose.model("Task", taskSchema);