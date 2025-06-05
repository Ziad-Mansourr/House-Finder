import { createContext, useState } from "react"
import PropTypes from "prop-types";
import axiosInstance from "../services/axiosInstance";
export const RateContext = createContext();

export default function RateContextProvider({ children }) {
    const token = localStorage.getItem('token');
    let headers = {
        Authorization: `Bearer ${token}`,
    }
    function addRateing(id , rate) {
        return axiosInstance.post(`units/${id}/reviews`, {review:" " ,rating: rate }, { headers })
            .then((res) => res)
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    // function delWish(id) {
    //     return axiosInstance.delete(`users/favorites`, {
    //         headers: headers,
    //         data: { unit: id },
    //     })
    //         .then((res) => res)
    //         .catch((errors) => {
    //             console.log(errors);
    //             return errors;
    //         })
    // }
    return (
        <>
            <RateContext.Provider value={{ addRateing }}>
                {children}
            </RateContext.Provider>
        </>
    )
}
RateContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};