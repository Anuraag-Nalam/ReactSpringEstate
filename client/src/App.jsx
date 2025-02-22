import React from 'react'
import { createBrowserRouter, RouterProvider, Router, Routes, Route } from 'react-router-dom';
import LayOut from './components/LayOut';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App