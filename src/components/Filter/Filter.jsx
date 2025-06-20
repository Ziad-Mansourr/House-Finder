
import { Dropdown, Drawer, Button,TextInput,Label,Popover} from "flowbite-react";
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { UnitContext } from "../../context/UnitContext";
export default function Filter() {
  const [filterRes, setFilterRes] = useState("Residential");
  const options = ["1", "2", "3", "4", "5", "6", "7", "8+"];
  const [active, setActive] = useState("");
  const [activeB, setActiveB] = useState("");
  const [activeBt, setActiveBt] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  console.log(filterRes, activeB, activeBt);
    let {getUnit , setUnit} = useContext(UnitContext);
    // console.log(unit);
     
  
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
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
  async function handlePrice(values) {
    console.log(values);
    let {data} = await getUnit(values.location , filterRes , activeB, activeBt, values.start, values.end);
    setUnit(data?.data?.units);
  }
  let formik = useFormik({
    initialValues: {
      location: "",
      start: "",
      end: "",
    },
    onSubmit: (values) => handlePrice(values),
    onReset: (values) => resetPrice(values),
  });
  function resetPrice(params) {
    console.log(params);
    params.start = "";
    params.end = "";
  }
  return (
    <>
      {/* Filter Laptop */}
      <div className="col-span-12 hidden lg:flex items-center ">
        <div className="w-[35%] relative mr-10">
          <input
            value={formik.values.location}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="location"
            type="text"
            placeholder="Enter location"
            className="px-8 rounded-md w-full "
          />
          <i className="fa-solid fa-location-dot absolute top-3 left-3"></i>
        </div>
        <div className="flex border-2 border-gray-100  shadow-sm py-1 px-2 rounded-lg">
          <div className="">
            <Dropdown
              color=""
              label={
                <span className="text-blue-800 font-medium text-sm flex items-center">
                  {filterRes}
                </span>
              }
              dismissOnClick={false}
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm lg:w-72"
            >
              <ul className="py-2 flex flex-wrap gap-x-2 text-center text-sm text-gray-700">
                {[
                  { name: "apartment", width: "w-1/2" },
                  { name: "room", width: "w-[35%]" },
                  { name: "villa", width: "w-[35%]" },
                  { name: "duplex", width: "w-[40%]" },
                ].map(({ name, width }) => (
                  <li
                    key={name}
                    className={`border-2 rounded-3xl ${width} mb-3 ${
                      filterRes === name
                        ? "bg-blue-200 border-blue-500"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <button
                      onClick={() => setFilterRes(name)}
                      className="block bg-transparent px-4 py-2 w-full"
                    >
                      {name}
                    </button>
                  </li>
                ))}

                <li className="pt-3 w-[30%]">
                  <button
                    onClick={() => setFilterRes("Residential")}
                    className="flex px-4 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800"
                  >
                    Reset
                  </button>
                </li>
              </ul>
            </Dropdown>
          </div>

          <div className="ml-6">
            <Dropdown
              color=""
              label={
                <span className="text-blue-800 font-medium text-sm flex items-center">
                  Bads & Baths
                </span>
              }
              dismissOnClick={false}
              className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-56"
            >
              <div className="p-3">
                <h2 className="font-bold">Bads</h2>
                <ul className="py-2 flex flex-wrap text-sm text-gray-700">
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                    <li
                      key={num}
                      className={`border-2 rounded-3xl mr-2 mb-3 ${
                        activeB === num
                          ? "bg-blue-200 border-blue-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <button
                        onClick={() => filBad(num)}
                        className="block bg-transparent px-5 py-2"
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                </ul>

                <h2 className="font-bold">Baths</h2>
                <ul className="py-2 flex flex-wrap text-sm text-gray-700">
                  {["1", "2", "3", "4", "5", "6", "7", "8+"].map((num) => (
                    <li
                      key={num}
                      className={`border-2 rounded-3xl mr-2 mb-3 ${
                        activeBt === num
                          ? "bg-blue-200 border-blue-500"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <button
                        onClick={() => filBat(num)}
                        className="block bg-transparent px-5 py-2"
                      >
                        {num}
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    filBad("");
                    filBat("");
                  }}
                  className="px-4 mx-2 my-2 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800"
                >
                  Reset
                </button>
              </div>
            </Dropdown>
          </div>

          <div className="ml-6 bg-[#e2e2e2] px-4 flex items-center rounded-lg">
            <Popover
              content={
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-80 lg:w-96 p-3">
                  <form>
                    <div className="flex items-center">
                      {/* Start Price Input */}
                      <div className="w-full">
                        <Label
                          htmlFor="start"
                          value="Start Price"
                          className="text-gray-700 text-sm mb-1"
                        />
                        <TextInput
                          value={formik.values.start}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="start"
                          id="start"
                          type="number"
                          placeholder="0"
                          className="w-full"
                        />
                      </div>

                      <span className="mx-2 text-gray-500">to</span>

                      {/* End Price Input */}
                      <div className="w-full">
                        <Label
                          htmlFor="end"
                          value="End Price"
                          className="text-gray-700 text-sm mb-1"
                        />
                        <TextInput
                          value={formik.values.end}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="end"
                          id="end"
                          type="number"
                          placeholder="Any"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-evenly mt-7">
                      <button
                        type="reset"
                        onClick={() => resetPrice(formik.values)}
                        className="px-4 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 w-[30%]"
                      >
                        Reset
                      </button>

                      <button
                        type="button"
                        className="px-4 py-2 text-white bg-blue-800 border-blue-900 w-[40%]"
                      >
                        Done
                      </button>
                    </div>
                  </form>
                </div>
              }
            >
              <span className="text-blue-800 font-medium  flex items-center cursor-pointer">
                Price (EGP)
                <i className="fa-solid fa-angle-down ml-2"></i>
              </span>
            </Popover>
          </div>
          <form className="ml-6" onSubmit={formik.handleSubmit}>
            <button
              type="submit"
              className=" px-5    border-spacing-3  text-white bg-blue-700 border-blue-900"
            >
              Search
            </button>
          </form>
        </div>


      </div>

      {/* Button Filter Phone */}
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
          <Button
            color=""
            className="text-white flex items-center hover:bg-blue-800 bg-blue-700 font-medium rounded-lg text-md px-3 py-1 focus:outline-none focus:ring-0"
            onClick={toggleDrawer}
          >
            <div className="flex items-center">
              <i className="fa-solid fa-sliders mr-2 "></i> Filters
            </div>
          </Button>
        </div>

        {/* Sidebar Drawer */}
        <Drawer
          className="w-[70%]"
          open={isOpen}
          onClose={toggleDrawer}
          aria-labelledby="drawer-navigation"
        >
          {/* <div className=""> */}
          <div
            id="drawer-navigation"
            className="fixed top-0 left-0 z-40 w-[70%] h-screen p-4 overflow-y-auto dark:bg-gray-800"
          >
            <h5 className="text-base font-semibold text-gray-500">Filters</h5>
            <button
              onClick={toggleDrawer}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5"
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

            <div className="py-4 overflow-y-auto">
              <div>
                <Dropdown
                  color=""
                  label={
                    <span className="text-blue-800 ml-1 font-medium text-sm flex items-center">
                      {filterRes}
                    </span>
                  }
                  inline={false}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg  shadow-sm w-[85%] px-3"
                >
                  <ul className="py-2 text-sm text-gray-700">
                    {["Apartment", "Room", "Villa", "Duplex"].map((type) => (
                      <li
                        key={type}
                        className={`border-2 rounded-3xl mb-3 ${
                          active === type
                            ? "bg-blue-200 border-blue-500"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <button
                          onClick={() => filRes(type)}
                          className="block bg-transparent px-4 py-2 w-full text-left"
                        >
                          {type}
                        </button>
                      </li>
                    ))}
                    <li className="pt-3">
                      <button
                        onClick={() => filRes("Residential")}
                        className="flex px-4 py-2  border-spacing-2 border-blue-700 hover:bg-gray-100"
                      >
                        Reset
                      </button>
                    </li>
                  </ul>
                </Dropdown>
              </div>

              <div className="mt-7">
                <Dropdown
                  label={
                    <span className="text-blue-800 ml-1 font-medium text-sm flex items-center">
                      Beds & Baths
                    </span>
                  }
                  inline={true}
                  className="z-10 bg-white divide-y divide-gray-100 rounded-lg  shadow-sm w-[85%] px-3"
                >
                  <h2 className="font-bold ml-3">Beds</h2>
                  <ul className="py-2 flex flex-wrap text-sm text-gray-700">
                    {options.map((num) => (
                      <li
                        key={num}
                        className={`border-2 mr-2 rounded-3xl mb-3 ${
                          activeB === num
                            ? "bg-blue-200 border-blue-500"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <button
                          onClick={() => filBad(num)}
                          className="block bg-transparent px-4 py-2"
                        >
                          {num}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <h2 className="font-bold ml-3">Baths</h2>
                  <ul className="py-2 flex flex-wrap text-sm text-gray-700">
                    {options.map((num) => (
                      <li
                        key={num}
                        className={`border-2 mr-2 rounded-3xl mb-3 ${
                          activeBt === num
                            ? "bg-blue-200 border-blue-500"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <button
                          onClick={() => filBat(num)}
                          className="block bg-transparent px-4 py-2"
                        >
                          {num}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => {
                      filBad("");
                      filBat("");
                    }}
                    className="px-4 mx-2 my-2 py-2  border-spacing-2 border-blue-700 hover:bg-gray-100"
                  >
                    Reset
                  </button>
                </Dropdown>
              </div>

         <div className=" bg-[#e2e2e2] px-4 md:w-[30%] w-[58%] mt-6 py-2 flex items-center rounded-lg">
            <Popover
              content={
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg  shadow-sm w-full px-3">
                  <form>
                    <div className="flex flex-col items-start">
                      {/* Start Price Input */}
                      <div className="w-full">
                        <Label
                          htmlFor="start"
                          value="Start Price"
                          className="text-gray-700 text-sm mb-1"
                        />
                        <TextInput
                          value={formik.values.start}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="start"
                          id="start"
                          type="number"
                          placeholder="0"
                          className="w-full"
                        />
                      </div>

                      <span className="mx-2 text-gray-500">to</span>

                      {/* End Price Input */}
                      <div className="w-full">
                        <Label
                          htmlFor="end"
                          value="End Price"
                          className="text-gray-700 text-sm mb-1"
                        />
                        <TextInput
                          value={formik.values.end}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          name="end"
                          id="end"
                          type="number"
                          placeholder="Any"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="flex justify-evenly mt-7">
                      <button
                        type="reset"
                        onClick={() => resetPrice(formik.values)}
                        className="px-4 py-2 hover:bg-gray-100 border-spacing-3 border-blue-800 w-[40%]"
                      >
                        Reset
                      </button>

                      <button
                        type="button"
                        className="px-4 py-2 text-white bg-blue-800 border-blue-900 w-[40%]"
                      >
                        Done
                      </button>
                    </div>
                  </form>
                </div>
              }
            >
              <span className="text-blue-800 ml-1 font-semibold  text-base flex items-center">
                Price (EGP)
                <i className="fa-solid fa-angle-down ml-2"></i>
              </span>
            </Popover>
          </div>

              <div className="ml-1 mt-5">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-600 to-blue-700 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white ">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Search
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </Drawer>
      </div>
    </>
  );
}
