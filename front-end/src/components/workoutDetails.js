//hooks
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const WorkoutDetails = ({ workout }) =>{
  const { dispatch } = useWorkoutContext()
  const { user } = useAuthContext();

  //a function to delete the workout
  const handleDelete = async () =>{

    if(!user){
      return
    }
    const response = await fetch('/api/workouts_section/' + workout._id, {
      method: 'DELETE',
      headers:{
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    if(response.ok){
      dispatch({type:'DELETE_WORKOUT', payload: json})
    }
  }

  //a function to handle updates for a workout
  // const handleUpdate = async () =>{
  //   const response = await fetch('/api/workouts_section/'+ workout._id,{
  //     method: 'PATCH'
  //   })
  //   const json = await response.json()

  //   if(response.ok){
  //     dispatch({type:'DELETE_WORKOUT', payload: json})
  //   }
  // }

  return(
    <div className="grid grid-cols-1 gap-1 shadow-lg rounded-xl h-auto mx-5 overflow-hidden
      bg-gray-950 mb-5 laptop:w-[900px] tablet:w-[600px] phone:w-[299px] 
      justify-center items-center p-5 text-white">
        <div className="flex flex-row justify-between">
          <div className="flex">
            <h2 className="laptop:text-xl tablet:text-md phone:text-sm text-[#32CD32] font-medium uppercase">
              {workout.title}
            </h2>
          </div>
          <div className="flex flex-row gap-x-2">
            {/* <button className= "material-symbols-outlined text-[#32CD32]">
              Edit
            </button> */}
            <button className="material-symbols-outlined text-[#32CD32]"
              onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      <p className="text-sm"><strong>Load (in kgs):</strong> {workout.load}</p>
      <p className="text-sm"><strong>Reps:</strong> {workout.reps}</p>
      <p className="text-sm"><strong>Sets:</strong> {workout.sets}</p>
      <p className="text-gray-500 text-sm font-thin">
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true})}
      </p>
    </div>
  )
}

export default WorkoutDetails;