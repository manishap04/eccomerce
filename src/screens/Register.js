import React from 'react'
import {useForm} from 'react-hook-form'


function Register() {
  
  let {register,handleSubmit}=useForm();
 function handleFormSubmit(en){
    en.preventDefault();
 }
  return (
    <div className='mt-5 p-5 bg-light'>
      <form className='w-50 mx-auto p-5' onSubmit={handleSubmit(handleFormSubmit)}>
        <input type='text' className='form-control mb-3' placeholder='Username' {...register("username")}></input>
        <input type='password' className='form-control mb-3' placeholder='password' {...register("password")}></input>
        <input type='email' className='form-control mb-3' placeholder='email id' {...register("email")}></input>
        <input type='mobile' className='form-control mb-3' placeholder='mobile no' {...register("mobile")} />
        <button type='submit' className='btn btn-success d-flex justify-content-end'>Register</button>
      </form>
    </div>
  )
}

export default Register
