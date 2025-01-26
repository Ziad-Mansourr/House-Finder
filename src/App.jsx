import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast';
import "flowbite";
import Home from './components/Home/Home'
import About from './components/About/About'
function App() {

  const queryClient = new QueryClient()
   
  let router = createHashRouter([
    {
    }
  ])
  return (
    <>
 {/* <Home/> */}
 <About/>
    </>
  )
}

export default App
