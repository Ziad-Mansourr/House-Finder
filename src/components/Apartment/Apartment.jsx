
import { useNavigate } from "react-router-dom";
import useUnit from "../../hooks/useUnit";
import axiosInstance from "../../services/axiosInstance";
import Filter from "../Filter/Filter";
import Houses from "../Houses/Houses";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
export default function Apartment() {
    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : null);
    const navigate = useNavigate();
  const handleUniversityClick = async (universityName) => {
    try {
      const res = await axiosInstance.get("/units");
      const allUnits = res.data.data.units;
      const filtered = allUnits.filter((unit) =>
        unit.description?.toLowerCase().includes(universityName.toLowerCase())
      );
      { token != null ? navigate("/view", { state: { filteredUnits: filtered } }) : navigate("/login") }
    } catch (err) {
      console.error("Error fetching units:", err);
    }
  };
  const { data, isLoading } = useUnit();
  console.log(data?.data?.data?.units);
  
  return (
    <>
      <section className="w-[97%] md:w-[90%] m-auto pt-7 px-[15px] grid grid-cols-12">
      <Filter/>

        <div className="border-2 col-span-12 border-gray-300 md:col-span-7 text-gray-500 mt-5 lg:mt-10 rounded-xl  ">
          <h3 className="p-3">All ({data?.data?.data?.units?.length})</h3>
        </div>
        <div className=" hidden md:block order-1 col-span-5 my-8 lg:my-16 ml-8">
          <h2 className="bg-gray-200 rounded-sm font-semibold p-3 text-black">
            Recommended searches
          </h2>
          <div className="p-4 ">
            {[
              {  name: "Cairo University" },
              {  name: "Ain Shams University" },
              {  name: "Alexandria University" },
              {  name: "Aswan University" },
              {  name: "Helwan University" },
              {  name: "New Cairo Technological University" },
              {  name: "Assiut University" },
            ].map(({ i,  name }) => (
              <div key={i} className="cursor-pointer" onClick={() => handleUniversityClick(name)} >
                <p className="pt-3 text-gray-600">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Houses/>
      </section>
      <div className="mb-5 ">
        <Pagination />
      </div>

    </>
  );
}
