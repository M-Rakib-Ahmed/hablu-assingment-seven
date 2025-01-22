import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children:[
      {path: "aboutus",
        element:<About></About>

      },
      {
        path: "pricing",
        element:<About></About>

      },
      {
        path: "customers",
        element:<About></About>

      },
      {
        path: "solutions",
        element:<About></About>

      },

    ]
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
