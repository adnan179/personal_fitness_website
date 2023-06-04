require('dotenv').config()

//importing the express
const express = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workout')
const userRoutes = require('./routes/user');
//starting the express application
const app = express();

//middleware
app.use(express.json())
app.use((req,res, next)=>{
  console.log(req.path, req.method)
  next()
})

//routes
app.use('/api/workouts_section',workoutRoutes)
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.MONG_URI) 
  .then(()=>{
    //listen for requets
    app.listen(process.env.PORT, ()=>{
      console.log('connected to db & listening on port',process.env.PORT)
    })
  })
  .catch(err=>{
    console.log(err)
  })



