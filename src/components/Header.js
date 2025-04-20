import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      console.log("User signed out");
      navigate("/");
    }).catch((error) => {
      console.log(error);
      console.log("Error signing out");
      navigate("/error");
    })
  }
  return (
    <div>
      <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-40">
          <img className="w-52" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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