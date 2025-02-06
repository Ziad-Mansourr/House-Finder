import React from "react";
import img from "../../img/about.jpg";
import aboutImage from "../../img/Homee.jpg";
import logo from "../../img/Logo.png"
import cairo from "../../img/Cairo University.png"
import AinShams from "../../img/Ain Shams University.png"
import Alexandria from "../../img/Alexandria University.png"
import Aswan from "../../img/Aswan University.png"
import Helwan  from "../../img/Helwan University.png"
import NCT  from "../../img/New Cairo Technological University.png"
import assiut  from "../../img/Assiut University.png"
import play from "../../img/app_store-aoAyJ2T_ (1).png"
import os from "../../img/app_store-aoAyJ2T_.png"
export default function About() {
  return (
    <>
{/* part one */}
<div className="mt-8 relative h-[520px] flex flex-col justify-between items-center"
    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl mb-4">Discover Your New Rental Home</h1>
        <button className="bg-white  px-8 py-3 rounded-lg text-[#054E98] text-[14px] hover:bg-blue-800  hover:text-white duration-300">Properties</button>
        <div className="max-w-4xl bg-white p-6 rounded-lg shadow-lg mt-8 w-3/4 self-center relative z-10">

            <div className="grid grid-cols-3 gap-4 text-right items-center">

                <div className="col-span-3 flex flex-col sm:hidden items-center gap-4">
                    <input type="text" className="w-full p-2 border rounded text-black text-[12px]"  placeholder="Enter location" />
                    <button className="text-white w-full px-5 py-4 rounded-lg bg-[#054E98] text-[15px] hover:bg-blue-800 duration-300">Search</button>
                </div>

                <div className="col-span-3 hidden sm:flex items-center justify-start gap-2">
                <span className="w-[80px] lg:w-[120px] text-[#054E98] text-[23px] font-semibold pr-6">For Rent</span>

                    <input type="text" className="flex-1 p-2 border rounded z-10 text-black text-[14px]"  placeholder="Enter location" />
                    
                    <button className="text-white px-14 py-4 rounded-lg bg-[#054E98] text-[11px] ml-5 hover:bg-blue-800 duration-300">Search</button>

                </div>

                <div className="sm:flex hidden">
                    <select className="w-full p-2 border rounded z-10 text-black text-[13px] bg-white">
                        <option value="" disabled selected>Residential</option>
                        <option value="Apartment" className="text-[17px]">Apartment</option>
                        <option value="Room" className="text-[17px]">Room</option>
                    </select>
                </div>

                <div className="flex-col items-center sm:flex hidden">
                    <input type="number" className="w-full p-2 border rounded z-10 text-black text-[13px]" placeholder="Number of rooms & bathrooms"  />
                </div>

                <div className="sm:flex hidden">
                    <input type="number" className="w-full p-2 border rounded z-10 text-black text-[13px]" placeholder="Price (in dollars)" />
                </div>
            </div>
        </div>
    </div>
</div>


{/* part two */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[80%] mx-auto">
  <div>
<div className="flex pt-16">
<img src={logo} className="w-[45px] h-[46px]" alt="" />
<h1 className="text-[35px] md:text-[49px]  text-[#054E98] font-title">About House Finder</h1>
</div>
    <p className="text-[21px] text-[#054E98] pt-4 font-title font-normal max-w-[580px]">This project aims to create an innovative digital platform that
      directly connects students from outside their hometowns in
      Egypt with property owners near various universities. The goal is to
      simplify the search for housing that fits their needs and budgets.
      The platform provides detailed information about available apartments
      in a clear and accessible way, eliminating the need for intermediaries or
      external parties.</p>
  </div>
  <div className="pt-11 pb-11">
    <img src={aboutImage} className="w-[460px] mx-auto object-cover" alt="" />
  </div>
</div>

{/* part three */}
<div className="p-10 w-[88%] mx-auto mb-9" >
  <h2 className="text-xl font-semibold mb-6">DEVELOPMENTS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="relative">
      <img src={cairo} alt="Cairo University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Cairo University</div>
    </div>
    <div className="relative">
      <img src={AinShams} alt="Ain Shams University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Ain Shams University</div>
    </div>
    <div className="relative">
      <img src={Alexandria} alt="Alexandria University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Alexandria University</div>
    </div>
    <div className="relative">
      <img src={Aswan} alt="Aswan University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Aswan University</div>
    </div>
    <div className="relative">
      <img src={Helwan} alt="Helwan University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Helwan University</div>
    </div>
    <div className="relative">
      <img src={NCT} alt="New Cairo Technological University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">New Cairo Technological University</div>
    </div>
    <div className="relative">
      <img src={assiut} alt="Assiut University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">Assiut University</div>
    </div>
  </div>
</div>

{/* part four */}
<footer className=" w-full p-4 bg-[#054E98] shadow-sm md:flex md:items-center 
            md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <div className="flex pr-9 md:order-2">
        <img src={play} alt="Google Play" className="w-28 h-auto" />
        <img src={os} alt="App Store" className="w-28 h-auto ml-3" />
    </div>

    <div className="pl-9 text-[#DEDEDE] text-[15px] leading-[37px] md:order-1">
        <span className="pl-3 w-[15px]">About Us</span> | <span className="pr-3 pl-3">Contact Us</span> | <span className="pl-3 pr-3">Privacy Policy & Terms</span>
        <p className="text-[13px] text-[#C1BFBF]">© 2024-2025 HouseFinder.eg - The Real Estate Platform in Egypt</p>
    </div>
</footer>

  </>
  );
}



