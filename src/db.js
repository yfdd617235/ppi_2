import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost/ppi_2');
        console.log(">>> DB is connected");

    } catch (error) {
        console.log(error);
    }
};
