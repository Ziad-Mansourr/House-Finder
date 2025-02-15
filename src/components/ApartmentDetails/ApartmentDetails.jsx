import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Details() {
  return (
    <div className="bg-gray-100">
      <h2 className="text-2xl font-bold text-center my-4">Details</h2>
      <div className="container mx-auto p-6">
        {/* Swiper Slider */}
        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            className="rounded-lg shadow-lg"
          >
            <SwiperSlide>
              <img
                src="11.png"
                alt="Property Image"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="22.png"
                alt="Additional Image"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="33.png"
                alt="Additional Image"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="44.png"
                alt="Additional Image"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="55.png"
                alt="Additional Image"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* باقي المحتوى */}
        <div className="flex flex-col md:flex-row-reverse gap-6 mt-6">
          {/* Sidebar */}
          <aside className="w-full md:w-1/4 p-6 rounded-lg shadow-md self-start flex flex-col gap-6">
            {/* Agent Info Section */}
            <div className="agent-info p-6 bg-gray-50 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Property Agent</h2>
              <p className="font-bold">Egy Property</p>
              <div className="flex gap-2 mt-2">
                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-4 py-2 bg-green-500 text-white rounded-lg flex items-center justify-center hover:bg-green-600 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 0 1 8.17 15.76l-1.65-1.65A8 8 0 1 0 12 20a8 8 0 0 0 0-16zm0 2a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-1 3v6h2v-2h2v-2h-2V7h-2z" />
                  </svg>
                  WhatsApp
                </a>
                {/* Contact Button */}
                <button className="w-1/2 px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center justify-center hover:bg-blue-600 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M2 3h20v18H2V3zm2 2v14h16V5H4zm8 2a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1zm-4 2a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm8 0a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1z" />
                  </svg>
                  Contact
                </button>
              </div>
            </div>

            {/* Similar Properties Section */}
            <div className="similar-properties p-6 bg-gray-50 border rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-3">Similar Properties</h2>
              <ul className="space-y-2 text-lg text-gray-800">
                <li>Cairo University</li>
                <li>Ain Shams University</li>
                <li>Alexandria University</li>
                <li>Helwan University</li>
                <li>6th of October University</li>
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Property Details */}
            <div className="property-details">
              <h1 className="text-3xl font-extrabold mb-2">
                Apartment for Sale in Uptown Cairo
              </h1>
              <p className="text-2xl text-green-600 font-bold mb-4">
                EGP 11,707,000
              </p>
              <p className="mt-3 text-gray-700 text-lg">
                A two-bedroom apartment in a prime location with a great view.
              </p>
              <ul className="mt-5 space-y-3 text-lg text-gray-800">
                <li>🏠 <strong>Area:</strong> 145 sqm</li>
                <li>🛏️ <strong>Bedrooms:</strong> 2</li>
                <li>🚿 <strong>Bathrooms:</strong> 2</li>
                <li>📍 <strong>Location:</strong> Uptown Cairo</li>
                <li>📅 <strong>Year Built:</strong> 2025</li>
              </ul>
            </div>

            {/* Additional Property Information */}
            <div className="property-info">
              <h2 className="text-2xl font-bold mb-4">Property Information</h2>
              <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
                <div className="space-y-2">
                  <p>
                    <strong>Property Type:</strong> Apartment
                  </p>
                  <p>
                    <strong>Offer Type:</strong> For Sale
                  </p>
                  <p>
                    <strong>Reference Number:</strong> 4I3MoD-5000549 - Bayut
                  </p>
                  <p>
                    <strong>Construction Status:</strong> Under Construction
                  </p>
                </div>
                <div className="space-y-2">
                  <p>
                    <strong>Furnishing:</strong> Unfurnished
                  </p>
                  <p>
                    <strong>Date Added:</strong> January 29, 2025
                  </p>
                  <p>
                    <strong>Ownership Status:</strong> First Occupancy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}