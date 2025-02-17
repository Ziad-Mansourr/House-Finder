import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Dropdown } from "flowbite-react";
export default function Sell() {
  const [active, setActive] = useState("Residential");
  const [filterRes, setFilterRes] = useState("Select Type");

  const filRes = (type) => {
    setActive(type);
    setFilterRes(type);
  };
  
  const fileInputRef = useRef(null);
  const imagesRef = useRef([]); // ✅ تخزين الصور بدون `re-render`
  const [previews, setPreviews] = useState([]);

  // ✅ منع إعادة التصيير الزائد باستخدام `useCallback`
  const openFilePicker = useCallback(() => {
    console.log("File input opened"); // 🔍 للتأكد إنه لا يُطبع أكثر من مرة
    fileInputRef.current?.click();
  }, []);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    if (files.length === 0) return;

    imagesRef.current = [...imagesRef.current, ...files].slice(0, 10);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews].slice(0, 10));

    // ✅ إعادة تعيين المدخل عن طريق تغيير key لمنع إعادة الفتح التلقائي
    fileInputRef.current.value = "";
  };

  const removeImage = (index) => {
    imagesRef.current = imagesRef.current.filter((_, i) => i !== index);
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  // إرسال الصور إلى API
  /*
  const uploadImages = async () => {
    if (images.length === 0) {
      alert("Please select at least one image.");
      return;
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const response = await fetch("https://your-api.com/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Upload successful:", result);
      alert("Images uploaded successfully!");
    } catch (error) {
      console.error("Error uploading images:", error);
      alert("Failed to upload images.");
    }
  };
*/
  return (
    <>
      <section className="pt-16 w-[92%] md:w-[75%] lg:w-[50%] m-auto">
        <div className=" mb-3 flex flex-col md:flex-row items-start md:items-center  ">
          <label className=" text-lg text-gray-900  mb-3 md:mb-0 w-full md:w-[31%] font-medium">
            Upload Images <span className="text-red-700">*</span>
          </label>
          <div className="grid grid-cols-12 w-full md:w-[68%]  lg:gap-2">
            {/* زر الإضافة */}
            <div
              onClick={openFilePicker}
              className="w-12 lg:col-span-2 col-span-3 mr-2 lg:mr-0  h-12 flex items-center justify-center border border-gray-400 rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
            >
              <i class="fa-solid fa-images"></i>
            </div>

            {/* عرض الصور */}
            {previews.map((image, index) => (
              <div key={index} className="relative lg:col-span-2 col-span-3 mb-3 lg:mb-0 mr-2 lg:mr-0 group w-14 h-14">
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover rounded-md"
                />
                {/* زر حذف الصورة */}
                <button
                  onClick={() => removeImage(index)}
                  className="absolute hidden top-0 right-0 bg-transparent p-0 duration-500 transition-all  text-white rounded-full group-hover:flex items-center justify-center text-xs"
                >
                  <i className="fa-solid fa-xmark text-red-600 text-lg p-1"></i>
                </button>
              </div>
            ))}
          </div>

          <input
        type="file"
        multiple
        ref={fileInputRef}
        onChange={handleImageChange}
        className="hidden"
      />
        </div>

        <p className="text-sm text-center font-bold mr-12 mb-10 ">
          <span className="text-red-700">The max length of images is 14</span>
        </p>

        {/* Apartment contracts */}
        <div className="mb-10 flex flex-col md:flex-row items-center justify-start">
          <label
            htmlFor="email"
            className="block mb-2 w-[100%] md:w-[35%]  text-lg font-medium text-gray-900 "
            >
            Apartment contracts <span className="text-red-700">*</span>
          </label>
          <input
            type="file"
            id="contracts"
            accept=".pdf"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block md:w-[80%] w-[100%] "
            placeholder=""
            required
          />
        </div>
        {/* Type */}
        <div className="mb-5 flex flex-col md:flex-row items-start md:items-center justify-start ">
          <label
            htmlFor="email"
            className="block mb-2  w-[20%] text-lg font-medium text-gray-900 "
          >
            Type <span className="text-red-700">*</span>
          </label>

          <div className="flex justify-start flex-wrap gap-3">
            
          <div className="flex  items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
              <input
                defaultChecked
                id="bordered-radio-4"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-radio-4"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Apartment
              </label>
            </div>
            
            <div className="flex  items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
             <input
                id="bordered-radio-2"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full py-4  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
               Room
              </label>
            </div>

            <div className="flex  items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
             <input
                id="bordered-radio-1"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Villa
              </label>
            </div>

            <div className="flex  items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
             <input
                id="bordered-radio-3"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
              />
              <label
                htmlFor="bordered-radio-3"
                className="w-full py-4  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Duplex
              </label>
            </div>
          </div>
        </div>
        {/* area */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Area <span className="text-red-700">*</span>
          </label>
          <input
            type="area"
            id="area"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block md:w-[80%] w-full p-2.5 "
            placeholder="Enter Area (m)"
            required
          />
        </div>
        {/* bedroom */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Bedrooms <span className="text-red-700">*</span>
          </label>
          <input
            type="bedroom"
            id="bedroom"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-[80%] p-2.5 "
            placeholder="Enter Bedrooms"
            required
          />
        </div>
        {/* bathroom */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Bathrooms <span className="text-red-700">*</span>
          </label>
          <input
            type="bathroom"
            id="bathroom"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-[80%] p-2.5 "
            placeholder="Enter Bathrooms"
            required
          />
        </div>
        {/* level */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Level
          </label>
          <input
            type="level"
            id="level"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-[80%] p-2.5 "
            placeholder="Enter Level"
            required
          />
        </div>
        {/* Furnished */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start ">
          <label
            htmlFor="email"
            className="block mb-2 mr-10 text-lg font-medium text-gray-900 "
          >
            Furnished <span className="text-red-700">*</span>
          </label>

          <div className="flex gap-3">
            <div className="flex  md:items-center items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
              <input
                id="bordered-radio-1"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  focus:ring-2"
              />
              <label
                htmlFor="bordered-radio-1"
                className="w-full py-4  ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                YES
              </label>
            </div>
            <div className="flex  md:items-center items-center px-5 border border-gray-200 rounded-xl dark:border-gray-700">
              <input
                defaultChecked
                id="bordered-radio-2"
                type="radio"
                defaultValue
                name="bordered-radio"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bordered-radio-2"
                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                NO
              </label>
            </div>
          </div>
        </div>
        {/* Title */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Title <span className="text-red-700">*</span>
          </label>
          <textarea
            id="message"
            rows={1}
            className="block p-2.5  text-sm text-gray-900 w-full md:w-[80%] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Title"
            defaultValue={""}
          />
        </div>

        {/* Description */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="message"
            className="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
          >
            Description <span className="text-red-700">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            className="block p-2.5  text-sm text-gray-900 w-full md:w-[80%] bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe the item you are selling"
            defaultValue={""}
          />
        </div>

        {/* Location */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Location <span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="location"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-[80%] p-2.5 "
            placeholder="Enter link for your location"
            required
          />
        </div>

        {/* Monthly Price */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Monthly Price<span className="text-red-700">*</span>
          </label>
          <div className="relative w-full md:w-[80%]">
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-12"
              placeholder="Enter Monthly Price"
              required
            />
            <div className="absolute top-2 px-1 border-r-[2px] ">
              <p>EGP</p>
            </div>
          </div>
        </div>

        {/* Deposit */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Deposit
          </label>
          <div className="relative w-full md:w-[80%]">
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-12"
              placeholder="Enter Deposit"
              required
            />
            <div className="absolute top-2 px-1 border-r-[2px] ">
              <p>EGP</p>
            </div>
          </div>
        </div>
        {/* Insurance */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-startjustify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Insurance
          </label>
          <div className="relative  w-full md:w-[80%]">
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-12"
              placeholder="Enter Insurance"
              required
            />
            <div className="absolute top-2 px-1 border-r-[2px] ">
              <p>EGP</p>
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Name<span className="text-red-700">*</span>
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg block w-full md:w-[80%] p-2.5 "
            placeholder="Enter Name"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            Phone Number<span className="text-red-700">*</span>
          </label>
          <div className="relative w-full md:w-[73%]">
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-12"
              placeholder="Enter Phone number"
              required
            />
            <div className="absolute top-2 px-1 border-r-[2px] ">
              <p>+20</p>
            </div>
          </div>
        </div>

        {/* WhatsApp Number */}
        <div className="mb-5 flex flex-col md:flex-row md:items-center items-start justify-start md:justify-between">
          <label
            htmlFor="email"
            className="block mb-2 text-lg font-medium text-gray-900 "
          >
            WhatsApp Number<span className="text-red-700">*</span>
          </label>
          <div className="relative w-full md:w-[73%]">
            <input
              type="text"
              id="whatsapp"
              className="bg-gray-50 border   border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 pl-12"
              placeholder="Enter WhatsApp number"
              required
            />
            <div className="absolute top-2 px-1 border-r-[2px] ">
              <p>+20</p>
            </div>
          </div>
        </div>

        {/* Button Post */}
        <div className="text-end">
          <button
            type="button"
            className=" text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:bg-gradient-to-bl   font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Post Now
          </button>
        </div>
      </section>
    </>
  );
}
