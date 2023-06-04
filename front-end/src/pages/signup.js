import { useState } from 'react'
import { useSignup } from '../hooks/useSignUp';


const Signup = () =>{
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, error, loading } = useSignup()


  const handleSubmit = async (e) =>{
    e.preventDefault()

    await signup(email, password)
  }

  return(
    <div className='flex w-full justify-center pt-[200px]'>
      <form onSubmit={handleSubmit}
      className='flex flex-col px-[100px] py-[50px] w-auto h-auto rounded-md shadow-2xl
      bg-gray-950 gap-2'>
        <h1 className='text-[#32CD32] text-center text-2xl
        font-semibold'>
          Sign up
        </h1>

        <label className='text-white font-medium mt-3'>
          Email
        </label>
        <input type='email'
         onChange={(e)=> setEmail(e.target.value)}
         value = {email}
         className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300   
         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:border-[#32CD32] duration-300 ..."/>

        <label className='text-white font-medium mt-3'>
          password
        </label>
        <input type='password'
         onChange={(e)=> setPassword(e.target.value)}
         value = {password}
         className=" block w-full p-3 pl-2 text-sm text-gray-900 border border-gray-300 bg-gray-300   
         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:rounded-xl hover:border-[#32CD32] duration-300 ..."/>

         <button className='border-[2px] border-[#32CD32] text-[#32CD32] mt-4 py-2
         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110
         hover:text-white hover:rounded-3xl 
         hover:bg-[#32CD32] duration-300 ...'
         disabled={loading}>
          Sign up
         </button>
         {error && 
         <div className='border-[2px] p-2 text-red-500 border-red-500 mt-4'>
          {error}
          </div>}
      </form>
    </div>
  )
}

export default Signup;