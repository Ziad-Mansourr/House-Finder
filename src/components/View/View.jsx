import React from "react";
import { useLocation, Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BedDouble, Bath, Ruler } from "lucide-react";

export default function View() {
  const location = useLocation();
  const { filteredUnits } = location.state || { filteredUnits: [] };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="p-10 bg-gradient-to-br from-white via-gray-50 to-white min-h-screen">
      <h1 className="w-[90%]  font-serif mt-10 text-blue-900 text-2xl md:text-3xl lg:text-5xl">
       Discover Your Next Home
      </h1>

      {filteredUnits.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {filteredUnits.map((unit, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl hover:shadow-2xl 
                transition-transform duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="relative">
                  <Slider {...settings}>
                    {unit.images?.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`unit image ${i}`}
                        className="w-full h-56 object-cover transition-transform duration-300"
                      />
                    ))}
                  </Slider>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{unit.title}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{unit.description}</p>

                  <div className="flex  items-center text-gray-700 text-sm border-t border-gray-200 pt-3">
                    <div className="flex items-center gap-2">
                      <Ruler className="w-6 h-6  text-indigo-600 stroke-2" />
                      <span className="font-medium pr-5">{unit.size} m²</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BedDouble className="w-6 h-6 text-pink-600 stroke-2" />
                      <span className="font-medium pr-5">{unit.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bath className="w-6 h-6 text-blue-600 stroke-2" />
                      <span className="font-medium">{unit.bathrooms}</span>
                    </div>
                  </div>

                  <div className="mt-4 space-y-1 text-sm text-gray-700">
                    <p><span className="font-semibold text-gray-800">💰 Monthly Price:</span> {unit.monthlyPrice} EGP</p>
                    <p><span className="font-semibold text-gray-800">📍 Address:</span> {unit.address}</p>
                    <p><span className="font-semibold text-gray-800">💵 Deposit:</span> {unit.deposit} EGP</p>
                    <p><span className="font-semibold text-gray-800">🛡 Insurance:</span> {unit.insurance} EGP</p>
                    <p><span className="font-semibold text-gray-800">🏷 Type:</span> {unit.category}</p>
                  </div>

    <a
  href={unit.location}
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block w-full text-center mt-5 bg-blue-900 text-white py-2 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors duration-300"
>
  <i className="fa-solid fa-map-pin pr-2"></i> View on Map
</a>



                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link 
              to="/" 
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r
              from-[#054E98] to-blue-700 text-white font-semibold rounded-full 
              shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 whitespace-nowrap"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              Back to Home
            </Link>
          </div>
        </>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-2xl font-semibold text-gray-600">
            No available units. Please try a different search.
          </h3>
          <Link 
            to="/" 
            className="mt-6 inline-block px-6 py-2 bg-[#054E98] text-white rounded-lg
             hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      )}
    </div>
  );
}
