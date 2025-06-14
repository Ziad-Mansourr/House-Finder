import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types";
import axiosInstance from "../services/axiosInstance";
export const wishListContext = createContext();

export default function WishListContextProvider({ children }) {
    const token = localStorage.getItem('token');
    const [wish , setWish] = useState(null);
    let headers = {
        Authorization: `Bearer ${token}`,
    }
    function addWish(id) {
        return axiosInstance.post(`users/favorites`, { unit: id }, { headers })
            .then((res) =>{
                getWish();
                return res;

            } 
        )
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    function delWish(id) {
        return axiosInstance.delete(`users/favorites`, {
            headers: headers,
            data: { unit: id },
        })
            .then((res) =>{
                getWish();
                return res;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    function getWishList(){
        return axiosInstance.get(`users/favorites`,
            {headers}
        ).then((response)=>response)
        .catch((error)=>error)
    }
    async function getWish(){
        let {data} = await getWishList();
        setWish(data);
        // console.log(data);
      }
       useEffect(()=>{
          getWish()   
        },[])
    return (
        <>
            <wishListContext.Provider value={{addWish  ,getWish,setWish, getWishList , wish , delWish}}>
                {children}
            </wishListContext.Provider>
        </>
    )
}
WishListContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};