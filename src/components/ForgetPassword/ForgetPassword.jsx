import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function ForgetPassword() {
  return (
    <>
         <section className="bg-[#0c283c] min-h-screen">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto pt-56">
               <h1 className='col-span-12 text-center text-3xl md:text-4xl lg:text-6xl text-white'>Forgot Your Password?</h1>
               <h2 className='col-span-12 text-center text-white text-xl mt-6'>Your password will be reset by email</h2>
               <div className="col-span-12 mb-5 mt-11">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  
                />
              </div>
              <div className="col-span-12 flex justify-center items-center">
              <Link to={'/verifyCode'}
                className="text-white bg-blue-700  w-[40%] mb-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </Link>
                
              </div>
            </div>
          </section>
    </>
  )
}
