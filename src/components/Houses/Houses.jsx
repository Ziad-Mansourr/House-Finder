import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
export default function Houses() {
  const [addFav, setAddFav] = useState(false);
  function addWish() {
    if (addFav) {
      setAddFav(false);
    } else {
      setAddFav(true);
    }
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,

    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="col-span-12 md:col-span-7">
        <Link to={'/apartmentDetailes'} >
          <div  className=" shadow-md rounded-lg flex-wrap bg-[rgb(249,249,249)] flex mt-6 md:mt-8 lg:mt-10 mb-7  ">
            <div className="lg:w-[40%] h-[340px] w-[100%] relative ">
              <div onClick={addWish}>
                <i
                  className={
                    addFav
                      ? "fa-solid fa-heart text-white absolute bottom-12 right-2 z-30 text-2xl"
                      : "fa-regular fa-heart text-white absolute bottom-12 right-2 z-30 text-2xl"
                  }
                />
              </div>
              <Slider {...settings}>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            <div className="  ml-10  flex flex-col  justify-center">
              <h2 className="font-bold text-2xl">
                {" "}
                <span className="text-base font-medium">EGP</span> 500,000,000
              </h2>
              <div className="flex my-2 md:my-4">
                <h4 className="border-r-2 pr-4 font-semibold">Villa </h4>
                <div className="flex border-r-2 px-4">
                  <h4 className="pr-2">
                    <i className="fa-solid fa-bed "></i> 2
                  </h4>
                  <h4>
                    <i className="fa-solid fa-bath"></i> 3
                  </h4>
                </div>
                <h4>
                  <span className="font-bold pl-3">Area: </span>87 Sq.M
                </h4>
              </div>
              <div className="flex items-center">
                <i class="fa-solid fa-location-dot pr-2"></i>
                <h4>New Cairo, Cairo</h4>
              </div>
              <h4 className="mr-2 md:mt-4 text-blue-700">
                Lorem ipsum dolor sit amet consectetur Lorem...
              </h4>
              <div className="md:my-8 my-4 flex items-center">
                <a
                  href="tel:+01155223832"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-solid fa-phone"></i> Call
                </a>
                <a
                  href="mailto:"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-regular fa-envelope"></i> Email
                </a>
                <a
                  href=""
                  className="border-2 border-blue-500  py-1 px-6 rounded-xl mr-5 text-blue-900 text-2xl bg-slate-200"
                >
                  <i className="fa-brands fa-whatsapp"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </Link>
          <div className=" shadow-md flex-wrap bg-[rgb(249,249,249)] flex  mb-10  ">
            <div className="lg:w-[40%] h-[340px] w-[100%] ">
              <Slider {...settings}>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            <div className="  ml-10  flex flex-col  justify-center">
              <h2 className="font-bold text-2xl">
                {" "}
                <span className="text-base font-medium">EGP</span> 500,000,000
              </h2>
              <div className="flex my-2 md:my-4">
                <h4 className="border-r-2 pr-4 font-semibold">Villa </h4>
                <div className="flex border-r-2 px-4">
                  <h4 className="pr-2">
                    <i className="fa-solid fa-bed "></i> 2
                  </h4>
                  <h4>
                    <i className="fa-solid fa-bath"></i> 3
                  </h4>
                </div>
                <h4>
                  <span className="font-bold pl-3">Area: </span>87 Sq.M
                </h4>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot pr-2"></i>
                <h4>New Cairo, Cairo</h4>
              </div>
              <h4 className="mr-2 md:mt-4 text-blue-700">
                Lorem ipsum dolor sit amet consectetur Lorem...
              </h4>
              <div className="md:my-8 my-4 flex items-center">
                <a
                  href="tel:+"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-solid fa-phone"></i> Call
                </a>
                <a
                  href="mailto:"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-regular fa-envelope"></i> Email
                </a>
                <a
                  href=""
                  className="border-2 border-blue-500  py-1 px-6 rounded-xl mr-5 text-blue-900 text-2xl bg-slate-200"
                >
                  <i className="fa-brands fa-whatsapp"></i>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className=" shadow-md flex-wrap bg-[rgb(249,249,249)] flex mb-10 ">
            <div className="lg:w-[40%] h-[340px] w-[100%] ">
              <Slider {...settings}>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="Collage/h2.jpg"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            <div className="  ml-10  flex flex-col  justify-center">
              <h2 className="font-bold text-2xl">
                {" "}
                <span className="text-base font-medium">EGP</span> 500,000,000
              </h2>
              <div className="flex my-2 md:my-4">
                <h4 className="border-r-2 pr-4 font-semibold">Villa </h4>
                <div className="flex border-r-2 px-4">
                  <h4 className="pr-2">
                    <i className="fa-solid fa-bed "></i> 2
                  </h4>
                  <h4>
                    <i className="fa-solid fa-bath"></i> 3
                  </h4>
                </div>
                <h4>
                  <span className="font-bold  pl-3">Area: </span>87 Sq.M
                </h4>
              </div>
              <div className="flex items-center">
                <i className="fa-solid fa-location-dot pr-2"></i>
                <h4>New Cairo, Cairo</h4>
              </div>
              <h4 className="mr-2 md:mt-4 text-blue-700">
                Lorem ipsum dolor sit amet consectetur Lorem...
              </h4>
              <div className="md:my-8 my-4 flex items-center">
                <a
                  href="tel:+"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-solid fa-phone"></i> Call
                </a>
                <a
                  href="mailto:"
                  className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                >
                  <i className="fa-regular fa-envelope"></i> Email
                </a>
                <a
                  href=""
                  className="border-2 border-blue-500  py-1 px-6 rounded-xl mr-5 text-blue-900 text-2xl bg-slate-200"
                >
                  <i className="fa-brands fa-whatsapp"></i>{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
