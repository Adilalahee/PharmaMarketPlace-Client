import React, { useContext } from 'react';
import Authcontext from '../Context/Authcontext';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import Loader from '../Components/Shared/Loader';
import toast from 'react-hot-toast';

const Login = () => {
    const { signIn, signInWithGoogle,loading,user } = useContext(Authcontext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if (user) return <Navigate to={from} replace={true} />
    if (loading) return <Loader></Loader>
    const handleSubmit = async event => {
      event.preventDefault()
      const form = event.target
      const email = form.email.value
      const password = form.password.value
  
      try {
        //User Login
        await signIn(email, password)
  
        navigate(from, { replace: true })
        toast.success('Login Successful')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }
    const handleGoogle= async ()=>{
      try {
        //User Registration using google
        await signInWithGoogle()
        navigate(from, { replace: true })
        toast.success('Login Successful')
      } catch (err) {
        console.log(err)
        toast.error(err?.message)
      }
    }
    return (
  <>
  <div className="relative flex flex-col items-center justify-center h-screen overflow-hidden">
    <div className="w-full p-6 bg-white border-t-4 border-gray-600 rounded-md shadow-md border-top lg:max-w-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-700">
            DaisyUI
        </h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label className="label">
                    <span className="text-base label-text">Email</span>
                </label>
                <input  type='email'
                name='email'
                id='email'
               placeholder="Email Address" className="w-full input input-bordered" />
            </div>
            <div>
                <label className="label">
                    <span className="text-base label-text">Password</span>
                </label>
                <input   
                type='password'
                name='password'
                autoComplete='current-password'
                id='password' placeholder="Enter Password" className="w-full input input-bordered" />
            </div>
            <div>
                <button className="btn btn-block btn-neutral">Login</button>
            </div>
            <div
            onClick={handleGoogle}
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
            <h3 className='text-xl mt-3'>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></h3>
            </div>
          </div>
        </form>
    </div>
</div>
  </>
    );
};

export default Login;