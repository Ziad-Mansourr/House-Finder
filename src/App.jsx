import './App.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
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
import About from './components/About/About.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WishListContextProvider from './context/userWishlist.jsx';
import { Toaster } from 'react-hot-toast';
import RateContextProvider from './context/userRate.jsx';
import View from './components/View/View.jsx';
import UnitContextProvider from './context/UnitContext.jsx';
function App() {

  const queryClient = new QueryClient();
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
        { path: 'apartmentDetailes/:id', element: <ApartmentDetails /> },
        { path: 'apartmentDetails/:id', element: <ApartmentDetails /> },
        { path: 'wishlist', element: <Wishlist /> },
        { path: 'about', element: <About /> },
        { path: 'view', element: <View/> },


      ]
    },
    { path: 'admin', element: <Admin /> },
    { path: 'dashBoard', element: <DashBoard /> },

  ])

  return (
    <>
    <UnitContextProvider>
      <RateContextProvider>
        <WishListContextProvider>
          <QueryClientProvider client={queryClient}>
            <UserContextProvider>
              <RouterProvider router={router}></RouterProvider>
              <Toaster />
            </UserContextProvider>
          </QueryClientProvider>
        </WishListContextProvider>
      </RateContextProvider>
    </UnitContextProvider>

    </>
  )
}
export default App
