import React, { useEffect, useState } from 'react'
import play from "../../img/app_store-aoAyJ2T_ (1).png"
import os from "../../img/app_store-aoAyJ2T_.png"

export default function Footer() {
  return (
    <>
  <footer className=" w-full p-4 bg-[#054E98] shadow-sm md:flex md:items-center 
              md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
          <div className="flex pr-9 md:order-2">
          <img src={play} alt="Google Play" className="w-28 h-auto" />
          <img src={os} alt="App Store" className="w-28 h-auto ml-3" />
      </div>
  
      <div className="pl-9 text-[#DEDEDE] text-[15px] leading-[37px] md:order-1">
          <span className="pl-3 w-[15px]">About Us</span> | <span className="pr-3 pl-3">Contact Us</span> | <span className="pl-3 pr-3">Privacy Policy & Terms</span>
          <p className="text-[13px] text-[#C1BFBF]">© 2024-2025 HouseFinder.eg - The Real Estate Platform in Egypt</p>
      </div>
  </footer>
    </>
  )
}
