import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    projectId: {
        type: String,
        required: true,
    },
    customerEmail: {
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
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    script: {
        type: Number,
        required: true,
    },
    // Campos para cada archivo individualmente
    file1: {  
        type: String,  // URL del primer archivo en Cloudinary
        required: false,
    },
    file1PublicId: {  
        type: String,  // public_id del primer archivo en Cloudinary
        required: false,
    },
    file2: {  
        type: String,  // URL del segundo archivo en Cloudinary
        required: false,
    },
    file2PublicId: {  
        type: String,  // public_id del segundo archivo en Cloudinary
        required: false,
    },
    file3: {  
        type: String,  // URL del tercer archivo en Cloudinary
        required: false,
    },
    file3PublicId: {  
        type: String,  // public_id del tercer archivo en Cloudinary
        required: false,
    },
    status: {
        type: String,
        default: "Open",
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    }
}, {
    timestamps: true
});

export default mongoose.model("Project", projectSchema);
