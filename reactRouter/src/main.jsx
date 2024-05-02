import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'

import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub from './components/GitHub/GitHub.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout />,
    children : [
      {
        path : "",
        element : <Home />
      },
      {
        path : "/about",
        element : <About />
      },
      {
        path : "/contact",
        element : <ContactUs />
      },
      {
        path : "/user/:userid",
        element : <User />
      },
      {
        
        path : "/github",
        element : <GitHub />
      }
    ] 
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
