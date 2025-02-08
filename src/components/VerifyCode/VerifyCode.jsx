import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function VerifyCode() {
  return (
    <>
         <section className="bg-[#0c283c] min-h-screen">
            <div className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto pt-28">
            {/* <i className="fa-solid fa-envelope "></i> */}
            <div className="col-span-12 flex justify-center">
            <img className=' ' src="src/assets/c7964f8a7cbdd972045348be39ab269e.png" alt="" />
            </div>
               <h1 className='col-span-12 mt-3 text-2xl md:text-4xl lg:text-4xl text-white'>Get Code From Your Email</h1>
               <h2 className='col-span-12  text-white text-xl mt-6'>Your password will be reset by email Enter the code form Your Email e****@gmail.com</h2>
               <div className="col-span-12 mb-5 mt-11">
                <label htmlFor="verify" className="block mb-2 text-sm font-medium text-white dark:text-white"
                >
                  Verification Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  id="verify"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="EX: 4556"
                  
                />
              </div>
              <div className="col-span-12 flex justify-center items-center">
              <button
                className="text-white bg-blue-700  w-[40%] mb-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Verify
              </button>
                
              </div>
            </div>
          </section>
    </>
  )
}
