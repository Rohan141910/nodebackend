const mongoose=require("mongoose")
const studentSchema=new mongoose.Schema({
    rollno:Number,
    name:String,
    marks:Number
})
module.exports=mongoose.model("students",studentSchema)