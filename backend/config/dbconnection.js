const mongoose = require("mongoose")

const connectDB = async ()=>{
    const connectionString = process.env.MONGODB_URI
    try {
        await mongoose.connect(connectionString)
        console.log("mongodb connected")
    } catch (error) {
        console.log("Mongodb connection failed\n",error.message)
    }
}

module.exports = connectDB