import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Compoments/Layout/Layout';



const router = createBrowserRouter([
  
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: '/', element: <h1>Home Page</h1> },
      { path: '/about', element: <h1>About Page</h1> },
      { path: '/contact', element: <h1>Contact Page</h1> },

      // Add more routes here...

      // This route will match if none of the above routes match
      { path: '*', element: <h1>Page Not Found</h1> },
    ]
  },

])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
