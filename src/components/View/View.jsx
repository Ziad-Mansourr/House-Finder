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
        <div className="space-y-10 mt-12 max-w-6xl mb-16">
            <h1 className="w-[90%] font-serif pl-9 mt-10 text-blue-900 text-2xl md:text-3xl lg:text-5xl">
                Discover Your Next Home
            </h1>

            {filteredUnits.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-[20vh] text-center">
                    <p className="text-blue-800 font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-4">
                        No apartments found at the moment.
                    </p>

                </div>
            ) : (
                filteredUnits.map((unit, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-md p-9 flex flex-col md:flex-row items-start gap-6 border max-w-[800px] ml-4"
                    >
                        <div className="w-full md:w-[340px] flex-shrink-0">
                            <Slider {...settings}>
                                {unit.images?.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`unit ${i}`}
                                        className="rounded-xl w-full h-[240px] object-cover"
                                    />
                                ))}
                            </Slider>
                        </div>

                        <div className="flex-1 flex flex-col justify-between gap-4">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-800">
                                    {unit.monthlyPrice} EGP
                                </h3>
                                <p className="text-gray-600 text-sm capitalize">{unit.category}</p>

                                <div className="flex gap-4 mt-3 text-gray-700 text-sm">
                                    <div className="flex items-center gap-2">
                                        <BedDouble className="w-5 h-5 text-blue-600" />
                                        {unit.bedrooms}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Bath className="w-5 h-5 text-green-600" />
                                        {unit.bathrooms}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Ruler className="w-5 h-5 text-indigo-600" />
                                        {unit.size} Sq.M
                                    </div>
                                </div>

                                <p className="mt-2 text-sm text-gray-700">
                                    <i className="fa-solid fa-location-dot text-red-500 mr-2"></i>
                                    {unit.address}
                                </p>

                                <Link
                                    to={`/apartmentDetails/${unit._id}`}
                                    className="text-blue-700 mt-1 inline-block hover:underline text-sm"
                                >
                                    new apartment...
                                </Link>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-4">
                                <a
                                    href={`tel:${unit.phone}`}
                                    className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-100"
                                >
                                    <i className="fa-solid fa-phone"></i> Call
                                </a>

                                <a
                                    href={`mailto:${unit.email}`}
                                    className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-100"
                                >
                                    <i className="fa-solid fa-envelope"></i> Email
                                </a>

                                <a
                                    href={`https://wa.me/${unit.whatsApp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="border border-blue-900 text-blue-900 px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-blue-100"
                                >
                                    <i className="fa-brands fa-whatsapp"></i> WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                ))
            )}

            <div className="w-full flex justify-end pr-6 mt-10">
                <Link
                    to="/"
                    className="bg-blue-900 text-white px-5 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-blue-800 transition"
                >
                    ← Back to Home
                </Link>
            </div>


        </div>
    );
}
