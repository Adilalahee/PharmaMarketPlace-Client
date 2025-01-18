import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
              type="text"
              id="name"
              placeholder="John Doe"
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="input input-bordered w-full mt-2"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              placeholder="********"
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
      </div>
    </div>
     </>
    );
};

export default Signup;