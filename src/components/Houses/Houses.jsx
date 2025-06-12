import { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import useUnit from "../../hooks/useUnit";
import { wishListContext } from "../../context/userWishlist";
import toast from "react-hot-toast";
export default function Houses() {
  let { data, isLoading } = useUnit();
  console.log(data?.data?.data?.units);
  // const isProductInWishlist = useMemo(
    //   () => (id) => wish?.data?.some((product) => product.id === id),
    //   [wish]
    // );
  const [addFav, setAddFav] = useState(false);
  let { addWish, delWish } = useContext(wishListContext);
  async function handleWishList(id) {
    if (addFav) {
      console.log(addFav);
      toast.loading("Removing Appartment From WishList");
      let { data } = await delWish(id);

      console.log(data);
        if (data?.status === "success") {
          toast.dismiss();
          toast.success("Appartment Removed From WishList");
          setAddFav(false);
        }
    } else {
      toast.loading("Adding Appartment From WishList");
      let { data } = await addWish(id);
      console.log(data);
        if (data?.status === "success") {
          toast.dismiss();
          toast.success("Appartment Adding Successfuly");
         
        }

      setAddFav(true);

    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    autoplay: true,
  
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  return (
    <>
      <div className="col-span-12 md:col-span-7">
        {
          data?.data?.data?.units?.map((unit, index) => {
            return <div key={unit._id} className=" shadow-md rounded-lg flex-wrap bg-[rgb(249,249,249)] flex mt-6 md:mt-8 lg:mt-10 mb-7  ">
              <div className="lg:w-[40%] h-[340px] w-[100%] relative ">

                <div onClick={() => handleWishList(unit?._id)}>
                  <i
                    className={
                      addFav
                        ? "fa-solid fa-heart text-white absolute bottom-12 right-2 z-30 text-2xl"
                        : "fa-regular fa-heart text-white absolute bottom-12 right-2 z-30 text-2xl"
                    }
                  />
                </div>
                <Link to={`/apartmentDetailes/${unit?._id}`}>
                  <Slider {...settings}>
                    {

                      unit?.images?.map((image, index) => <div key={index}>
                        <img
                          className="w-full h-[300px]"
                          src={image}
                          alt="unit"
                        />
                      </div>

                      )
                    }
                    <div >
                      <img
                        className="w-full h-[300px]"
                        src={'https://res.cloudinary.com/dsafqgv3j/image/upload/q_auto:good/c_fill,g_auto,h_1333,w_2000/teizmletkyxvoonytiu3?_a=BAMCkGWO0'}
                        alt="unit"
                      />
                    </div>

                  </Slider>
                </Link>
              </div>
              <div className="  ml-10  flex flex-col  justify-center">
                <h2 className="font-bold text-2xl">
                  {" "}
                  <span className="text-base font-medium">EGP</span> {unit?.monthlyPrice}
                </h2>
                <div className="flex my-2 md:my-4">
                  <h4 className="border-r-2 pr-4 font-semibold">{unit?.category} </h4>
                  <div className="flex border-r-2 px-4">
                    <h4 className="pr-2">
                      <i className="fa-solid fa-bed "></i> {unit?.bedrooms}
                    </h4>
                    <h4>
                      <i className="fa-solid fa-bath"></i> {unit?.bathrooms}
                    </h4>
                  </div>
                  <h4>
                    <span className="font-bold pl-3">Area: </span>{unit?.size} Sq.M
                  </h4>
                </div>
                <div className="flex items-center">
                  <i className="fa-solid fa-location-dot pr-2"></i>
                  <h4>{unit?.address}</h4>
                </div>
                <h4 className="mr-2 md:mt-4 text-blue-700">
                  {unit?.title.split(" ").slice(0, 7).join(" ")}...
                </h4>
                <div className="md:my-8 my-4 flex items-center">
                  <a
                    href={`tel:+${unit?.owner?.phone}`}
                    className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                  >
                    <i className="fa-solid fa-phone"></i> Call
                  </a>
                  <a
                    href={`mailto:${unit?.owner?.email}`}
                    className="border-2 border-blue-500  p-2 rounded-xl mr-5 text-blue-900 bg-slate-200"
                  >
                    <i className="fa-regular fa-envelope"></i> Email
                  </a>
                  <a
                    href={`https://wa.me/+2${unit?.whatsApp}`}
                    target="_blank"
                    className="border-2 border-blue-500  py-1 px-6 rounded-xl mr-5 text-blue-900 text-2xl bg-slate-200"
                  >
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>

                  <i className="fa-solid text-yellow-300 fa-star ml-20 text-2xl mr-2 "></i> {unit?.rating}
                </div>
              </div>
            </div>

          })
        }

      </div>
    </>
  );
}
