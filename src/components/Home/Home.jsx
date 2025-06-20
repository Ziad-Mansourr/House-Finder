import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import aboutImage from "../../img/Homee.jpg";
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
import axiosInstance from "../../services/axiosInstance";
import PricingCard from "../PricingCard/PricingCard";
import { UnitContext } from "../../context/UnitContext";

export default function Home() {
  const [filterRes, setFilterRes] = useState("Residential");
  const [activeB, setActiveB] = useState("");
  const [activeBt, setActiveBt] = useState("");
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);
  const navigate = useNavigate();

   let {getUnit , setUnit} = useContext(UnitContext);
   async function handlePrice(values) {
    console.log(values);
    let {data} = await getUnit(values.location , filterRes , activeB, activeBt, values.start, values.end);
    setUnit(data?.data?.units);
  }
  const handleUniversityClick = async (universityName) => {
    try {
      const res = await axiosInstance.get("/units");
      const allUnits = res.data.data.units;
      const filtered = allUnits.filter((unit) =>
        unit.description?.toLowerCase().includes(universityName.toLowerCase())
      );
      { token != null ? navigate("/view", { state: { filteredUnits: filtered } }) : navigate("/login") }
    } catch (err) {
      console.error("Error fetching units:", err);
    }
  };

  function filBad(word) {
    setActiveB(word);
  }

  function filBat(word) {
    setActiveBt(word);
  }

  // Validation Schema for Contact Form
  const contactSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    message: yup.string().required("Message is required"),
  });

  const contactFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  return (
    <>
      {/* Part one */}
      <div
        id="home"
        className={"mt-0 relative h-[520px] flex flex-col justify-between items-center"}
        style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl mb-4">Discover Your New Rental Home</h1>
          <button className="bg-white px-8 py-3 text-[#054E98] text-[14px] rounded-tr-2xl rounded-bl-2xl rounded-tl-none rounded-br-none">
            Properties
          </button>

          <div className="max-w-4xl bg-white p-6 py-10 rounded-lg shadow-lg mt-8 self-center relative z-10 w-[90%]">
            <div className="grid grid-cols-3 gap-4 text-right items-center">
              <div className="col-span-3 flex flex-col sm:hidden items-center gap-2">
                <input type="text" className="w-full p-2 border rounded text-black text-[12px]" placeholder="Enter location" />

                <Link
                  to={token == null ? '/login' : "/apartment"}
                  className="text-white w-full px-5 py-4 rounded-lg bg-[#054E98] text-center text-[14px] hover:bg-blue-900 duration-300"
                >
                  Search
                </Link>
              </div>

              <div className="col-span-3 hidden sm:flex items-center justify-start gap-2 mb-3">
                <span className="w-[80px] lg:w-[120px] text-[#054E98] text-[23px] font-semibold pr-2">For Rent</span>
                <input type="text" className="flex-1 p-2 border rounded z-10 text-black text-[14px]" placeholder="Enter location" />
                {

                  <Link
                    to={token == null ? '/login' : "/apartment"}
                    className="text-white rounded-lg bg-[#054E98] px-10 py-3 text-[15px] ml-5 hover:bg-blue-800 duration-300"
                  >
                    Search
                  </Link>
                }
              </div>

              {/* Residential Dropdown */}
              <div className="sm:flex hidden ml-24">
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 font-medium text-sm flex items-center px-8">
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
                        className={`border-2 rounded-3xl ${width} mb-3 ${filterRes === name ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
                          }`}
                      >
                        <button onClick={() => setFilterRes(name)} className="block bg-transparent px-4 py-2 w-full">
                          {name}
                        </button>
                      </li>
                    ))}

                    <li className="pt-3 w-[30%]">
                      <div className="flex justify-start items-center">
                        <button
                          onClick={() => setFilterRes("Residential")}
                          className="flex px-6 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 font-bold"
                        >
                          Reset
                        </button>
                      </div>
                    </li>
                  </ul>
                </Dropdown>
              </div>

              {/* Beds & Baths Dropdown */}
              <div className="sm:flex hidden ml-10">
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
                          className={`border-2 rounded-3xl ${activeB === num ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
                            }`}
                        >
                          <button onClick={() => filBad(num)} className="block bg-transparent px-3 py-1 w-full">
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
                          className={`border-2 rounded-3xl ${activeBt === num ? "bg-blue-200 border-blue-500" : "hover:bg-gray-100"
                            }`}
                        >
                          <button onClick={() => filBat(num)} className="block bg-transparent px-3 py-1 w-full">
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

              {/* Price Dropdown */}
              <div className="sm:flex hidden mr-10">
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 font-medium hover:underline flex items-center px-8">
                      Price (EGP)
                    </span>
                  }
                  dismissOnClick={false}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-80 lg:w-96"
                >
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
                      <button className="px-4 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 font-bold w-[30%]">
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
        <h2 className="text-2xl font-semibold mb-6 uppercase">Most search</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { img: cairo, name: "Cairo University" },
            { img: AinShams, name: "Ain Shams University" },
            { img: Alexandria, name: "Alexandria University" },
            { img: Aswan, name: "Aswan University" },
            { img: Helwan, name: "Helwan University" },
            { img: NCT, name: "New Cairo Technological University" },
            { img: assiut, name: "Assiut University" },
          ].map(({ img, name }) => (
            <div
              key={name}
              className="relative group cursor-pointer"
              onClick={() => handleUniversityClick(name)}
            >
              <img src={img} alt={name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-50"></div>
              <div className="absolute left-4 bottom-[-20%] text-white text-lg font-semibold opacity-0 transition-all duration-500 ease-in-out group-hover:bottom-4 group-hover:opacity-100">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pricing */}
      <section className="w-[90%]  lg:w-[75%] m-auto grid grid-cols-12 gap-6 pb-10 mt-[30px]">
        <div className=" col-span-12">
          <h1 className="text-[30px] text-primary text-center  ">Pricing Packages</h1>
          <p className="text-[15px] text-color text-center mt-[8px] ">Lorem ipsum dolor sit amet elit, sed do eiusmod tempor.</p>
        </div>
        <div className="col-span-12 mt-[20px] flex justify-center flex-col items-center">
          <h2 className="text-[16px]">Save up to 10%</h2>
          <div className="text-[14px] text-color flex gap-x-5 mt-[9px] justify-center items-center">
            Monthly
            <label className="inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked disabled />
              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600" />
            </label>

            AnnualSave
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-[30px]  ">
          <PricingCard head='Basic' salary='199' unit={1} />
        </div>

        <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-[30px]  ">

          <div className="w-full max-w-sm p-4 bg-white border border-[#1967D2] rounded-lg shadow-2xl sm:p-8 ">
            <div className="flex justify-between">
              <h5 className="mb-4 text-[18px] font-medium text-primary ">Standard</h5>
              <h6 className="text-[13px] px-6 h-[30px] text-[#34A853] flex items-center bg-[#E1F2E5] rounded-4xl">Recommended</h6>
            </div>

            <div className="flex items-baseline text-gray-900 ">

              <span className="text-[30px] font-semibold tracking-tight">EGP 449</span>
              <span className="ms-2 text-[18px] text-color ">/ monthly</span>
            </div>
            <ul role="list" className="space-y-7 mt-7 ">
              <li className="flex items-center text-center ">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                </svg>

                <span className="text-[17px] flex justify-center w-[60%] leading-tight text-color  ms-3">4 Unit posting</span>
              </li>
              <li className="flex">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                </svg>

                <span className="text-[14px] flex justify-center w-[60%] leading-tight text-color  ms-3">Unit displayed for 30 days</span>
              </li>
              <li className="flex">
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                </svg>

                <span className="text-[14px] flex justify-center w-[60%] leading-tight text-color  ms-3">Premium Support 24/7</span>
              </li>
            </ul>
            <Link to='https://wa.me/+201155223832' className="text-white mt-[48px] bg-primary font-medium rounded-lg text-[15px] px-5 py-2.5 inline-flex justify-center w-full text-center ">Contact Us</Link>
          </div>
        </div>


        <div className="col-span-12 md:col-span-6 lg:col-span-4 mt-[30px]  ">

          <PricingCard head='Extended' salary='799' unit={6} />
        </div>
      </section>
      {/* Part four - Contact Form */}
      <div className="flex min-h-screen bg-gray-100 p-10 justify-center items-center" id="contact">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-5xl w-full">
          <div className="w-1/2 hidden md:block bg-cover bg-center">
            <img src={contactUs} alt="" />
          </div>

          <div className="w-full md:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-2 text-[#03274c]">Contact us</h2>
            <p className="text-gray-600 text-sm mb-5">Contact us for a quote, help or to join the team.</p>

            <div className="text-gray-700 text-sm mb-4">
              <p>
                <strong>Customer Support:</strong> Available 24/7
              </p>
              <p>
                <strong>Email:</strong> HouseFinder@studio.com
              </p>
              <p>
                <strong>Phone:</strong> 071-246-3165
              </p>
            </div>

            <form onSubmit={contactFormik.handleSubmit}>
              {/* Name Field */}
              <label className="block text-gray-700 text-sm font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={contactFormik.values.name}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                placeholder="Your Name"
                className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none"
              />
              {contactFormik.touched.name && contactFormik.errors.name ? (
                <div className="text-red-500 text-sm mb-2">{contactFormik.errors.name}</div>
              ) : null}

              {/* Email Field */}
              <label className="block text-gray-700 text-sm font-semibold">Email</label>
              <input
                type="email"
                name="email"
                value={contactFormik.values.email}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                placeholder="Your Email"
                className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none"
              />
              {contactFormik.touched.email && contactFormik.errors.email ? (
                <div className="text-red-500 text-sm mb-2">{contactFormik.errors.email}</div>
              ) : null}

              {/* Message Field */}
              <label className="block text-gray-700 text-sm font-semibold">Message</label>
              <textarea
                name="message"
                value={contactFormik.values.message}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                placeholder="Your Message"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded mb-3 focus:border-[#054E98] focus:outline-none"
              />
              {contactFormik.touched.message && contactFormik.errors.message ? (
                <div className="text-red-500 text-sm mb-2">{contactFormik.errors.message}</div>
              ) : null}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#054e98] text-white py-2 rounded hover:bg-[#054689] transition"
              >
                Send Message
              </button>
            </form>

            <div className="mt-5 text-center text-gray-600 text-sm">
              <p className="text-[#04376a]">Follow us</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="#" className="text-gray-600 hover:text-blue-600 hover:scale-105 transition duration-300">
                  Facebook
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-400 hover:scale-105 transition duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-600 hover:text-pink-600 hover:scale-105 transition duration-300">
                  Instagram
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-700 hover:scale-105 transition duration-300">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}