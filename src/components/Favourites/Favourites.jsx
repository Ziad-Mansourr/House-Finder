import React from "react";

const FavouritesPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full">
        {/* Header Section */}
        <div className="p-4 border-b">
          <p className="text-gray-500 text-sm">Profile</p>
          <h1 className="text-2xl font-bold">Favourites</h1>
        </div>

        {/* Property Card */}
        <div className="bg-white rounded-lg overflow-hidden">
          {/* Property Image */}
          <img
            src="src\components\Favourites\apartment.png"
            alt="Property Image"
            className="w-full h-48 object-cover"
          />

          {/* Property Details */}
          <div className="p-4 space-y-2">
            {/* Price and Favourite Icon */}
            <div className="flex items-center justify-between">
              <span className="text-blue-600 font-bold">EGP 5,700,000</span>
              <span className="text-gray-600 text-sm">Negotiable</span>
              {/* Heart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.02 4.02 4 6.5 4c1.74 0 3.41.81 4.5 2.09C12.09 4.81 13.76 4 15.5 4 17.98 4 20 6.02 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>

            {/* Property Description */}
            <p className="text-gray-700">Stunning Fully Finished Apartment</p>

            {/* Property Features */}
            <div className="flex items-center text-gray-600 text-sm space-x-4">
              <span>🛏️ 3</span>
              <span>🚿 2</span>
              <span>📏 195 sqm</span>
            </div>

            {/* Location and Time */}
            <p className="text-gray-500 text-sm">New Andalous, New Cairo</p>
            <p className="text-gray-400 text-xs">22 hours ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavouritesPage;