const express = require('express');
const router = express.Router();
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutcontrols')
const requireAuth  = require('../middleware/requireAuth')

//to secure all other routes
router.use(requireAuth)
//getting all workouts
router.get('/', getWorkouts);

//getting a single workout
router.get('/:id', getWorkout); 

//post a workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', deleteWorkout); 

//update a workout
router.patch('/:id', updateWorkout);


module.exports = router;