//assets
import pic1 from '../assets/homepic.jpg';
import pic2 from '../assets/homepic2.jpg';
//requirements
import { Link } from 'react-router-dom'


const LandingPage = () =>{
  
  return(
    // homepage section
    <section className="w-screen md:px-[50px] min-h-screen pt-[80px] pb-[100px] gap-4 overflow-hidden">
      {/* main container */}
      <div className='grid laptop:grid-cols-2 tablet:grid-cols-1 phone:grid-cols-1 gap-4 w-full h-full
        phone:p-[70px] phone:gap-20 tablet:p-[100px] tablet:gap-28'> 
        <div className='flex flex-col laptop:pt-[170px]'>
          <h1 className='laptop:text-4xl tablet:text-3xl phone:text-xl text-black body-font font-geologica'>
            Create Your own workout Routine and explore more about fitness!!
          </h1>
          {/* button */}
          <div className="flex justify-start mt-[50px]">
            <Link to='/home' className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Let's Go!!</span>
              </span>
              <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
            </Link>
          </div>
        </div>

        {/* images container */}
        <div className='flex flex-col justify-center items-center lg:p-[100px] pr-[100px] pt-[40px]'>
          <div className="flex laptop:w-[350px] laptop:h-[350px] tablet:w-[300px] tablet:h-[300px] phone:w-[200px] phone:h-[200px] 
            sticky z-[50] ">
            <img src={pic2} alt='home pic' className="object-cover rounded-full"/>
          </div>
          <div className="flex laptop:w-[350px] laptop:h-[350px] tablet:w-[300px] tablet:h-[300px] phone:w-[200px] phone:h-[200px] 
            mt-[-250px] ml-[200px] ">
            <img src={pic1} alt='home pic' className="object-cover rounded-full"/>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default LandingPage;