import mongoose from 'mongoose';


export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://PPI:PPI123@cluster0.kgxfus6.mongodb.net/?retryWrites=true&w=majority');
        console.log(">>> Mongo ATLAS is Conected");

    } catch (error) {
        console.log(error);
    }
};

// 'mongodb://127.0.0.1:27017/ppi_2'