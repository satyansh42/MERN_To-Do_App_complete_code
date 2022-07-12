const mongoose = require('mongoose')

const DoingSchema = new mongoose.Schema({
  
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


const Doing = mongoose.model("doingData",DoingSchema)
module.exports = Doing;