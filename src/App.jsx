import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './pages/Homepage';
import Aboutpage from './pages/Aboutpage';
import Projectpage from './pages/Projectpage';
import Contactpage from './pages/Contactpage';

import './App.css'
import { SiHomepage } from 'react-icons/si';

const router = createBrowserRouter([
  {
    path:  "/",
    element: <Homepage/>
  },
  {
    path:  "/about",
    element: <Aboutpage/>
  },
  {
    path:  "/project",
    element: <Projectpage/>
  },
  {
    path:  "/contact",
    element: <Contactpage/>
  }

]);

function App(){
  return <RouterProvider router={router}/>
}
export default App;
