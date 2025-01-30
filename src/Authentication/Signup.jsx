import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Authcontext from '../Context/Authcontext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { imageUpload } from '../Components/Api/Utility';

const Signup = () => {
    const navigate = useNavigate()
    const { signInWithGoogle, createUser, updateUserProfile, setUser } =
      useContext(Authcontext)
      const [showpassword,setShowPassword]=useState(false);
      const [error,setError]=useState("");
  
    const handleSignUp = async e => {
      e.preventDefault()
      const form = e.target
      const email = form.email.value
      const name = form.name.value
      const image = form.image.files[0]
      const pass = form.password.value
      const photoURL=imageUpload()
      try {
        //2. User Registration
        const result = await createUser(email, pass)
        console.log(result)
        await updateUserProfile(name, photoURL)
        setUser({ ...result.user, photoURL: photoURL, displayName: name })
        toast.success('Signup Successful')
        navigate('/')
      } catch (error) {
        console.log(error)
        toast.error(error?.message)
      }
    }
    const handleGoogleSignIn = async () => {
      try {
        //User Registration using google
        await signInWithGoogle()
        toast.success('Signup Successful')
        navigate(from, { replace: true })
        
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }
    return (
     <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Sign Up</h2>
        
        <form onSubmit={handleSignUp}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
          type='text'
          name='name'
          id='name'
          placeholder='Enter Your Name Here'
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type='email'
              name='email'
              id='email'
              required
              placeholder='Enter Your Email Here'
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type='password'
              name='password'
              autoComplete='new-password'
              id='password'
              required
              placeholder='*******'
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Select Image</label>
            <div className="flex flex-col">
              <div className="flex space-x-2">
                <label className="btn btn-primary text-white cursor-pointer">
                  Choose Image
                  <input 
                    type="file"
                    id='image'
                    name='image'
                    className="hidden" 
                    accept="image/*" 
                  />
                </label>
              </div>
              {/* {image && (
                <div className="mt-4">
                  <img src={image} alt="Selected" className="w-24 h-24 object-cover rounded-full" />
                </div>
              )} */}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Sign Up
            </button>
          </div>
        </form>
        <div
            onClick={handleGoogleSignIn}
            className='flex flex-col cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 '
          >
            <div className='flex gap-3 px-4 py-2 btn mx-auto mt-3'>
              <svg className='w-6 h-6' viewBox='0 0 40 40'>
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#FFC107'
                />
                <path
                  d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                  fill='#FF3D00'
                />
                <path
                  d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                  fill='#4CAF50'
                />
                <path
                  d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                  fill='#1976D2'
                />
              </svg>
              <h3>Sign In with Google</h3>
            </div>
            <div>
            <h3 className='text-xl mt-3'>Already have an account? <NavLink to='/login'>Login</NavLink></h3>
            </div>
          </div>
      </div>
    </div>
     </>
    );
};

export default Signup;

// adilmdctg123@gmail.com
// 12398765