import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function ResetPassword() {
  const [showPass, setShowPass] = useState(false);
  const [showPass1, setShowPass1] = useState(false);
  function show(i) {
    if (!(i)) {
      showPass ? setShowPass(false) : setShowPass(true);
    } else {

      showPass1 ? setShowPass1(false) : setShowPass1(true);
    }
  }
  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <div className="w-[90%] md:w-[60%] lg:w-[40%] grid grid-cols-12 m-auto pt-48">
          <h1 className='col-span-12 text-center text-3xl md:text-4xl lg:text-6xl mb-10 text-white'>Forgot Password</h1>

          <div className="mb-5 col-span-12 relative">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              New password
            </label>
            <input
              type={showPass ? "text" : "password"}
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Password"
            />
            <button onClick={() => show(0)} className="p-0 bg-transparent absolute top-9 right-3"> <i className={showPass ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i> </button>
          </div>
          <div className="mb-5 col-span-12 relative">
            <label
              htmlFor="ConfPassword"
              className="block mb-2 text-sm font-medium text-white dark:text-white"
            >
              Confirm password
            </label>
            <input
              type={showPass1 ? "text" : "password"}
              id="ConfPassword"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Confirm Password"
            />
            <button onClick={() => show(1)} className="p-0 bg-transparent absolute top-9 right-3"> <i className={showPass1 ? "fa-regular fa-eye" : "fa-regular fa-eye-slash"}></i> </button>
          </div>
          <div className="col-span-12 flex justify-center items-center">
            <button
              className="text-white bg-blue-700 mt-3  w-[40%] mb-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Reset
            </button>

          </div>
        </div>
      </section>
    </>
  )
}
