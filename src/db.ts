import mongoose from "mongoose"

const connectToDatabase =async () => {
 try{
    const connection = await mongoose.connect(
        "mongodb+srv://hesithadb:7RE5bCs6Sx6mnQln@cluster0.vz1ih2m.mongodb.net/?retryWrites=true&w=majority"
    )
    if(connection){
        console.log("Database Connected")
    }
 } catch (error){
    console.log("Cannot connect to the databasee", error)
    throw error
 }   
}

export default connectToDatabase