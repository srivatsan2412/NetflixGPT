import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidDataForSignIn, checkValidDataForSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const navigate = useNavigate();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    // Validate the form data
    const errorMessage = isSignInForm ? checkValidDataForSignIn(email.current.value, password.current.value): checkValidDataForSignUp(email.current.value, password.current.value, fullName.current.value);
    setErrorMessage(errorMessage);

    if (errorMessage) {
      return;
    }

    // create a new user / sign in the user

    const user = {
      email: email.current.value,
      password: password.current.value,
      fullName: fullName?.current?.value
    }

    if(!isSignInForm) {
      // Sign up logic

      createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        // update user

        updateProfile(user, {
          displayName: user.fullName, photoURL: "https://avatars.githubusercontent.com/u/24690749?s=400&u=6bb21804eef7cedb412fcea24e8444c1b9adc68a&v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
        dispatch(updateUser({
          uid,
          email,
          displayName,
          photoURL
        }));
        navigate("/browse");
        }).catch((error) => {
          // An error occurred
          // ...
        });

      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ '-' + errorMessage);
        
      });

    } else {
      console.log("reached");
      signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // update user
        


        navigate("/browse");
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+ '-' + errorMessage);
      })
    }

  }

  return (
    <div>
        <Header />
        <div className="absolute">
          <img src="https://assets.nflxext.com/ffe/siteui/vlv3/69bec183-9cc8-49d4-8fc2-08228d3c91b4/web/IN-en-20250414-TRIFECTA-perspective_c8273fb1-8860-4ff5-bd1c-c2c4b44d5f2a_medium.jpg"
            alt="Netflix Logo"
          />  
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col absolute w-3/12 px-12 pt-12 pb-8 bg-black my-44 left-0 right-0 mx-auto rounded-lg bg-black/80">
          
          <h1 className="font-bold py-2 text-3xl text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
          {!isSignInForm &&  <input ref={fullName} type="text" placeholder='Full Name' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />}
         
          <input ref={email} type="text" placeholder='Email Address' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />
         
          <input ref={password} type="password" placeholder='Password' className="p-4  my-4 rounded-sm bg-neutral-800 text-white" />

          <p className="p-2 text-lg text-red-500">{errorMessage}</p>

          <button onClick={() => handleButtonClick()} type="submit" className="bg-red-700 p-4 my-2 w-full rounded-lg opacity-100 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</button>
         
          <p className="text-white my-4 p-4 cursor-pointer" onClick={() => toggleSignInForm()}>{isSignInForm ? "New to Netflix? Sign up now." : "Already a user? Sign In now."}</p>
        </form>
    </div>
  )
}

export default Login