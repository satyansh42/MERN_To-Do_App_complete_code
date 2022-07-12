const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
  
   taskName:{ 
    type: String,
    required: true,
   },
   days:{
    type:Number,
    required:false,
   },
   date:{
    type:String,
    required:false
   }
});


const Task = mongoose.model("todoData",TaskSchema)
module.exports = Task;