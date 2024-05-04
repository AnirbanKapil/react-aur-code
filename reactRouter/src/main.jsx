import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./components/Home/Home.jsx"
import About from './components/About/About.jsx'

import ContactUs from './components/ContactUs/ContactUs.jsx'
import User from './components/User/User.jsx'
import GitHub, { gitHubInfoLoader } from './components/GitHub/GitHub.jsx'


// const router = createBrowserRouter([
//   {
//     path : "/",
//     element : <Layout />,
//     children : [
//       {
//         path : "",
//         element : <Home />
//       },
//       {
//         path : "/about",
//         element : <About />
//       },
//       {
//         path : "/contact",
//         element : <ContactUs />
//       },
//       {
//         path : "/user/:userid",
//         element : <User />
//       },
//       {
//         loader : {gitHubInfoLoader},
//         path : "/github",
//         element : <GitHub />
//       }
//     ] 
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<ContactUs />} />
      <Route path='user/:userid' element={<User />} />
      <Route 
      loader={gitHubInfoLoader}
      path='github' 
      element={<GitHub />}
       />
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
