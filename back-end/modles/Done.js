const mongoose = require('mongoose')

const DoneSchema = new mongoose.Schema({
  
   taskName:{ 
    type: String,
    required: true,
   },
   days:{
    type:Number,
    required:false
   },
   date:{
    type:Date,
    required:false
   }
});


const Done = mongoose.model("doneData",DoneSchema)
module.exports = Done;