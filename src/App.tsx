import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Compoments/Layout/Layout'

 const router =createBrowserRouter([
  {path:'/',element:<Layout/> , children:[
    {path:'/',element:<h1>Home</h1>},
    {path:'/about',element:<h1>About</h1>},
    {path:'/contact',element:<h1>Contact</h1>},

  ]}
])


export default function App() {
  return <>
<RouterProvider router={router}/>
  
  </>
}
