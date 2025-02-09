import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Link, NavLink, useNavigate } from 'react-router-dom';

export default function Navbarr() {
  let navigate = useNavigate();
  function logout() {
    navigate('/login')

  }
  return (
    <>
      <Navbar fluid className='fixed top-0 left-0 right-0 z-10 shadow-md bg-[#d9d9d9]  shadow-gray-400'>
        <Link to={'/'}>
          <Navbar.Brand>
            <img src="src/assets/Collage/Logo.png" className="mr-1 h-16 " alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold text-gray-700 shadow-sm dark:text-white">House Finder</span>
          </Navbar.Brand>
        </Link>

        {

          // <div className="flex vip md:order-2 z-30">
          //   <div className="md:flex hidden">
          //     <Link to={'/wishList'} className='mr-3'>

          //       <button type="button" class="relative inline-flex items-center mr-3  justify-center text-sm font-medium text-center text-white ">
          //         <i className='fa-regular fa-heart text-2xl text-[#156faf] '></i>
          //         <span class="sr-only">Notifications</span>
          //         <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
          //       </button>

          //     </Link>
          //     <Dropdown
          //       arrowIcon={false}
          //       inline
          //       label={
          //         <i className="fa-regular fa-user text-xl"></i>
          //       }
          //     >
          //       <Dropdown.Header>
          //         <span className="block text-lg font-bold">Hello,</span>
          //         <span className="block truncate text-lg font-medium mr-14">House Finder</span>
          //       </Dropdown.Header>
          //       <div className="flex ay flex-col py-[4px] ">
          //         <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
          //           <img className='w-6' src="src/assets/building-check-svgrepo-com.svg" alt="" />
          //           <Link to={''} className=''>My Ads</Link>
          //         </div>
          //         <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
          //           <img className='w-6' src="src/assets/setting-4-svgrepo-com.svg" alt="" />
          //           <Link to={''}>Settings</Link>
          //         </div>
          //         <div className=" flex items-center gap-2 px-4 hover:bg-gray-100 transition-all duration-200">
          //           <img className='w-6' src="src/assets/logout-2-svgrepo-com.svg" alt="" />
          //           <button className='bg-transparent p-0' onClick={logout}>Logout</button>
          //         </div>
          //       </div>
          //     </Dropdown>
          //   </div>

          //   <Navbar.Toggle />
          // </div>



          <div className="flex vip md:order-2">


            <Dropdown
              arrowIcon={false}
              inline
              label={
                <i className="fa-regular fa-user text-xl"></i>
              }
            >
              <Dropdown.Header className='flex-col flex '>

                <NavLink to={'login'} className={'mb-3'}>Login</NavLink>
                <NavLink to={'signUp'}>Sign Up</NavLink>
              </Dropdown.Header>

            </Dropdown>

            <Navbar.Toggle />
          </div>
        }

        <Navbar.Collapse >
          <div className="md:hidden flex justify-end mb-4">
            <Link to={'/wishList'} className='mr-3'>

              <button type="button" class="relative inline-flex items-center mr-3  justify-center text-sm font-medium text-center text-white ">
                <i className='fa-regular fa-heart text-2xl text-[#156faf] '></i>
                <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
              </button>

            </Link>


            <Dropdown
              arrowIcon={false}
              inline
              label={
                <i className="fa-regular fa-user text-xl"></i>
              }
            >
              <Dropdown.Header>
                <span className="block text-lg font-bold">Hello,</span>
                <span className="block truncate text-lg font-medium mr-14">House Finder</span>
              </Dropdown.Header>
              <div className="flex ay flex-col py-[4px] ">
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                  <img className='w-6' src="src/assets/building-check-svgrepo-com.svg" alt="" />
                  <Link to={''} className=''>My Ads</Link>
                </div>
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                  <img className='w-6' src="src/assets/setting-4-svgrepo-com.svg" alt="" />
                  <Link to={''}>Settings</Link>
                </div>
                <div className=" flex items-center gap-2 px-4 hover:bg-gray-100 transition-all duration-200">
                  <img className='w-6' src="src/assets/logout-2-svgrepo-com.svg" alt="" />
                  <button className='bg-transparent p-0' onClick={logout}>Logout</button>
                </div>
              </div>
            </Dropdown>
          </div>

          <NavLink className={'actLink text-lg mb-3 md:mb-0'} to={'signUp'}>
            Home
          </NavLink >
          <NavLink className={'text-lg actLink mb-3 md:mb-0'} to={'resetPass'}>About</NavLink >
          <NavLink className={'text-lg actLink mb-3 md:mb-0'} to={'forgetPassword'}>Development</NavLink >
          <NavLink className={'text-lg actLink mb-3 md:mb-0'} to={'verifyCode'}>Contact Us</NavLink >
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}




