import React, { useEffect, useMemo, useState } from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink, useLocation, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-scroll";
import * as lnk from "react-router-dom";

export default function Navbarr() {
  let navigate = useNavigate();
  function logout() {
    navigate("/login");
  }
  
  const [activeNav, setActiveNav] = useState("home");
  let x = useLocation();
  useMemo(()=>{
    (x.pathname === '/') ? setActiveNav(activeNav) : setActiveNav('');
  } , [x])
  function active(x) {
    setActiveNav(x);
    navigate('/');
  }
  const home = () => {
    navigate("/");
  };

  return (
    <>
      <Navbar
        fluid
        className="fixed top-0 left-0 right-0 z-20 shadow-md bg-[#f0efef]  shadow-gray-400"
      >
        <button className="bg-transparent p-0 m-0 text-start" onClick={home}>
          <Navbar.Brand>
            <img
              src="Collage/Logo.png"
              className=" h-16 "
              alt="Flowbite React Logo"
            />
            <div className="block mt-2">
              <p className="text-[27px] leading-[20px] font-serif text-[#054E98]">
                House
              </p>
              <span className="font-serif text-lg text-[#286EBE]">Finder</span>
            </div>
          </Navbar.Brand>
        </button>

        {
          <div className="flex vip md:order-2 z-30">
            <div className="md:flex hidden">
              <lnk.Link to={'/wishList'} className='mr-3'>

                <button type="button" class="relative inline-flex items-center mr-3  justify-center text-sm font-medium text-center text-white ">
                  <i className='fa-regular fa-heart text-2xl text-[#156faf] '></i>
                  <span class="sr-only">Notifications</span>
                  <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">20</div>
                </button>

              </lnk.Link>
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
                    <lnk.Link to={'/profile'} className=''>My Ads</lnk.Link>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                    <img className='w-6' src="src/assets/setting-4-svgrepo-com.svg" alt="" />
                    <lnk.Link to={'/setting'}>Settings</lnk.Link>
                  </div>
                  <div className=" flex items-center gap-2 px-4 hover:bg-gray-100 transition-all duration-200">
                    <img className='w-6' src="src/assets/logout-2-svgrepo-com.svg" alt="" />
                    <button className='bg-transparent p-0' onClick={logout}>Logout</button>
                  </div>
                </div>
              </Dropdown>
            </div>

            <Navbar.Toggle />
          </div>

          // <div className="flex vip md:order-2">
          //   <Dropdown
          //     arrowIcon={false}
          //     inline
          //     label={<i className="fa-regular fa-user text-xl"></i>}
          //     className="rounded-br-3xl  rounded-tl-3xl "
          //   >
          //     <Dropdown.Header className="flex-col flex px-12  ">
          //       <NavLink to={"login"} className={"mb-3"}>
          //         Login
          //       </NavLink>
          //       <NavLink to={"signUp"}>Sign Up</NavLink>
          //     </Dropdown.Header>
          //   </Dropdown>

          //   <Navbar.Toggle />
          // </div>
        }

        <Navbar.Collapse>
          <div className="md:hidden flex justify-end mb-4">
            <lnk.Link to={"/wishList"} className="mr-3">
              <button
                type="button"
                class="relative inline-flex items-center mr-3  justify-center text-sm font-medium text-center text-white "
              >
                <i className="fa-regular fa-heart text-2xl text-[#156faf] "></i>
                <span class="sr-only">Notifications</span>
                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  20
                </div>
              </button>
            </lnk.Link>

            <Dropdown
              arrowIcon={false}
              inline
              label={<i className="fa-regular fa-user text-xl"></i>}
            >
              <Dropdown.Header>
                <span className="block text-lg font-bold">Hello,</span>
                <span className="block truncate text-lg font-medium mr-14">
                  House Finder
                </span>
              </Dropdown.Header>
              <div className="flex ay flex-col py-[4px] ">
                <lnk.Link to={'/profile'}>
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                  <img
                    className="w-6"
                    src="src/assets/building-check-svgrepo-com.svg"
                    alt=""
                  />
                 
                    My Ads
                  
                </div>

                </lnk.Link>
                <lnk.Link to={'/setting'}>
                <div className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 transition-all duration-200">
                  <img
                    className="w-6"
                    src="src/assets/setting-4-svgrepo-com.svg"
                    alt=""
                  />
                  Settings
                </div>
                </lnk.Link>
                <div className=" flex items-center gap-2 px-4 hover:bg-gray-100 transition-all duration-200">
                  <img
                    className="w-6"
                    src="src/assets/logout-2-svgrepo-com.svg"
                    alt=""
                  />
                  <button className="bg-transparent p-0" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>
            </Dropdown>
          </div>

          <button className="bg-transparent p-0 m-0">
            <Link
              onClick={() => active("home")}
              className={
                x.pathname == '/' && activeNav == "home"
                  ? "active text-lg actLink mb-3 md:mb-0"
                  : "text-lg actLink mb-3 md:mb-0"
              }
              to={"home"}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </button>
          <button className="bg-transparent p-0 m-0">
            <Link
              onClick={() => active("about")}
              className={
                x.pathname == '/' && activeNav == "about"
                  ? "active text-lg actLink mb-3 md:mb-0"
                  : "text-lg actLink mb-3 md:mb-0"
              }
              to={"about"}
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </button>
          <button className="bg-transparent p-0 m-0">
            <Link
              onClick={() => active("develop")}
              className={
                x.pathname == '/' && activeNav == "develop"
                  ? "active text-lg actLink mb-3 md:mb-0"
                  : "text-lg actLink mb-3 md:mb-0"
              }
              to={"develop"}
              smooth={true}
              duration={500}
            >
              Development
            </Link>
          </button>
          <button className="bg-transparent p-0 m-0">
            <Link
              onClick={() => active("contact")}
              className={
                x.pathname == '/' && activeNav == "contact"
                  ? "active text-lg actLink mb-3 md:mb-0"
                  : "text-lg actLink mb-3 md:mb-0"
              }
              to={"contact"}
              smooth={true}
              duration={500}
            >
              Contact Us
            </Link>
          </button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}