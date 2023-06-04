const express = require('express');
const Workout = require('../models/workoutschema');
const mongoose = require('mongoose');

//get all workouts
const getWorkouts = async (req, res) => {

  const user_id = req.user._id
  // find() gets the workout, sort with createdAt:-1 gets us new workouts on top
  const workouts = await Workout.find({user_id}).sort({createdAt: -1})

  res.status(200).json(workouts);
}


//get a single workout
const getWorkout = async (req, res) => {
  //id from the request parameters which is used for getting the workout
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'no such workout'})
  }
  const workout = await Workout.findById(id);

  if(!workout) {
    return res.status(404).json({error: 'Not Found'});
  }
  res.status(200).json(workout);
}


// create a new workout
const createWorkout = async (req, res) =>{
  //getting details from the request body
  const {title, reps, load, sets} = req.body
  //creating a new workout document with the details received from the request to the db

  let emptyFields = []

  if(!title){
    emptyFields.push('title')
  }
  if(!load){
    emptyFields.push('load')
  }
  if(!reps){
    emptyFields.push('reps')
  }
  if(!sets){
    emptyFields.push('sets')
  }
  if(emptyFields.length > 0){
    return res.status(400).json({error: 'Please fill all the fields', emptyFields})
  }
  try{
    const user_id = req.user._id
    const workout = await Workout.create({title, load,reps, sets, user_id})
    res.status(200).json(workout);
  } catch(error){
    res.status(400).json({error: error.message})
  }
}

//delete a workout
const deleteWorkout = async (req, res) => {
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'no such workout'})
  }
  const workout = await Workout.findOneAndDelete({_id:id})
  if(!workout){
    return res.status(404).json({error:'no such workout'})
  }
  res.status(200).json(workout)
}


//update a workout
const updateWorkout =async(req, res) =>{
  const { id } = req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:'no such workout'})
  }
  const workout = await Workout.findOneAndUpdate({_id:id},{
    ...req.body
  })
  if(!workout){
    return res.status(404).json({error:'no such workout'})
  }
  res.status(200).json(workout)
}


module.exports = {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
}