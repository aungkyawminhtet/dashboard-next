"use client";
import React, { useState } from 'react'
import { loginData } from '@/app/lib/formHandler'
const LoginForm = () => {
    const [err, setError] = useState();
    const loginHandler = async(formData) => {
        const data = await loginData(formData);
        data.err && setError(data.err);
    }
  return (
    <div className='p-5 bg-indigo-900 w-[400px]'>
        <h1 className='text-white text-xl font-bold tracking-wide text-center'>Login</h1>
        <form action={loginHandler}>
          <div className='flex flex-col space-y-2 mb-5'>
            <label htmlFor="username " className='text-white '>Username</label>
            <input type="text" placeholder='Username' name='username' id='username' className='p-2 text-lg rounded-md border-none outline-none' />
          </div>
          <div className='flex flex-col space-y-2 mb-6'>
            <label htmlFor="pass " className='text-white '>Password</label>
            <input type="password" name='password' placeholder='Password' id='pass' className='p-2 text-lg rounded-md border-none outline-none' />
          </div>
          <button type='submit' className='py-[12px] text-white bg-teal-700 w-full rounded-md font-bold hover:bg-teal-600'>Login</button>
          <h1 className='text-center mt-2 text-white'>{err}</h1>
        </form>
      </div>
  )
}

export default LoginForm
