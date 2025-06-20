import { Link } from "react-router-dom";

export default function PricingCard({ head, salary , unit }) {
    return (
        <>
            <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 ">
                <h5 className="mb-4 text-[18px] font-medium text-primary ">{head}</h5>
                <div className="flex items-baseline text-gray-900 ">
                    <span className="text-[30px] font-semibold tracking-tight">EGP {salary}</span>
                    <span className="ms-2 text-[18px] text-color ">/ monthly</span>
                </div>
                <ul role="list" className="space-y-7 mt-7">
                    <li className="flex items-center text-center ">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                        </svg>
                        <span className="text-[17px] flex justify-center w-[60%] leading-tight text-color ms-3">{unit} Unit posting</span>
                    </li>
                    <li className="flex">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                        </svg>
                        <span className="text-[14px] flex justify-center w-[60%] leading-tight text-color ms-3">Unit displayed for 20 days</span>
                    </li>
                    <li className="flex">
                        <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7657 0.687453C15.4533 0.375016 14.9468 0.375016 14.6343 0.687453L5.04982 10.272L1.3657 6.58791C1.0533 6.27548 0.546796 6.27551 0.234328 6.58791C-0.0781093 6.90032 -0.0781093 7.40682 0.234328 7.71926L4.48414 11.969C4.79645 12.2814 5.30332 12.2812 5.61551 11.969L15.7657 1.81883C16.0781 1.50642 16.0781 0.99989 15.7657 0.687453Z" fill="#202124" />
                        </svg>
                        <span className="text-[14px] flex justify-center w-[60%] leading-tight text-color ms-3">Premium Support 24/7</  span>
                    </li>
                </ul>
                <Link to='https://wa.me/+201206089893' className="text-white mt-[48px] bg-primary font-medium rounded-lg text-[15px] px-5 py-2.5 inline-flex justify-center w-full text-center">Contact Us</Link>
            </div>
        </>
    );
}
