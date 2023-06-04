import hiit from '../assets/hiit.jpg';
import workout from '../assets/createworkout.jpg';
import boxing from '../assets/boxing.jpg';
import calisthenics from '../assets/calisthenics.jpg';
import weightlifting from '../assets/weightlifting.jpg';
import cardio from '../assets/cardio.jpg';
import nutritiontips from '../assets/nutritiontips.jpg';
import calories from '../assets/caloriecalc.jpg';

const categories = [
  {
    name: "Create Your workouts",
    img:workout,
    link:'/workouts'
  },
  {
    name: "Calisthenics",
    img:calisthenics,
    link:'/calisthenics'
  },
  {
    name: "Weight Lifting",
    img: weightlifting,
    link:'/weightlifting'
  },  
  {
    name: "Boxing",
    img:boxing,
    link:'/boxing'
  },
  {
    name: "Cardio",
    img:cardio,
    link:'/cardio'
  },
  {
    name: "HIIT",
    img:hiit,
    link:'/hiit'
  },
  {
    name: "Nutrition tips",
    img:nutritiontips,
    link:'/nutritiontips'
  },
  // {
  //   name: "Calories calculator",
  //   img:calories,
  //   link:'/caloriescalculator'
  // },
]

export default categories;