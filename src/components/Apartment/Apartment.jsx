import React, { useEffect, useState } from "react";
import Slider from "react-slick";
export default function Apartment() {
  const [filterRes, setFilterRes] = useState("Residential");
  const [active, setActive] = useState("");
  const [activeB, setActiveB] = useState("");
  const [activeBt, setActiveBt] = useState("");

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
  function filRes(word) {
    setFilterRes(word);
    setActive(word);
  }
  function filBad(word) {
    setActiveB(word);
  }
  function filBat(word) {
    setActiveBt(word);
  }
  return (
    <>
      <section className="w-[97%] md:w-[90%] m-auto py-4 px-[15px] grid grid-cols-12">
        <div className="col-span-12 hidden lg:flex items-center ">
          <div className="w-[35%] relative mr-10">
            <input
              type="text"
              placeholder="Enter location"
              className="px-8 rounded-md w-full "
            />
            <i className ="fa-solid fa-location-dot absolute top-3 left-3"></i>
          </div>
          <div className="flex border-2 border-gray-100  shadow-sm py-1 px-2 rounded-lg">
            <div>
              <button
                id="dropdownHoverButton"
                data-dropdown-toggle="dropdownHover"
                data-dropdown-trigger="hover"
                className="text-blue-800  focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                {filterRes}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownHover"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm lg:w-72"
              >
                <ul
                  className="py-2 flex flex-wrap gap-x-2 text-center text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton"
                >
                  <li
                    className={
                      active == "Apartment"
                        ? "border-2 rounded-3xl w-1/2 bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl w-1/2 hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Apartment")}
                      className="block px-4 py-2 "
                    >
                      Apartment
                    </a>
                  </li>
                  <li
                    className={
                      active == "Room"
                        ? "border-2 rounded-3xl w-[35%] bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl w-[35%] hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Room")}
                      className="block px-4 py-2  "
                    >
                      Room
                    </a>
                  </li>
                  <li
                    className={
                      active == "Villa"
                        ? "border-2 rounded-3xl w-[35%] bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl w-[35%] hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Villa")}
                      className="block px-4 py-2  "
                    >
                      Villa
                    </a>
                  </li>
                  <li
                    className={
                      active == "Duplex"
                        ? "border-2 rounded-3xl w-[40%] bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl w-[40%] hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Duplex")}
                      className="block px-4 py-2 "
                    >
                      Duplex
                    </a>
                  </li>
                  <li className="pt-3 w-[30%]">
                    <button
                      onClick={() => filRes("Residential")}
                      className="flex px-4 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800"
                    >
                      Reset
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-6">
              <button
                id="dropdownHoverButton2"
                data-dropdown-toggle="dropdownHover2"
                data-dropdown-trigger="hover"
                className="text-blue-800  focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                Bads & Baths
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownHover2"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56"
              >
                <h2 className="font-bold">Bads</h2>
                <ul
                  className="py-2 flex flex-wrap text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton2"
                >
                  <li
                    className={
                      activeB == "1"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("1")}
                      className="block px-4 py-2 "
                    >
                      1
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "2"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("2")}
                      className="block px-4 py-2  "
                    >
                      2
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "3"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("3")}
                      className="block px-4 py-2  "
                    >
                      3
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "4"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("4")}
                      className="block px-4 py-2 "
                    >
                      4
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "5"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("5")}
                      className="block px-4 py-2 "
                    >
                      5
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "6"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("6")}
                      className="block px-4 py-2 "
                    >
                      6
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "7"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("7")}
                      className="block px-4 py-2 "
                    >
                      7
                    </a>
                  </li>

                  <li
                    className={
                      activeB == "8+"
                        ? "border-2 rounded-3xl mr-2 bg-blue-200 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("8+")}
                      className="block px-4 py-2 "
                    >
                      8+
                    </a>
                  </li>
                </ul>
                <h2 className="font-bold">Baths</h2>
                <ul
                  className="py-2 flex flex-wrap text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton2"
                >
                  <li
                    className={
                      activeBt == "1"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("1")}
                      className="block px-4 py-2 "
                    >
                      1
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "2"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("2")}
                      className="block px-4 py-2  "
                    >
                      2
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "3"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("3")}
                      className="block px-4 py-2  "
                    >
                      3
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "4"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("4")}
                      className="block px-4 py-2 "
                    >
                      4
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "5"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("5")}
                      className="block px-4 py-2 "
                    >
                      5
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "6"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("6")}
                      className="block px-4 py-2 "
                    >
                      6
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "7"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("7")}
                      className="block px-4 py-2 "
                    >
                      7
                    </a>
                  </li>

                  <li
                    className={
                      activeBt == "8+"
                        ? "border-2 rounded-3xl mr-2 bg-blue-200 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("8+")}
                      className="block px-4 py-2 "
                    >
                      8+
                    </a>
                  </li>
                  <button
                    onClick={() => {
                      filBad("");
                      filBat("");
                    }}
                    className=" px-4 mx-2 my-2 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800"
                  >
                    Reset
                  </button>
                </ul>
              </div>
            </div>

            <div className="ml-6">
              <button
                id="dateRangeButton"
                data-dropdown-toggle="dateRangeDropdown"
                data-dropdown-ignore-click-outside-class="datepicker"
                type="button"
                className="inline-flex items-center text-blue-800 font-medium hover:underline"
              >
                Price (EGP){" "}
                <svg
                  className="w-3 h-3 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dateRangeDropdown"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-80 lg:w-96 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="p-3" aria-labelledby="dateRangeButton">
                  <div
                    date-rangepicker
                    datepicker-autohide
                    className="flex items-center"
                  >
                    <div className="">
                      <input
                        name="start"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 "
                        placeholder="0"
                      />
                    </div>
                    <span className="mx-2 text-gray-500">to</span>
                    <div className="relative">
                      <input
                        name="end"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5"
                        placeholder="Any"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {}}
                    className=" px-4 mx-2 my-2 py-2 w-[30%] mt-7 hover:bg-gray-100 border-spacing-3 border-blue-800"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => {
                      filBad("");
                      filBat("");
                    }}
                    className=" px-4 mx-2 my-2 py-2  w-[40%] border-spacing-3 text-white bg-blue-800 border-blue-900"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
            <div className="ml-6">
              <button
                onClick={() => {
                  filBad("");
                  filBat("");
                }}
                className=" px-5    border-spacing-3  text-white bg-blue-700 border-blue-900"
              >
                Search
              </button>
            </div>
          </div>

          <div className="ml-8">
            <button
              onClick={() => {
                filBad("");
                filBat("");
              }}
              className=" px-6    border-spacing-3  text-white bg-blue-700 border-blue-900"
            >
              Sell
            </button>
          </div>
        </div>

        <div
          id="drawer-navigation"
          className="fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-white dark:bg-gray-800"
          tabIndex={-1}
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 "
          >
            Filters
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center "
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          <div className="py-4  overflow-y-auto">
            <div>
              <button
                id="dropdownHoverButton3"
                data-dropdown-toggle="dropdownHover3"
                data-dropdown-trigger="hover"
                className="text-blue-800  ml-1 focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                {filterRes}
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownHover3"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-[90%] ml-3"
              >
                <ul
                  className="py-2 ml-2 text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton3"
                >
                  <li
                    className={
                      active == "Apartment"
                        ? "border-2 rounded-3xl w-full bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Apartment")}
                      className="block px-4 py-2 "
                    >
                      Apartment
                    </a>
                  </li>
                  <li
                    className={
                      active == "Room"
                        ? "border-2 rounded-3xl bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Room")}
                      className="block px-4 py-2  "
                    >
                      Room
                    </a>
                  </li>
                  <li
                    className={
                      active == "Villa"
                        ? "border-2 rounded-3xl bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Villa")}
                      className="block px-4 py-2  "
                    >
                      Villa
                    </a>
                  </li>
                  <li
                    className={
                      active == "Duplex"
                        ? "border-2 rounded-3xl bg-blue-200 border-blue-500 mb-3"
                        : "border-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filRes("Duplex")}
                      className="block px-4 py-2 "
                    >
                      Duplex
                    </a>
                  </li>
                  <li className="pt-3">
                    <button
                      onClick={() => filRes("Residential")}
                      className="flex px-4 py-2 hover:bg-gray-100  border-spacing-3 border-blue-800"
                    >
                      Reset
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="ml-1 mt-7">
              <button
                id="dropdownHoverButton4"
                data-dropdown-toggle="dropdownHover4"
                data-dropdown-trigger="hover"
                className="text-blue-800  focus:ring-2 focus:outline-none focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
                type="button"
              >
                Bads & Baths
                <svg
                  className="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dropdownHover4"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56"
              >
                <h2 className="font-bold ml-3">Bads</h2>
                <ul
                  className="py-2 ml-3 flex flex-wrap text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton4"
                >
                  <li
                    className={
                      activeB == "1"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("1")}
                      className="block px-4 py-2 "
                    >
                      1
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "2"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("2")}
                      className="block px-4 py-2  "
                    >
                      2
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "3"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("3")}
                      className="block px-4 py-2  "
                    >
                      3
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "4"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("4")}
                      className="block px-4 py-2 "
                    >
                      4
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "5"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("5")}
                      className="block px-4 py-2 "
                    >
                      5
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "6"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("6")}
                      className="block px-4 py-2 "
                    >
                      6
                    </a>
                  </li>
                  <li
                    className={
                      activeB == "7"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("7")}
                      className="block px-4 py-2 "
                    >
                      7
                    </a>
                  </li>

                  <li
                    className={
                      activeB == "8+"
                        ? "border-2 rounded-3xl mr-2 bg-blue-200 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBad("8+")}
                      className="block px-4 py-2 "
                    >
                      8+
                    </a>
                  </li>
                </ul>
                <h2 className="font-bold ml-3">Baths</h2>
                <ul
                  className="py-2 ml-3 flex flex-wrap text-sm text-gray-700"
                  aria-labelledby="dropdownHoverButton2"
                >
                  <li
                    className={
                      activeBt == "1"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("1")}
                      className="block px-4 py-2 "
                    >
                      1
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "2"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("2")}
                      className="block px-4 py-2  "
                    >
                      2
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "3"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("3")}
                      className="block px-4 py-2  "
                    >
                      3
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "4"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("4")}
                      className="block px-4 py-2 "
                    >
                      4
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "5"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("5")}
                      className="block px-4 py-2 "
                    >
                      5
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "6"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("6")}
                      className="block px-4 py-2 "
                    >
                      6
                    </a>
                  </li>
                  <li
                    className={
                      activeBt == "7"
                        ? "border-2 rounded-3xl bg-blue-200 mr-2 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("7")}
                      className="block px-4 py-2 "
                    >
                      7
                    </a>
                  </li>

                  <li
                    className={
                      activeBt == "8+"
                        ? "border-2 rounded-3xl mr-2 bg-blue-200 border-blue-500 mb-3"
                        : "border-2 mr-2 rounded-3xl hover:bg-gray-100 mb-3"
                    }
                  >
                    <a
                      href="#"
                      onClick={() => filBat("8+")}
                      className="block px-4 py-2 "
                    >
                      8+
                    </a>
                  </li>
                  <button
                    onClick={() => {
                      filBad("");
                      filBat("");
                    }}
                    className=" px-4 mx-2 my-2 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800"
                  >
                    Reset
                  </button>
                </ul>
              </div>
            </div>

            <div className="ml-1 mt-7">
              <button
                id="dateRangeButton1"
                data-dropdown-toggle="dateRangeDropdown1"
                data-dropdown-ignore-click-outside-class="datepicker"
                type="button"
                className="inline-flex items-center text-blue-800 font-medium hover:underline"
              >
                Price (EGP){" "}
                <svg
                  className="w-3 h-3 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                id="dateRangeDropdown1"
                className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-80 lg:w-96 dark:bg-gray-700 dark:divide-gray-600"
              >
                <div className="p-3" aria-labelledby="dateRangeButton1">
                  <div
                    date-rangepicker
                    datepicker-autohide
                    className="flex flex-col items-start"
                  >
                    <div className="">
                      <input
                        name="start"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5 "
                        placeholder="0"
                      />
                    </div>
                    <span className="mx-2 text-gray-500">to</span>
                    <div className="relative">
                      <input
                        name="end"
                        type="number"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-2 p-2.5"
                        placeholder="Any"
                      />
                    </div>
                  </div>
                  <button
                    onClick={() => {}}
                    className=" px-4 mx-2 my-2 py-2 w-[30%] mt-7 hover:bg-gray-100 border-spacing-3 border-blue-800"
                  >
                    Reset
                  </button>
                  <button
                    onClick={() => {
                      filBad("");
                      filBat("");
                    }}
                    className=" px-4 mx-2 my-2 py-2  w-[40%] border-spacing-3 text-white bg-blue-800 border-blue-900"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>

            <div className="ml-1 mt-5">
              <button
                onClick={() => {
                  filBad("");
                  filBat("");
                }}
                className=" px-6 text-lg border-spacing-3  text-white bg-blue-700 border-blue-900"
              >
                Search
              </button>
            </div>
            <div className="ml-1 mt-5  ">
              <button
                onClick={() => {
                  filBad("");
                  filBat("");
                }}
                className=" px-6  text-lg text-white bg-blue-700 border-blue-900"
              >
                Sell
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 flex gap-2 mt-3 items-center">
          <div className="w-[85%] lg:hidden relative">
            <input
              type="text"
              placeholder="Enter location"
              className="px-8 rounded-md w-full "
            />
            <i className="fa-solid fa-location-dot absolute top-3 left-3"></i>
          </div>

          <div className="block lg:hidden text-center">
            <button
              className="text-white flex items-center   bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
            >
              <i class="fa-solid fa-sliders mr-2"></i> Filters
            </button>
          </div>
        </div>

        <div className="border-2 col-span-12 border-gray-300  md:col-span-7  text-gray-500  mt-5 lg:mt-10 rounded-xl  ">
          <h3 className="p-3">All (253000)</h3>
        </div>
        <div className=" hidden md:block order-1 col-span-5 my-8 lg:my-16 ml-8">
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
        <div className="col-span-12 md:col-span-7">
          <div className=" shadow-md rounded-lg flex-wrap bg-[rgb(249,249,249)] flex mt-6 md:mt-8 lg:mt-10 mb-7  ">
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
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="src/assets/collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h2.jpg"
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
          <div className=" shadow-md flex-wrap bg-[rgb(249,249,249)] flex  mb-10  ">
            <div className="lg:w-[40%] h-[340px] w-[100%] ">
              <Slider {...settings}>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="src/assets/collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h2.jpg"
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
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px] "
                    src="src/assets/collage/h2.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="w-full h-[300px]"
                    src="src/assets/collage/h2.jpg"
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
      </section>

    </>
  );
}
