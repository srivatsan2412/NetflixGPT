import React, { useEffect } from 'react'
import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { auth } from '../utils/firebase'

const Body = () => {
  const dispatch = useDispatch(); // always use hook on top of the component, first thing should be hooks
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid,
          email,
          displayName,
          photoURL
        }));
      } else {
        //Sign out the user case
        dispatch(removeUser());
      }
    })
  }, [])

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body