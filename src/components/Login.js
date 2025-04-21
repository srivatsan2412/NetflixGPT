import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidDataForSignIn, checkValidDataForSignUp } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { updateUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND, PHOTO_URL } from '../utils/constants';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

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
          displayName: user.fullName, photoURL: PHOTO_URL
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(updateUser({
            uid,
            email,
            displayName,
            photoURL
          }));
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
      signInWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        // update user

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
          <img src={NETFLIX_BACKGROUND}
            alt="Netflix background Logo"
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