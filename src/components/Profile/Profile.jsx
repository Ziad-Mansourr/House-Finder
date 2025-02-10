import { useState } from "react";
import oip from "../../img/OIP.jpeg";
import hom from "../../img/home2.jpeg";
import home from "../../img/home3.peg.jpeg";
import ho from "../../img/home4.jpg";
import R from "../../img/R.jpeg";
import profile from "../../img/Profile.jpeg";

export default function Profile() {
 const [count, setCount] = useState(0)
 function incress(){
  setCount(count+1)
 }
 function dicress(){
  setCount(count-1)
 }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[80%] my-10 gap-4">

        <div className="max-w-sm border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700 rounded-2xl">
          <div className="carousel w-full h-60">
            <div className="carousel-item w-full h-full">
              <img
                src={R}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full">
              <img
                src={oip}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full">
              <img
                src={home}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full">
              <img
                src={hom}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full">
              <img
                src={oip}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full">
              <img
                src={ho}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
            <div className="carousel-item w-full h-full mb-0">
              <img
                src={home}
                className="w-full h-full object-cover rounded-t-2xl"
                alt=""
              />
            </div>
          </div>
      <div className='p-4'>
  <div className="flex items-center justify-between">
    <h2 className="text-[20px] font-bold">EGP 7,500,00</h2>
    

       <div className="flex items-center space-x-3">
        <i className="fa-solid fa-edit text-xl text-blue-600 cursor-pointer"></i>
        <i className="fa-solid fa-trash text-xl text-red-600 cursor-pointer"></i>
    </div>
  </div>

  <h3 className="text-[18px] leading-[16px] font-semibold pt-3">View your villa in New Zayed</h3>
  
  <div className="flex mt-4">
    <span className="pr-5 font-semibold text-xl">
      <i className="fa-solid fa-bed pr-2"></i>5
    </span>
    <span className="font-semibold text-xl">
      <i className="fa-solid fa-bath pr-2 " ></i>4
    </span>
    <h4 className="ml-8 font-bold text-[19px]">60 sqm</h4>
  </div>
  <div className="flex pt-8">
    <h5 className="text-[25px] leading-[16px]">The remaining beds</h5>
    <div className="flex justify-between items-center ml-5">
      <i className="fa-solid fa-circle-plus text-xl pr-3" onClick={incress} ></i>
      <h4 className="font-semibold text-xl">{count}</h4>
      <i className="fa-solid fa-circle-minus text-xl pl-3" onClick={dicress}></i>
    </div>
  </div>

  <h5 className="text-[19px] mt-7 font-semibold leading-[16px]">3 days ago</h5>
</div>







          {/* <div className='p-4'>
            <h2 className='text-[20px] font-bold' >EGP 7,500,00</h2>
            <h3 className='text-[17px] font-semibold pt-2'>View your villa in New Zayed</h3>
            <div className='flex mt-3'>
              <span className='pr-5 font-semibold text-xl'><i className="fa-solid fa-bed pr-2"></i>5</span>
              <span className='font-semibold text-xl'><i className="fa-solid fa-bath pr-2"></i>4</span>
              <h4 className='ml-8 font-bold text-[19px] '>60 sqm</h4>
            </div>
            <div className='flex pt-8'>
              <h5 className='text-[25px] leading-[16px]'>The remaining beds</h5>
              <div className='flex justify-between items-center ml-5'>
              <i class="fa-solid fa-circle-plus text-xl pr-3"></i>
           <h4 className='font-semibold text-xl '> 1</h4>
              <i class="fa-solid fa-circle-minus text-xl pl-3"></i>
              </div>
            </div>
            <h5 className='text-[19px] mt-7 font-semibold leading-[16px]'>3 day ago</h5>
          </div> */}
        </div>

      </div>
    </>
  );
}