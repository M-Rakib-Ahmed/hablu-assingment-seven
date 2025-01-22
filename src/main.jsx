import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About.jsx';
import MainLayout from './components/MainLayout.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    
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
