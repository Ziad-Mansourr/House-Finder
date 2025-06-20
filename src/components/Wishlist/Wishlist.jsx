import { useContext, useMemo, useState } from "react";
import oip from "../../img/OIP.jpeg";
import hom from "../../img/home2.jpeg";
import home from "../../img/home3.peg.jpeg";
import ho from "../../img/home4.jpg";
import R from "../../img/R.jpeg";
import { Link } from "react-router-dom";
import { wishListContext } from "../../context/userWishlist";
import toast from "react-hot-toast";

export default function Wishlist() {
  // const [count, setCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [R, oip, home, hom, oip, ho, home];
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  let { wish, addWish, delWish } = useContext(wishListContext);
  console.log(wish);

  const isProductInWishlist = useMemo(
    () => (id) => wish?.body?.wishlist?.some((product) => product._id === id),
    [wish]
  );
  const handleDate = (date) => {
    let d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }); 
  }
  async function handleWishList(id) {

      toast.loading("Delete Apartment From WishList");
      let { data } = await delWish(id);
      if (data?.status === "success") {
        toast.dismiss();
        toast.success("Deleted Apartment Successfully");
      }
  }

  return (
    <>
      <h1 className="w-[90%] m-auto pt-10 font-serif text-blue-900">
        Favourites
      </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[90%] my-10 gap-4">
      {wish?.body?.wishlist?.map((apart) => {
        return <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative w-full h-60 overflow-hidden">
              <Link to={`/apartmentDetailes/${apart?.id}`}>
                {apart?.images?.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${index === currentSlide
                        ? "translate-x-0"
                        : "translate-x-full"
                      }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Link>
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all duration-300"
              >
                ❯
              </button>

              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-4">
                {apart?.images?.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
                ${index === currentSlide
                        ? "bg-white border border-white scale-110"
                        : "bg-gray-400"
                      }`}
                  />
                ))}
              </div>
            </div>

            <div className="p-4 ">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-800">EGP {apart?.monthlyPrice}</h2>
                
                <div onClick={()=>handleWishList(apart?.id)} className="">
                <i  className="fa-solid fa-heart text-3xl text-blue-800"></i>
                </div>    
                
              </div>

              <h3 className="text-lg font-semibold text-gray-700 mt-2">
                {apart?.address}
              </h3>
              <div className="flex items-center mt-4 space-x-4">
                <span className="flex items-center text-gray-600">
                  <i className="fa-solid fa-bed text-lg mr-2"></i>{apart?.bedrooms} 
                </span>
                <span className="flex items-center text-gray-600">
                  <i className="fa-solid fa-bath text-lg mr-2"></i>{apart?.bathrooms}
                </span>
                <span className="flex items-center text-gray-600">
                  <i className="fa-solid fa-ruler-combined text-lg mr-2"></i>{apart?.size}
                  sqm
                </span>
              </div>
              <h5 className="text-lg text-gray-500 mt-4">{handleDate(apart?.updatedAt)}</h5>
            </div>
          </div>
      })
      }
        </div>
    </>
  );
}
