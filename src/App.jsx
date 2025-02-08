import { useState } from 'react'
import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import toast, { Toaster } from 'react-hot-toast';
import "flowbite";
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Apartment from './components/apartment/apartment'
import SignUp from './components/SignUp/SignUp'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import Layout from './components/Layout/Layout'
import VerifyCode from './components/VerifyCode/VerifyCode'
import ResetPassword from './components/ResetPassword/ResetPassword'
function App() {

  const queryClient = new QueryClient()
   
  let router = createHashRouter([
    {
      path: '', element: <Layout /> , children: [
      {index:true , element:<Home/>}
      {path: 'apartment', element: <Apartment/>}                         
      {path: 'forgetPassword', element: <ForgetPassword />},
      {path: 'login', element: <Login/>}
      {path: 'signUp', element: <SignUp />},
      {path: 'verifyCode', element: <VerifyCode />},
      {path: 'resetPass', element: <ResetPassword />}

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
