import { createContext, useState } from "react"
import PropTypes from "prop-types";
import axiosInstance from "../services/axiosInstance";
export const wishListContext = createContext();

export default function WishListContextProvider({ children }) {
    const token = localStorage.getItem('token');
    let headers = {
        Authorization: `Bearer ${token}`,
    }
    function addWish(id) {
        return axiosInstance.post(`users/favorites`, { unit: id }, { headers })
            .then((res) => res)
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
            .then((res) => res)
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    return (
        <>
            <wishListContext.Provider value={{ addWish, delWish }}>
                {children}
            </wishListContext.Provider>
        </>
    )
}
WishListContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};