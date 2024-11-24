
const mongoose = require("mongoose")
require("dotenv").config()

async function connectDB() {
try{
  await mongoose.connect(process.env.MONGO_URI)
  console.log("Connected")
}catch(error){
  console.log(error.message);
  
}
}

module.exports = connectDB