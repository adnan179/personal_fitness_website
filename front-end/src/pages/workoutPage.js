import { useEffect, useState } from "react";
import WorkoutDetails from "../components/workoutDetails";
import WorkoutForm from "../components/workoutForm";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";


const WorkoutPage = () =>{
  const [openForm, setOpenForm] = useState(false);
  const { user } = useAuthContext()
  const {workouts, dispatch} = useWorkoutContext()
  const formState = () =>{
    setOpenForm(!openForm)
  }

  useEffect(() =>{
    const fetchWorkouts = async () =>{
      const response = await fetch('/api/workouts_section',{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
      const json = await response.json();

      if(response.ok){
        dispatch({type: 'SET_WORKOUTS', payload: json});
      }
    }
    if(user){
      fetchWorkouts();
    }
    
  },[dispatch, user])
  return (
    <section className="flex flex-col min-h-screen px-[10px] pt-[120px] ">
      {!openForm ? <>
        <div className="flex absolute w-auto h-auto pl-2 z-50 ">
          <button onClick={formState} 
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-[#32CD32] transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-[#32CD32] group-hover:h-full"></span>
            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
              <svg className="w-5 h-5 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
              <svg className="w-5 h-5 text-gray-950" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Add a new exercise</span>
          </button>
        </div>
        <div className="flex flex-col absolute mt-[60px] justify-center-center overflow-hidden ">
          {workouts && workouts.map((workout)=>(
            <WorkoutDetails key={workout._id} workout = {workout}/>
          ))}
        </div>
      </>:(
        <section className=" flex justify-center items-center">
          <WorkoutForm formState={formState}/>
        </section>
      )}
      
      
    </section>
  )
}

export default WorkoutPage;