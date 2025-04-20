import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
        <Header />
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_medium.jpg"
            alt="Netflix Logo"
          />  
        </div>
        <form className="flex flex-col absolute w-3/12 px-12 pt-12 pb-8 bg-black my-44 left-0 right-0 mx-auto rounded-lg bg-black/80">
          <h1 className="font-bold py-2 text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&  <input type="text" placeholder='Full Name' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />}
          <input type="text" placeholder='Email Address' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />
          <input type="password" placeholder='Password' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />
          <button type="submit" className="bg-red-700 p-4 my-2 w-full rounded-lg opacity-100 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</button>
          <p className="text-white my-4 p-4 cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login