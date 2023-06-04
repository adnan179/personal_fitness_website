import { useState } from "react"
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const WorkoutForm = ({ formState }) =>{

  //for updating the new workout without refresh
  const {dispatch} = useWorkoutContext()

  //for authorization purpose
  const {user} = useAuthContext()
  //values for the new workout
  const [title, setTitle] =useState("");
  const [load, setLoad] =useState("");
  const [reps, setReps] =useState("");
  const [sets, setSets] =useState("");
  const [error, setError] =useState(null);
  const [emptyFields, setEmptyFields] =useState([])

  //handler function for handling the submit event
  const handleSubmit = async (e) =>{
    e.preventDefault();

    // authorization
    if(!user){
      setError('You must be logged in')
      return
    }
    

    const workout = {title, load, reps, sets}
    //sending data to the database using post method
    const response = await fetch('/api/workouts_section', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }

    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if(response.ok){
      dispatch({type:'CREATE_WORKOUT',payload:json})
      setError(null)
      console.log('new workout added', json)
      setTitle('')
      setLoad('')
      setReps('')
      setSets('')
      handleStateForm()
      setEmptyFields([])
    }
  }
  const handleStateForm = () =>{
    formState()
  }
  return(
    <div className="flex flex-col bg-gray-950
        w-[430px] w-full h-auto py-10 mt-10
      overflow-hidden rounded-lg ">
      <div className="flex material-symbols-outlined text-4xl text-[#32CD32] 
      cursor-pointer justify-end pr-5 mt-[-12px] "
        onClick={handleStateForm}>
        Close
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="flex">
          <form onSubmit={handleSubmit} className="flex flex-col text-[#32CD32] xl:text-3xl lg:text-3xl md:text-2xl ">
            <h1 className="mb-5 xl:text-5xl lg:text-4xl md:text-3xl text-xl font-medium text-white"> Add a new Excercise</h1>

            <label className="mb-2">Exercise Title</label>
            <input type="text"
              onChange={(e)=>{
                setTitle(e.target.value);
              }} value={title}
              className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300 rounded-lg focus:ring-[#32CD32] focus:border-[#32CD32] "
              />

            <label className="mb-2">Load (in kgs):</label>
            <input type="text"
              onChange={(e)=>{
                setLoad(e.target.value);
              }} value={load} 
              className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300 rounded-lg focus:ring-[#32CD32] focus:border-[#32CD32] "
              />

            <label className="mb-2">Reps:</label>
            <input type="text"
              onChange={(e)=>{
                setReps(e.target.value);
              }} value={reps} 
              className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300 rounded-lg focus:ring-[#32CD32] focus:border-[#32CD32] "
            />

            <label className="mb-2">sets:</label>
            <input type="text"
              onChange={(e)=>{
                setSets(e.target.value);
              }} value={sets} 
              className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300 rounded-lg focus:ring-[#32CD32] focus:border-[#32CD32] "
              />

            <button className="border-[2px] mt-5 font-medium border-[#32CD32] rounded-lg p-1 
            cursor-pointer hover:bg-[#32CD32] hover:text-white"> 
              Add
            </button>

            {error && 
            <div className="mt-5 text-red-600 border-[2px] border-red-600 rounded-lg py-2 px-5">
              {error}
            </div>}
          </form>
        </div>
      </div>
    </div>
  )
}

export default WorkoutForm;