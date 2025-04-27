import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants'
import { toggleGPTSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);
  
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

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <div>
      <div className="absolute w-full px-4 py-2 bg-gradient-to-b from-black z-40">
          <img className="w-52" src={NETFLIX_LOGO}
          alt="Netflix Logo"
          />

      </div>
      {user && <div className="flex gap-4 absolute right-0 z-50 p-2 m-2">
          
          {
            showGPTSearch && <select className='p-3 m-4 bg-gray-800 text-white rounded-md' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang =>
              <option className='p-4 m-4 bg-gray-600 text-white' key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            )} 
          </select>
          }
          <button className="px-4 mx-4 rounded-lg text-white bg-purple-700 hover:bg-purple-500" 
            onClick={handleGPTSearchClick}
          >{showGPTSearch ? "Homepage" : "GPT Search"}</button>
          <img 
            className="w-16"
            src={user?.photoURL}
            alt="Netflix Logo"
          />
          <button onClick={handleSignOut} className="text-white hover:text-red-400 cursor-pointer">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header