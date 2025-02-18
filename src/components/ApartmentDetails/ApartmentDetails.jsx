import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
export default function ApartmentDetails() {
  return (
    <div className="   w-[92%] md:w-[87%] mx-auto pt-7">
      {/* Image Gallery */}
      <div className="gallery flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="h-[300px] lg:w-3/4 w-full rounded-md md:h-[480px] relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            className="h-full rounded-lg"
          >
            <SwiperSlide>
              <div className="flex h-full items-center justify-center bg-gray-400">
                <img
                  src="11.png"
                  alt="Property Image"
                  className="w-full rounded-lg h-[300px] md:h-[480px] shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full items-center justify-center bg-gray-400">
                <img
                  src="11.png"
                  alt="Property Image"
                  className="w-full rounded-lg shadow-lg h-[300px] md:h-[480px] transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex h-full items-center justify-center bg-gray-400">
                <img
                  src="11.png"
                  alt="Property Image"
                  className="w-full rounded-lg shadow-lg h-[300px] md:h-[480px] transform hover:scale-105 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          </Swiper>

          {/* أزرار التنقل المخصصة */}
          <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full w-8 h-8 flex items-center justify-center">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full w-8 h-8 flex items-center justify-center">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="lg:flex flex-col gap-4 hidden overflow-hidden w-1/4">
          <img
            src="22.png"
            alt="Additional Image"
            className="rounded-lg h-[230px] shadow-md transform hover:scale-105 transition duration-300"
          />
          <img
            src="33.png"
            alt="Additional Image"
            className="rounded-lg h-[230px] shadow-md transform hover:scale-105 transition duration-300"
          />
          {/* <img src="44.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
          <img src="55.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" /> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row-reverse gap-6 mt-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-6 rounded-lg order-1 lg:-order-1 self-start flex lg:flex-col gap-6">
          {/* Real estate agent card */}

          <div className="w-[35%] lg:w-full h-52 lg:h-64  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div className="flex  flex-col pt-4 items-center pb-10 ">
              <div className="w-[60px] h-[60px] mb-3 rounded-full bg-gray-300 flex justify-center items-center text-2xl font-semibold text-blue-800 ">
                Z
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                Fatma Ahmed
              </h5>

              <div className="flex mt-4 lg:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white border-2 border-gray-200 rounded-lg hover:bg-gray-100"
                >
                  <i className="fa-brands fa-whatsapp text-green-600 text-3xl "></i>
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-lg font-medium text-gray-900 text-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 "
                >
                  <i class="fa-solid fa-phone text-blue-800 pr-3"></i>
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Similar Properties Section */}
          <div className=" block order-1 lg:my-6 border-2 rounded-md shadow-sm ">
            <h2 className="bg-gray-200 rounded-sm font-semibold p-3 text-black">
              Recommended searches
            </h2>
            <div className="p-4 ">
              <a href="" className="text-gray-600">
                {" "}
                <p className="pt-3">New Cairo Technological University</p>
              </a>
              <a href="" className="text-gray-600">
                <p className="pt-3">Cairo University</p>
              </a>
              <a href="" className="text-gray-600">
                <p className="pt-3">Ain Shams University</p>
              </a>
              <a href="" className="text-gray-600">
                <p className="pt-3">Helwan University</p>
              </a>
              <a href="" className="text-gray-600">
                <p className="pt-3">Alexandria University</p>
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1  space-y-6">
          {/* Property Details */}
          <div className="property-details">
            <h1 className="text-4xl font-bold mb-2  text-blue-900 ">
              {" "}
              <span className=" font-serif font-medium">EGP</span> 11,707,000
            </h1>
            <p className="text-gray-800 font-sans font-semibold">
              Apartment for Sale in Uptown Cairo, Cairo
            </p>
            <ul className="mt-5 space-y-3 text-lg text-gray-800 ">
              <span className="mr-4">
                <i className="fa-solid fa-bed ml-2"></i> 2 Beds
              </span>
              <span className="mr-4">
                <i className="fa-solid fa-bath ml-2"></i> 2 baths
              </span>
              <span className="mr-4">
                <i className="fa-solid fa-ruler-combined text-lg ml-2"></i> 145
                Sq.M{" "}
              </span>
            </ul>
            <p className="mt-3 text-gray-700 text-lg font-medium">
              Furnished apartments in installments in Uptown Cairo Emaar for
              sale uptown Cairo, A two-bedroom apartment in a prime location
              with a great view.
            </p>
          </div>

          {/* Additional Property Information */}
          <div className="">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-blue-900">
              Property Information
            </h2>
            <div className="grid lg:grid-cols-2  gap-3 text-lg ">
              <p className="border-b-2 flex justify-around  border-gray-100  lg:w-[70%] py-3 lg:text-xl">
                <p>Type</p>
                <span className="font-semibold ml-16 lg:ml-8"> Apartment</span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>The Floor </p>
                <span className="font-semibold ml-16 lg:ml-8">First floor</span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>Property Number</p>
                <span className="font-semibold ml-16 lg:ml-8">45A</span>
              </p>

              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>Furnishing</p>
                <span className="font-semibold ml-16 lg:ml-8">Furnished</span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p> Date Added</p>
                <span className="font-semibold ml-16 lg:ml-7">
                  January 29, 2025
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
