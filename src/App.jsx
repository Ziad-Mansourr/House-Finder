import './App.css'
import { createBrowserRouter, createHashRouter, RouterProvider} from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'
import "flowbite";
import Home from './components/Home/Home'
import Apartment from './components/Apartment/Apartment.jsx'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import Layout from './components/Layout/Layout'
import VerifyCode from './components/VerifyCode/VerifyCode'
import ResetPassword from './components/ResetPassword/ResetPassword'
import ApartmentDetails from './components/ApartmentDetails/ApartmentDetails.jsx'
import Profile from './components/Profile/Profile.jsx'
import Setting from './components/Setting/Setting.jsx'
import Sell from './components/sell/sell.jsx'
import Wishlist from './components/Wishlist/Wishlist.jsx';
import Admin from './components/Admin/Admin.jsx'
import DashBoard from './components/DashBoard/DashBoard.jsx'
import UserContextProvider from './context/userContext.jsx';
function App() {

  const queryClient = new QueryClient()

  let router = createHashRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'apartment', element: <Apartment /> },
        { path: 'sell', element: <Sell /> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        { path: 'login', element: <Login /> },
        { path: 'signUp', element: <SignUp /> },
        { path: 'verifyCode', element: <VerifyCode /> },
        { path: 'resetPass', element: <ResetPassword /> },
        { path: 'profile', element: <Profile /> },
        { path: 'setting', element: <Setting /> },
        {path: 'apartmentDetailes', element:  <ApartmentDetails/>},
        {path: 'wishlist', element:  <Wishlist/>},
  
      ]
    },
    {path: 'admin', element: <Admin/>},                 
    {path: 'dashBoard', element: <DashBoard/>},   

  ])

  return (
    <>


      <UserContextProvider>
      <RouterProvider router={router}></RouterProvider>
      </UserContextProvider>

    </>
  )
}
export default App
