import Browse from './Browse'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

const Body = () => {
  // const dispatch = useDispatch(); // always use hook on top of the component, first thing should be hooks
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


  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body