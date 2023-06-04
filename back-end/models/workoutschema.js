const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//creating a new Schema for the workouts
const workoutSchema = new Schema({
  title:{
    type: String,
    required: true,
  },
  reps:{
    type:String,
    required: true,
  },
  load:{
    type: String,
    required: true,
  },
  sets:{
    type: String,
    required: true,
  },
  user_id:{
    type: String,
    required: true
  }
},{ timestamps:true} ) // timestamps is used for keeping track of when it was created or last updated

module.exports = mongoose.model('Workout', workoutSchema)
