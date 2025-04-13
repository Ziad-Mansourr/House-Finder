import { useState } from "react";
import img from "../../img/about.jpg";
import cairo from "../../img/Cairo University.png";
import AinShams from "../../img/Ain Shams University.png";
import Alexandria from "../../img/Alexandria University.png";
import Aswan from "../../img/Aswan University.png";
import Helwan from "../../img/Helwan University.png";
import NCT from "../../img/New Cairo Technological University.png";
import assiut from "../../img/Assiut University.png";
import contactUs from "../../img/contact us.jpeg";

import { Link } from "react-router-dom";
import { Dropdown } from "flowbite-react";

export default function Home() {
  const [filterRes, setFilterRes] = useState("Residential");
  const [activeB, setActiveB] = useState("");
  const [activeBt, setActiveBt] = useState("");

  function filBad(word) {
    setActiveB(word);
  }

  function filBat(word) {
    setActiveBt(word);
  }

  return (
    <>
      {/* part one */}
      <div id="home"
        className={"mt-0 relative h-[520px] flex flex-col justify-between items-center"}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl mb-4">Discover Your New Rental Home</h1>
          <button className="bg-white px-8 py-3 text-[#054E98] text-[14px] rounded-tr-2xl 
          rounded-bl-2xl rounded-tl-none rounded-br-none">Properties</button>

          <div className="max-w-4xl bg-white p-6 py-10 rounded-lg shadow-lg mt-8 self-center relative z-10 w-[90%]">
            <div className="grid grid-cols-3 gap-4 text-right items-center">
              <div className="col-span-3 flex flex-col sm:hidden items-center gap-2">
                <input type="text" className="w-full p-2 border rounded text-black text-[12px]" placeholder="Enter location" />
                <Link to={"/apartment"} className="text-white w-full px-5 py-4 rounded-lg 
                bg-[#054E98] text-center text-[14px] hover:bg-blue-900 duration-300">Search</Link>
              </div>

              <div className="col-span-3 hidden sm:flex items-center justify-start gap-2 mb-3">
                <span className="w-[80px] lg:w-[120px] text-[#054E98] text-[23px] font-semibold pr-2">For Rent</span>
                <input type="text" className="flex-1 p-2 border rounded z-10 text-black text-[14px]" placeholder="Enter location" />
                <Link to={"/apartment"} className="text-white rounded-lg bg-[#054E98] px-10 py-3
                 text-[15px] ml-5 hover:bg-blue-800 duration-300">Search</Link>
              </div>

              {/* Residential */}
              <div className="sm:flex hidden ml-24 ">
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 font-medium text-sm flex items-center px-8 ">
                      {filterRes}
                    </span>
                  }
                  dismissOnClick={false}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm lg:w-72"
                >
                  <ul className="py-2 pl-5 flex flex-wrap gap-x-2 text-center text-sm text-gray-700">
                    {[
                      { name: "Apartment", width: "w-1/2" },
                      { name: "Room", width: "w-[35%]" },
                      { name: "Villa", width: "w-[35%]" },
                      { name: "Duplex", width: "w-[40%]" },
                    ].map(({ name, width }) => (
                      <li
                        key={name}
                        className={`border-2 rounded-3xl ${width} mb-3 ${filterRes === name
                          ? "bg-blue-200 border-blue-500"
                          : "hover:bg-gray-100"
                          }`}
                      >
                        <button
                          onClick={() => setFilterRes(name)}
                          className="block bg-transparent px-4 py-2 w-full"
                        >
                          {name}
                        </button>
                      </li>
                    ))}

                    <li className="pt-3 w-[30%]">
                      <div className="flex  justify-start items-center">
                        <button
                          onClick={() => setFilterRes("Residential")}
                          className="flex px-6 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 font-bold">
                          Reset
                        </button>
                      </div>
                    </li>
                  </ul>
                </Dropdown>
              </div>

              {/* Dropdown for Beds & Baths */}
              <div className="sm:flex hidden  ml-10">
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 font-medium text-sm flex items-center px-8">
                      Beds & Baths
                    </span>
                  }
                  dismissOnClick={false}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56"
                >
                  <div className="p-3">
                    <h2 className="font-bold text-left pb-1">Beds</h2>
                    <ul className="grid grid-cols-3 gap-1 text-xs text-gray-700">
                      {["1", "2", "3", "4", "5", "6+"].map((num) => (
                        <li
                          key={num}
                          className={`border-2 rounded-3xl ${activeB === num
                              ? "bg-blue-200 border-blue-500"
                              : "hover:bg-gray-100"
                            }`}
                        >
                          <button
                            onClick={() => filBad(num)}
                            className="block bg-transparent px-3 py-1 w-full"
                          >
                            {num}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <h2 className="font-bold mt-4 text-left pb-1">Baths</h2>
                    <ul className="grid grid-cols-3 gap-1 text-xs text-gray-700">
                      {["1", "2", "3", "4", "5", "6"].map((num) => (
                        <li
                          key={num}
                          className={`border-2 rounded-3xl ${activeBt === num
                              ? "bg-blue-200 border-blue-500"
                              : "hover:bg-gray-100"
                            }`}
                        >
                          <button
                            onClick={() => filBat(num)}
                            className="block bg-transparent px-3 py-1 w-full"
                          >
                            {num}
                          </button>
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => {
                        filBad("");
                        filBat("");
                      }}
                      className="px-4 mx-2 my-2 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 font-bold mt-5"
                    >
                      Reset
                    </button>
                  </div>
                </Dropdown>
              </div>

              {/* Dropdown for Price */}
              <div className="sm:flex hidden mr-10 ">
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 font-medium hover:underline flex items-center px-8">
                      Price (EGP) </span>}
                  dismissOnClick={false}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-80 lg:w-96" >
                  <div className="p-3">
                    <div className="flex items-center">
                      <input
                        name="start"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5"
                        placeholder="0"
                      />
                      <span className="mx-2 text-gray-500">to</span>
                      <input
                        name="end"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5"
                        placeholder="Any"
                      />
                    </div>

                    <div className="flex justify-evenly mt-7">
                      <button className="px-4 py-2  hover:bg-gray-100 border-spacing-3 border-blue-800 font-bold w-[30%]">
                        Reset
                      </button>

                      <button
                        onClick={() => { }}
                        className="px-4 py-2 text-white bg-blue-800 border-blue-900 w-[40%]"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* part three */}
      <div id="develop" className="p-10 w-[88%] mx-auto mb-9">
        <h2 className="text-2xl font-semibold mb-6 uppercase ">Most search</h2>
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

      {/* Part four */}
      <div className="flex min-h-screen bg-gray-100 p-10 justify-center items-center" id="contact">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-5xl w-full">
          <div className="w-1/2 hidden md:block bg-cover bg-center">
            <img src={contactUs} alt="" />
          </div>

          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-2 text-[#03274c]">Contact us</h2>
            <p className="text-gray-600 text-sm mb-5">Contact us for a quote, help or to join the team.</p>

            <div className="text-gray-700 text-sm mb-4">
              <p><strong>Customer Support:</strong> Available 24/7</p>
              <p><strong>Email:</strong> HouseFinder@studio.com</p>
              <p><strong>Phone:</strong> 071-246-3165</p>
            </div>

            <form>
              <label className="block text-gray-700 text-sm font-semibold">Name</label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none" placeholder="Your Name" />

              <label className="block text-gray-700 text-sm font-semibold">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none" placeholder="Your Email" />

              <label className="block text-gray-700 text-sm font-semibold">Message</label>
              <textarea className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none" placeholder="Your Message" rows="4"></textarea>

              <button className="w-full bg-[#054e98] text-white py-2 rounded hover:bg-[#054689] transition">Send Message</button>
            </form>

            <div className="mt-5 text-center text-gray-600 text-sm">
              <p className="text-[#04376a]">Follow us</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition duration-300">Facebook</a>
                <a href="#" className="text-gray-600 hover:text-blue-400 hover:scale-105 transition duration-300">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-pink-600 hover:scale-105 transition duration-300">Instagram</a>
                <a href="#" className="text-gray-600 hover:text-blue-700 hover:scale-105 transition duration-300">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}