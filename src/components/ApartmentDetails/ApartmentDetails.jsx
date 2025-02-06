import React from 'react';

export default function Details() {
  return (
    <>
      <h2>Details</h2>
      <div className="container mx-auto p-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-6 rounded-lg shadow-md self-start flex flex-col gap-6">
          {/* Properties Section */}
          <div className="text-right">
            <h2 className="text-xl font-semibold mb-4">Search for Properties</h2>
            <input
              type="text"
              placeholder="Search location..."
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="number"
              placeholder="Min Price"
              className="w-full p-2 border rounded mb-3"
            />
            <input
              type="number"
              placeholder="Max Price"
              className="w-full p-2 border rounded mb-3"
            />
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
              Search
            </button>
          </div>

          {/* Agent Info Section */}
          <div className="agent-info p-6 bg-gray-50 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Property Agent</h2>
            <p className="font-bold">Egy Property</p>
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg mt-2">
              Contact
            </button>
          </div>

          {/* Similar Properties Section */}
          <div className="similar-properties p-6 bg-gray-50 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Similar Properties</h2>
            <ul className="space-y-2 text-lg text-gray-800">
              <li>2 Bedroom Apartments for Sale in 6th October</li>
              <li>Residential Properties for Sale in Giza</li>
              <li>Properties in Badya Palm Hills Compound</li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
          {/* Image Gallery */}
          <div className="gallery flex gap-6 overflow-x-auto py-4 scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
            <img
              src="11.png"
              alt="Property Image"
              className="w-3/4 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            />
            <div className="flex flex-col gap-2 w-1/4">
              <img
                src="22.png"
                alt="Additional Image"
                className="rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
              />
              <img
                src="33.png"
                alt="Additional Image"
                className="rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
              />
              <img
                src="44.png"
                alt="Additional Image"
                className="rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
              />
              <img
                src="55.png"
                alt="Additional Image"
                className="rounded-lg shadow-md hover:brightness-110 hover:scale-105 transition duration-300"
              />
            </div>
          </div>

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

          {/* Mortgage Calculator */}
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200 max-w-md">
            <h2 className="text-xl font-bold">Mortgage Calculator</h2>
            <p className="text-gray-600 mb-4 text-sm">
              Calculate your monthly installment to buy this property
            </p>

            <div className="mb-3">
              <label className="block text-sm font-semibold">Property Value</label>
              <input
                type="range"
                min="1000000"
                max="50000000"
                defaultValue="11707000"
                className="w-full accent-green-600"
              />
              <input
                type="text"
                defaultValue="EGP 11,707,000"
                className="w-full mt-1 p-1 border rounded text-left text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold">Loan Term</label>
              <input
                type="range"
                min="5"
                max="30"
                defaultValue="20"
                className="w-full accent-green-600"
              />
              <input
                type="text"
                defaultValue="20 Years"
                className="w-full mt-1 p-1 border rounded text-left text-sm"
              />
            </div>

            <div className="mb-3">
              <label className="block text-sm font-semibold">Down Payment</label>
              <input
                type="range"
                min="10"
                max="50"
                defaultValue="20"
                className="w-full accent-gray-400"
              />
              <div className="flex justify-between mt-1">
                <input
                  type="text"
                  defaultValue="20%"
                  className="w-1/4 p-1 border rounded text-center text-sm"
                />
                <input
                  type="text"
                  defaultValue="EGP 2,341,400"
                  className="w-1/2 p-1 border rounded text-left text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}