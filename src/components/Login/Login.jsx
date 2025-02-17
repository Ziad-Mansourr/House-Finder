import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  
  function show() {
    showPass ? setShowPass(false) : setShowPass(true);
  }
  return (
    <>
      <section className="bg-[#0c283c] min-h-screen">
        <div className="w-[90%] mx-auto px-[15px] items-center py-[30px] grid grid-cols-12">
      

          <div className="col-span-12 mb-5 lg:mb-0  text-center lg:text-start lg:col-span-7">
            <p className="text-[17px] md:text-3xl text-white font-normal mt-8 md:mt-14 mb-7">
              A leading real estate developer in Egypt
            </p>
            <h2 className="text-[19px] md:text-[30px] lg:text-[48px] text-white  font-semibold  leading-tight">
              BE PART OF OUR COMMUNITIES
            </h2>
            <button className="bg-[#054e98] rounded-2xl px-4 mt-5 lg:mt-10 text-white text-xl tracking-wider">
              LEARN MORE
            </button>
          </div>
          <div className="col-span-12  lg:col-span-5">
            <div className=" bg-[#d9d9d9] shadow-md shadow-gray-500 w-full  lg:w-[80%] px-8 lg:ml-10 py-9 rounded-xl ">
              <h2 className="uppercase text-center text-4xl mb-5 tracking-wider font-semibold text-[#0c283c]">
                login
              </h2>
              <form className="max-w-sm md:max-w-lg  lg:max-w-sm mx-auto ">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                <div className="mb-5 relative">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your password
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    id="password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Password"
                  />
                  <button
                    onClick={() => show()}
                    className="p-0 bg-transparent absolute top-9 right-3"
                  >
                   
                    <i
                      className={
                        showPass
                          ? "fa-regular fa-eye"
                          : "fa-regular fa-eye-slash"
                      }
                    ></i>
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <button className="text-white  bg-blue-700  w-[60%] mb-5 py-2.5 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Login
                  </button>
                  <Link
                    to={"/forgetPassword"}
                    className="underline text-[#054E98] mb-3"
                  >
                    Forget Password?
                  </Link>
                  <div className="flex ">
                    <span className="mr-2">Don't have an account?</span>
                    <Link to={"/SignUp"} className="underline text-[#054E98]">
                      Sign Up
                    </Link>
                  </div>
                  <div className="flex justify-center items-center">
                    <Link className=" border-[2px]  mt-3 mr-2 hover:bg-slate-100 border-blue-400 w-[40px] flex items-center justify-center h-[40px] rounded-full transition-all duration-200 ">
                      {" "}
                      <i className="fa-brands fa-google  text-[#054E98]"></i>{" "}
                    </Link>
                    <Link className="border-[2px]  mt-3 mr-2 hover:bg-slate-100 border-blue-400 w-[40px] flex items-center justify-center h-[40px] rounded-full transition-all duration-200">
                      {" "}
                      <i className="fa-brands fa-facebook  text-[#054E98]"></i>{" "}
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
