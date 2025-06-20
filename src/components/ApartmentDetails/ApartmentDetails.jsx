import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button, Modal } from "flowbite-react";
import { useContext, useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../services/axiosInstance";
import { wishListContext } from "../../context/userWishlist";
import toast from "react-hot-toast";
import { RateContext } from "../../context/userRate";
export default function ApartmentDetails() {
  let { id } = useParams();
  let headers = {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  }
  const [getAppart, setAppart] = useState([]);
  // const [rateDone, setRateDone] = useState(false);
  function getApp() {
    return axiosInstance.get(`units/${id}`, { headers })
      .then((res) => res)
      .catch((err) => err)
  }
  console.log(id);
  const [openModal, setOpenModal] = useState(false);
  const { addRateing } = useContext(RateContext);
  const [rate, setRate] = useState(0);
  
  const addRate = (rate) => {
    setRate(rate);
  }
  async function fetchData() {
    let { data } = await getApp();
    setAppart(data);
  }

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

  async function addRa(id, rate) {
    toast.loading("Adding Rateing To Appartment");
    const { data } = await addRateing(id, rate);
    // console.log(data);
    
    if (data?.status === "success") {
      toast.dismiss();
      toast.success("Rate Added Successfuly");
      setOpenModal(false);
    }else{
      toast.dismiss();
      toast.error("Rate Adding Failed");
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  let date = new Date(getAppart?.data?.unit?.updatedAt);
  let formattedDate = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const [addFav, setAddFav] = useState(false);
  let {wish , addWish, delWish } = useContext(wishListContext);
  // console.log(wish);
  
  const isProductInWishlist = useMemo(
    () => (id) => wish?.body?.wishlist?.some((product) => product._id === id),
    [wish]
  );
   async function handleWishList(id) {
    if (isProductInWishlist(id)) {
      toast.loading("Removing Apartment From WishList");
      let { data } = await delWish(id);
      // console.log(data);
      
        if (data?.status === "success") {
          toast.dismiss();
          toast.success("Removed Apartment Successfully");
        }else{
          toast.dismiss();
          toast.error("Removed Apartment Faild");
        }
    } else {
      toast.loading("Adding Apartment To WishList");
      let { data } = await addWish(id);
        if (data?.status === "success") {
          toast.dismiss();
          toast.success("Added Apartment To Wishlist Successfully");
        }else{
          toast.dismiss();
          toast.error("Added Apartment To Wishlist Faild");
        }
    }
  }

  // console.log(formattedDate);
  // console.log(getAppart);
  if(!getAppart?.data?.unit) {
    return <>
     <div className="fixed w-full top-0 left-0 right-0 bottom-0 bg-white z-[9999999] flex justify-center items-center min-h-screen">
        <span className="loader"></span>
     </div>
    </>
  }
  return (
    <div className=" w-[92%] md:w-[87%] mx-auto pt-7">
      {/* Image Gallery */}
      <div className="gallery flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div className="h-[300px] lg:w-3/4 w-full rounded-md md:h-[480px] relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            loop={true}
            className="h-full rounded-lg"
          >
            {
              getAppart?.data?.unit?.images?.map((image, i) => {
                return <SwiperSlide key={i}>
                  <div className="flex h-full items-center justify-center bg-gray-400">
                    <img
                      src={image}
                      alt="Property Image"
                      className="w-full rounded-lg h-[300px] md:h-[480px] shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
                    />
                  </div>
                </SwiperSlide>

              })
            }

          </Swiper>

          {/* أزرار التنقل المخصصة */}
          <button className="swiper-button-prev absolute left-2 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full w-8 h-8 flex items-center justify-center">
            <ChevronLeft size={20} />
          </button>
          <button className="swiper-button-next absolute right-2 top-1/2 -translate-y-1/2 bg-transparent text-white rounded-full w-8 h-8 flex items-center justify-center">
            <ChevronRight size={20} />
          </button>

          <Link
            to={getAppart?.data?.unit?.location} target="_blank"
            className="absolute bottom-3 left-5 z-20 bg-black opacity-75 hover:opacity-60 text-white px-4 py-1 rounded-2xl"
          >
            <i className="fa-solid fa-location-dot mr-1"></i>Map
          </Link>

          <Link
            to={""}
            onClick={() => setOpenModal(true)}
            className="absolute bottom-3 left-28 z-20 bg-blue-900 opacity-90 hover:opacity-80 text-white px-6 py-1 rounded-2xl"
          >
            <i className="fa-solid fa-star mr-1"></i>Add Rate
          </Link>
          <button
            onClick={() => handleWishList(id)}
            className="absolute bottom-3 right-4 z-20  text-red-600 text-3xl p-0 bg-transparent"
          >
            <i className={isProductInWishlist(id) ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
          </button>

          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            <Modal.Body>
              <div className="text-center">
                <h3 className="mb-5 text-lg flex justify-center items-center flex-col text-gray-500 dark:text-gray-400 font-semibold">
                  Add your Rate
                </h3>
                <div className=" flex justify-center items-center">

                <RatingStars unit={id} />
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>

        <div className="lg:flex flex-col gap-4 hidden overflow-hidden w-1/4">
          <img
            src={getAppart?.data?.unit?.images[0]}
            alt="Additional Image"
            className="rounded-lg h-[230px] shadow-md transform hover:scale-105 transition duration-300"
          />
          <img
            src={getAppart?.data?.unit?.images[1]}
            alt="Additional Image"
            className="rounded-lg h-[230px] shadow-md transform hover:scale-105 transition duration-300"
          />
          {/* <img src="44.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" />
          <img src="55.png" alt="Additional Image" className="rounded-lg shadow-md transform hover:scale-110 transition duration-300" /> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row-reverse gap-6 mt-6">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 p-6 rounded-lg order-1 lg:-order-1 self-start flex flex-col md:flex-row lg:flex-col gap-6">
          {/* Real estate agent card */}
          <div className=" w-full md:w-[35%]  lg:w-full h-52 lg:h-64  max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm ">
            <div className="flex  flex-col pt-4 items-center pb-10 ">
              <div className="w-[60px] h-[60px] mb-3 rounded-full bg-gray-300 flex justify-center items-center text-2xl font-semibold text-blue-800 ">
                {getAppart?.data?.unit?.owner?.fullName?.charAt(0)}
              </div>
              <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                {getAppart?.data?.unit?.owner?.fullName}
              </h5>

              <div className="flex mt-4 lg:mt-6">
                <a
                  href={`https://wa.me/+2${getAppart?.data?.unit?.whatsApp}`}
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white border-2 border-gray-200 rounded-lg hover:bg-gray-100"
                >
                  <i className="fa-brands fa-whatsapp text-green-600 text-3xl "></i>
                </a>
                <a
                  href={`tel:+2${getAppart?.data?.unit?.owner?.phone}`}
                  className="py-2 px-4 ms-2 text-lg font-medium text-gray-900 text-center focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 "
                >
                  <i className="fa-solid fa-phone text-blue-800 pr-3"></i>
                  Call
                </a>
              </div>
            </div>
          </div>

          {/* Similar Properties Section */}
          <div className=" block order-1 lg:my-6 border-2 rounded-md shadow-sm ">
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
        </aside>

        {/* Main Content */}
        <div className="flex-1  space-y-6">
          {/* Property Details */}
          <div className="property-details">
            <div className="flex  justify-between">
              <h1 className="md:text-4xl text-3xl font-bold mb-2  text-blue-900 ">
                {" "}
                <span className=" font-serif font-medium">EGP</span> {getAppart?.data?.unit?.monthlyPrice}
              </h1>
              <div className=" flex justify-end items-center text-yellow-300 text-2xl">

                {getAppart?.data?.unit?.rating} <i className="fa-solid fa-star ml-1" />


              </div>
            </div>
            <p className="text-gray-800 font-sans font-semibold">
              {getAppart?.data?.unit?.title}
            </p>
            <ul className="mt-5 space-y-3 text-lg text-gray-800 ">
              <span className="mr-4">
                <i className="fa-solid fa-bed ml-2"></i> {getAppart?.data?.unit?.bedrooms} Beds
              </span>
              <span className="mr-4">
                <i className="fa-solid fa-bath ml-2"></i> {getAppart?.data?.unit?.bathrooms} baths
              </span>
              <span className="mr-4">
                <i className="fa-solid fa-ruler-combined text-lg ml-2"></i> {getAppart?.data?.unit?.size}
                {" "}Sq.M
              </span>
            </ul>
            <p className="mt-3 text-gray-700 text-lg font-medium">
              {getAppart?.data?.unit?.description}
            </p>
          </div>

          {/* Additional Property Information */}
          <div className="">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-blue-900">
              Property Information
            </h2>
            <div className="grid lg:grid-cols-2  gap-3 text-lg ">
              <p className="border-b-2 flex justify-around  border-gray-100  lg:w-[70%] py-3 lg:text-xl">
                <p>Type</p>
                <span className="font-semibold ml-16 lg:ml-8 uppercase">{getAppart?.data?.unit?.category}</span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>The Floor </p>
                <span className="font-semibold ml-16 lg:ml-8">{getAppart?.data?.unit?.propertyLevel}</span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>Property Number</p>
                <span className="font-semibold ml-16 lg:ml-8">{getAppart?.data?.unit?.PropertyNumber}</span>
              </p>

              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p>Furnishing</p>
                <span className="font-semibold ml-16 lg:ml-8">{getAppart?.data?.unit?.furnished ? 'Furnished' : 'UnFurnished'}</span>
              </p>

              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p> Deposite</p>
                <span className="font-semibold ml-16 lg:ml-7">
                  {getAppart?.data?.unit?.deposit} EGP
                </span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p> Insurance</p>
                <span className="font-semibold ml-16 lg:ml-7">
                  {getAppart?.data?.unit?.insurance} EGP
                </span>
              </p>
              <p className="border-b-2 border-gray-100 flex justify-around lg:w-[70%] py-3 lg:text-xl">
                <p> Date Added</p>
                <span className="font-semibold ml-16 lg:ml-7">
                  {formattedDate}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function RatingStars({ unit }) {
    const [userRating, setUserRating] = useState(null);
    const [hoverRating, setHoverRating] = useState(null);
    const LOCAL_KEY = "unit_ratings";

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};
        if (saved[unit._id]) {
            setUserRating(saved[unit._id]);
        }
    }, [unit._id]);

    const handleRate = (rate) => {
        const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) || {};

        if (saved[unit._id]) {
            toast.error("You already rated this unit.");
            return;
        }

        saved[unit._id] = rate;
        localStorage.setItem(LOCAL_KEY, JSON.stringify(saved));
        setUserRating(rate);
        toast.success(`You rated this unit ${rate}⭐`);
    };

    return (
        <div className="mt-2">
            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                    <i
                        key={star}
                        className={`fa-star text-xl cursor-pointer transition ${
                            (hoverRating || userRating || unit.rating) >= star
                                ? "fa-solid text-yellow-400"
                                : "fa-regular text-gray-400"
                        }`}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(null)}
                        onClick={() => handleRate(star)}
                    ></i>
                ))}
            </div>
        </div>
    );
}
