import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Browse from './Browse'
const Login = () => {
    const [isSignForm, setIsSignInForm] = useState(true);
    
    function changeForm(){
        setIsSignInForm(!isSignForm)
    }
    return (
        <div className=''>
            <Header/>
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/0cf2c109-3af1-4a9d-87d7-aecfac5fe881/web/IN-en-20250217-TRIFECTA-perspective_c3376e06-9aff-4657-aafb-91256a597b7c_small.jpg' alt='background'/>
            </div>
            <div className="absolute w-1/2 mx-auto left-0 right-0 bg-white text-center rounded-b-2xl z-30">
                Netflip
            </div>
            <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80'>
                <h1 className='font-bold text-2xl pb-4 pt-2'>
                    { isSignForm == true ? 'Sign In' : 'Sign Up'}
                </h1>

                {
                   !isSignForm && <input type='text' placeholder='Name' className='p-2 my-4 w-full bg-gray-700 rounded-md'/> 
                }
                <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700 rounded-md'/>

                <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700 rounded-md'/>

                <button type='submit' className='bg-red-800 p-2 mt-6 w-full rounded-md' >
                    { isSignForm == true ? 'Sign In' : 'Sign Up'}
                </button>
                <p className='mt-2 -ml-5'> 
                    { isSignForm == true ? 'New to Netflip' : 'Have an Account'} ?
                    <button type='button' className='underline italic hover:text-red-400' onClick={()=> changeForm()}>
                        Sign {isSignForm == true ? 'Up' : 'In'} Now!
                    </button>
                </p>
            </form>


        </div>
  )
}

export default Login