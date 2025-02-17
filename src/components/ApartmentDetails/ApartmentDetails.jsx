import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

export default function Details() {
  return (
    <div className="container mx-auto p-6">
      {/* Image Gallery */}
      <div className="gallery flex gap-6 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <img src="11.png" alt="Property Image" className="w-3/4 rounded-lg shadow-lg transform hover:scale-110 transition duration-300 ease-in-out" />
        <div className="flex flex-col gap-2 w-1/4">
          <img src="22.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
          <img src="33.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
          <img src="44.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
          <img src="55.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row-reverse gap-6 mt-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 p-6 rounded-lg shadow-md self-start flex flex-col gap-6">
          {/* Real estate agent card */}
          <div className="bg-white border rounded-lg shadow p-4 text-center max-w-sm mx-auto">
            <div className="h-12 bg-gray-300 rounded mb-2"></div>
            <h2 className="text-lg font-semibold">Egy Property</h2>
            <p className="text-gray-600">Real Estate Agent: <span className="text-black">Sama Omran</span></p>

            <div className="flex justify-center space-x-2 my-3">
              <button className="bg-green-100 text-green-600 p-2 rounded">
                <span>🟢</span> {/* WhatsApp icon */}
              </button>
              <button className="bg-blue-100 text-blue-600 px-4 py-2 rounded">Call 📞</button>
            </div>

            <a href="#" className="text-blue-600 underline">View all properties</a>
          </div>

          {/* Similar Properties Section */}
          <div className="similar-properties p-6 bg-gray-50 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Similar Properties</h2>
            <ul className="space-y-2 text-lg text-gray-800">
              <li>Cairo University</li>
              <li>Ain Shams University</li>
              <li>Alexandria University</li>
              <li>Helwan University</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Property Details */}
          <div className="property-details">
            <h1 className="text-3xl font-extrabold mb-2">EGP 11,707,000</h1>
            <p className="text-green-600">Apartment for Sale in Uptown Cairo, Cairo</p>
            <ul className="mt-5 space-y-3 text-lg text-gray-800">
              <span>🛏️ 2 rooms</span>
              <span>🚿 2 bathrooms</span>
              <span>📏 145 square meters</span>
            </ul>
            <p className="mt-3 text-gray-700 text-lg">
              Furnished apartments in installments in Uptown Cairo Emaar for sale uptown Cairo, A two-bedroom apartment in a prime location with a great view.
            </p>
          </div>

          {/* Additional Property Information */}
          <div className="property-info">
            <h2 className="text-2xl font-bold mb-4">Property Information</h2>
            <div className="grid grid-cols-2 gap-4 text-lg text-gray-800">
              <div className="space-y-2">
                <p><strong>Property Type:</strong> Apartment</p>
                <p><strong>The Floor:</strong> First floor</p>
                <p><strong>Property Number:</strong> 45A</p>
              </div>
              <div className="space-y-2">
                <p><strong>Furnishing:</strong> Furnished</p>
                <p><strong>Date Added:</strong> January 29, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}