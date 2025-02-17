import React, { useEffect, useState } from "react";

import Filter from "../Filter/Filter";
import Houses from "../Houses/Houses";
export default function Apartment() {

  
  return (
    <>
      <section className="w-[97%] md:w-[90%] m-auto py-7 px-[15px] grid grid-cols-12">
       
      <Filter/>

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

        <Houses/>
        
      </section>

    </>
  );
}
