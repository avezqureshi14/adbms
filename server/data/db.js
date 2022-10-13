import mongoose from "mongoose";

const connection = async () => {
    const URL = `mongodb+srv://avez:avez@cluster0.bvximwf.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(`Error which connecting with Database`, error.message);
    }
}

export default connection;