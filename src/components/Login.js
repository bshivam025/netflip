import React, { useState } from 'react';
import Header from './Header';
import useAuthentication from '../hooks/useAuthentication';
import { NETFLIX_LOGO } from '../utils/constant';

const Login = () => {
    const [isSignForm, setIsSignForm] = useState(true);
    const { nameRef, emailRef, passwordRef, errorMsg, signUp, signIn, signInWithGoogle, setErrorMsg } = useAuthentication();

    const changeForm = () => {
        setErrorMsg(null);
        setIsSignForm(!isSignForm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignForm) signIn();
        else signUp();
    };

    return (
        <div className="relative min-h-screen bg-black">
            <Header />
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <img src={NETFLIX_LOGO} alt="background" className="w-full h-full object-cover"/>
            </div>

            {/* Form Container */}
            <div className="absolute w-11/12 sm:w-9/12 md:w-3/12 p-4 sm:p-8 md:p-12 bg-black bg-opacity-80 my-20 mx-auto left-0 right-0 rounded-lg text-white">
                <h1 className="font-bold text-2xl pb-4 text-center">
                    {isSignForm ? 'Sign In' : 'Sign Up'}
                </h1>

                <form onSubmit={handleSubmit}>
                    {!isSignForm && (
                        <input type="text" ref={nameRef} placeholder="Name" className="p-2 my-3 w-full bg-gray-700 rounded-md"/>
                    )}

                    <input type="text" ref={emailRef} placeholder="Email Address" className="p-2 my-3 w-full bg-gray-700 rounded-md"/>

                    <input type="password" ref={passwordRef} placeholder="Password" className="p-2 my-3 w-full bg-gray-700 rounded-md"/>

                    {errorMsg && <p className="text-red-500 text-sm text-center">{errorMsg}</p>}

                    <button type="submit" className="bg-red-700 hover:bg-red-800 p-2 my-4 w-full rounded-md transition duration-200">
                        {isSignForm ? 'Sign In' : 'Sign Up'}
                    </button>
                </form>

                <div className="flex justify-center my-3">
                    <span className="text-gray-400">OR</span>
                </div>

                <button onClick={signInWithGoogle} className="bg-red-700 hover:bg-red-800 p-2 my-3 w-full rounded-md transition duration-200">
                    Sign in With Google
                </button>

                <p className="mt-3 text-center text-sm text-gray-400">
                    {isSignForm ? 'New to Netflip?' : 'Already have an account?'} 
                    <button type="button" className="ml-1 text-white underline hover:text-red-400" onClick={changeForm}>
                        Sign {isSignForm ? 'Up' : 'In'} Now!
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Login;
