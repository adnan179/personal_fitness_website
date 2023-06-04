import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext.js";
//pages
import WorkoutPage from './pages/workoutPage.js';
import Login from "./pages/login.js";
import Signup from "./pages/signup.js";
import LandingPage from "./pages/landingPage.js";
import Home from "./pages/home.js";
import BoxingPage from "./pages/boxingPage.js";
import HiitPage from "./pages/hiitPage.js";
import CalisthenicsPage from "./pages/calisthenicsPage.js";
import WeightliftingPage from "./pages/weightLiftingPage.js";
import CardioPage from "./pages/cardioPage.js";
import NutritionPage from './pages/nutritionPage.js';
//components
import Navbar from "./components/navbar.js";

const App = () =>{
  //conditionally navigating to the pages using user
  const { user } = useAuthContext()
  return(
    <div className="overflow-hidden">
      <BrowserRouter>
        <Navbar/>
        <div className="pages">
          <Routes>
            <Route path="/login" element={!user ? <Login/> : <Navigate to='/'/>} />
            <Route path="/signup" element={!user ? <Signup/> : <Navigate to='/'/>} />
            <Route path='/' element={ <LandingPage/> }/>
            <Route path='/home' element={<Home/>}/>
            <Route path="/workouts" element={<WorkoutPage/>} />
            <Route path ='/calisthenics' element={<CalisthenicsPage/>} />
            <Route path ='/weightlifting' element={<WeightliftingPage/>} />
            <Route path='/hiit' element={<HiitPage/>} />
            <Route path="/cardio" element={<CardioPage/>}/>
            <Route path='/boxing' element={<BoxingPage/>}/>
            <Route path="nutritiontips" element={<NutritionPage/>}/>
            
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;