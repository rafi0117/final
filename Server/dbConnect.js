import mongoose from "mongoose";

async function connectDB(){
    try {
        console.log("hello file is ready ")
        await mongoose.connect("mongodb+srv://abdulrafi_04:Rafi0117@raficfi.zki6qm3.mongodb.net/FinalFinal")
                             // mongodb+srv://abdulrafi_04:Rafi0117@raficfi.zki6qm3.mongodb.net/test
        console.log("MongoDB is connected")
    } catch (error) {
        console.log(error)
    }
}
connectDB();

// export default connectDB;