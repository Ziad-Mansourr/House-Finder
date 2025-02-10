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
import { Link, NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
{/* part one */}
<div className="mt-0 relative h-[520px] flex flex-col justify-between items-center"
    style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-2xl mb-4">Discover Your New Rental Home</h1>
        <button className="bg-white  px-8 py-3  text-[#054E98] text-[14px] rounded-tr-2xl rounded-bl-2xl">Properties</button>

        <div className="max-w-4xl bg-white p-6 py-10 rounded-lg shadow-lg mt-8  self-center relative z-10 w-[90%]">

            <div className="grid grid-cols-3 gap-4 text-right items-center">

                <div className="col-span-3 flex flex-col sm:hidden items-center gap-4">
                    <input type="text" className="w-full p-2 border rounded text-black text-[12px]"  placeholder="Enter location" />
                    <Link to={ '/apartment' } className="text-white w-full px- 5 py-4 rounded-lg bg-[#054E98] text-center text-[14px] hover:bg-blue-900 duration-300">Search</Link>
                </div>

                <div className="col-span-3 hidden sm:flex items-center justify-start gap-2 mb-3">
                <span className="w-[80px] lg:w-[120px] text-[#054E98] text-[23px] font-semibold pr-6">For Rent</span>

                    <input type="text" className="flex-1 p-2 border rounded z-10 text-black text-[14px]"  placeholder="Enter location" />
                    
                    <Link to={'/apartment'} className="text-white rounded-lg bg-[#054E98] px-10 py-3 text-[15px] ml-5 hover:bg-blue-800 duration-300">Search</Link>

                </div>

                <div className="sm:flex hidden">
                    <select className="w-full p-2 border rounded z-10 text-black text-[13px] bg-white">
                        <option value="f" disabled selected>Residential</option>
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

<div className="p-10 w-[88%] mx-auto mb-9">
  <h2 className="text-xl font-semibold mb-6">DEVELOPMENTS</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className="relative group">
      <img src={cairo} alt="Cairo University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Cairo University
      </div>
    </div>
    <div className="relative group">
      <img src={AinShams} alt="Ain Shams University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div> 
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Ain Shams University
      </div>
    </div>
    <div className="relative group">
      <img src={Alexandria} alt="Alexandria University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Alexandria University
      </div>
    </div>
    <div className="relative group">
      <img src={Aswan} alt="Aswan University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div> 
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Aswan University
      </div>
    </div>
    <div className="relative group">
      <img src={Helwan} alt="Helwan University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div> 
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Helwan University
      </div>
    </div>
    <div className="relative group">
      <img src={NCT} alt="New Cairo Technological University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        New Cairo Technological University
      </div>
    </div>
    <div className="relative group">
      <img src={assiut} alt="Assiut University" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div> 
      <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
        Assiut University
      </div>
    </div>
  </div>
</div>
  </>
  );
}



