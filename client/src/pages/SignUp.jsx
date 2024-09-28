import React from 'react'
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className='mx-auto max-w-lg'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4 '>
        <input type='text' placeholder='Username' id='username' className='bg-slate-100 p-3 rounded-lg' ></input>
        <input type='email' placeholder='Email' id='email' className='bg-slate-100 p-3 rounded-lg' ></input>
        <input type='password' placeholder='Password' id='password' className='bg-slate-100 p-3 rounded-lg' ></input>
        <button  className='text-center uppercase bg-slate-700 rounded-lg p-3 text text-white hover:opacity-95  disabled:opacity-80' >sign up</button>
        
      </form>
      <div className='flex gap-2 mt-5'>
      <p className=''>Have an account ? </p>
      <span className='text-blue-500 '> <Link to="/sign-in">sign in</Link></span>
     
      </div>
     
     
     
    </div>
  )
}
