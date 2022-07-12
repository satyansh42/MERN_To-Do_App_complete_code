const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require("dotenv").config();

const TaskModel = require('./modles/Task');
const DoingModel = require('./modles/Doing');
const DoneModel = require('./modles/Done');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://sat:sat@cluster0.uuhc2pc.mongodb.net/task?retryWrites=true&w=majority',{
    useNewUrlParser:true,
});


app.post('/insert', async(req, res)=>{
    const taskName = req.body.taskName;
    const days = req.body.days;
    const date = req.body.date;
    const task = new TaskModel ({taskName:taskName,days:days,date:date});

    try{
        await task.save();
         res.send('taskName');
    }
    catch(err){
        console.log(err)
    }
} )



// for doing

app.post('/doing', async(req, res)=>{
    const taskName = req.body.taskName;
    const days = req.body.days;
    const date = req.body.date;
    const task = new DoingModel ({taskName:taskName,days:days,date:date});

    try{
        await task.save();
         res.send('DoingName');
    }
    catch(err){
        console.log(err)
    }
} )

// for  done

app.post('/done', async(req, res)=>{
    const taskName = req.body.taskName;
    const days = req.body.days;
    const date = req.body.date;
    const task = new DoneModel ({taskName:taskName,days:days,date:date});

    try{
        await task.save();
         res.send('DoneName');
    }
    catch(err){
        console.log(err)
    }
} )


app.get('/read', async(req, res)=>{
    
    TaskModel.find({},(err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })

} )


//read for doing

app.get('/doingread', async(req, res)=>{
    
    DoingModel.find({},(err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })

} )


// read for doing

app.get('/doneread', async(req, res)=>{
    
    DoneModel.find({},(err, result) =>{
        if(err){
            res.send(err)
        }
        res.send(result)
    })

} )

app.put('/update', async(req, res)=>{
    const newTaskName = req.body.newTask;
    const id = req.body.id;
    // res(newTask)

    try{
        await TaskModel.findById(id,(err,updatedTask)=>{
            updatedTask.taskName = newTaskName;
            updatedTask.save();
            res.send('newTask');
        })
    }
    catch(err){
        console.log(err)
    }
} )


app.delete('/delete/:id',async (req, res)=>{
    const id = req.params.id;

    await TaskModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})


// for doing

app.delete('/deletedoing/:id',async (req, res)=>{
    const id = req.params.id;

    await DoingModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})

// delete for done

app.delete('/deletedone/:id',async (req, res)=>{
    const id = req.params.id;

    await DoneModel.findByIdAndRemove(id).exec();
    res.send('deleted');
})


app.listen(process.env.PORT || 3001, ()=>{
    console.log('server running on port 3001..')
});