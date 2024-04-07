import mongoose from "mongoose"

// function to estabilish connection with database 
export const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_CONNECTION_URL);
    } catch (error) {
        throw error;
    }
}