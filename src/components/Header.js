import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO } from '../utils/constants'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid,
          email,
          displayName,
          photoURL
        }));
        navigate("/browse");
      } else {
        //Sign out the user case
        dispatch(removeUser());
        navigate("/");
      }
    })

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, [])


  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
    }).catch((error) => {
      console.log(error);
      console.log("Error signing out");
    })
  }
  return (
    <div>
      <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-40">
          <img className="w-52" src={NETFLIX_LOGO}
          alt="Netflix Logo"
          />

      </div>
      {user && <div className="flex flex-col absolute right-0 z-50 p-2 m-2">
          <img 
            className="w-16"
            src={user?.photoURL}
            alt="Netflix Logo"
          />
          <button onClick={handleSignOut} className="text-blue-400 hover:text-red-400 cursor-pointer">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header