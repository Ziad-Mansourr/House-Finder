import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast';
import "flowbite";
import SignUp from './components/SignUp/SignUp'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import Layout from './components/Layout/Layout'
import VerifyCode from './components/VerifyCode/VerifyCode'
function App() {

  const queryClient = new QueryClient()
   
  let router = createHashRouter([
    {
      path: '', element: <Layout /> , children: [
      {path: 'forgetPassword', element: <ForgetPassword />},
      {path: 'signUp', element: <SignUp />},
      {path: 'verifyCode', element: <VerifyCode />}

    ]}
    
  ])

  // forgetPassword#/forgetPassword
  // signUp#/signUp
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
