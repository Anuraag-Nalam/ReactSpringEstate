import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LayOut from './components/LayOut';
import Home from './pages/Home';
import About from './pages/About';
import AddProperty from './pages/addProperty';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayOut />,
    children: [
      {
        // outlet component
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: '/addProperty',
        element: <AddProperty />
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