import { useAuthContext } from "./useAuthContext";
import { useWorkoutContext } from "./useWorkoutContext";

export const useLogout = () =>{
  const { dispatch } = useAuthContext();
  const {dispatch: workoutDispatch} = useWorkoutContext()
  const logout = () =>{
    //removing user from local storage
    localStorage.removeItem('user');

    //dispatch logout activity
    dispatch({type:'LOGOUT'})
    //to change the global state of the react app
    //so that it won't show the previous state when logged out
    workoutDispatch({type: 'SET_WORKOUTS', payload: null})
  }
  return { logout}
}