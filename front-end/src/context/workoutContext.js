import { createContext, useReducer } from "react";

//creating a context to pass down the data and store
export const WorkoutContext = createContext();

//creating a function to save previous state and handling the actions 
export const workoutsReducer = (state,action)=>{
  switch(action.type){
    //to send the existing workouts
    case 'SET_WORKOUTS':
      return{
        workouts: action.payload
      }
    // to send the existing workouts with the new one on top
    case 'CREATE_WORKOUT':
      return{
        workouts: [action.payload, ...state.workouts]
      }
    //filter the workouts by removing the deleted workout from the array
    case 'DELETE_WORKOUT':
      return{
        workouts: state.workouts.filter((w) => w._id !== action.payload._id)
      }
    default:
      return state
  }
}

export const WorkoutContextProvider = ({ children }) =>{
  const [state, dispatch] = useReducer(workoutsReducer,{
    workouts: null
  })
   
  return(
    //passing down the date to every component by passing it down to the app component
    <WorkoutContext.Provider value={{...state, dispatch}}>
      { children }
    </WorkoutContext.Provider>
  )
}