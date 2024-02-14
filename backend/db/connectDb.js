import mongoose from "mongoose";

const connetToMongoDB = async() => {
    try{
     await mongoose.connect(process.env.MONGO_DB_URI)
     console.log('Connected to MongoDb')
    }catch(error){
        console.log('Error connectiong to mongodb',error);
    }
}

export default connetToMongoDB;