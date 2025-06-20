import { createContext, useEffect, useState } from "react"
import PropTypes from "prop-types";
import axiosInstance from "../services/axiosInstance";
export const UnitContext = createContext();

export default function UnitContextProvider({ children }) {
    const token = localStorage.getItem('token');
    let headers = {
        Authorization: `Bearer ${token}`,
    }
    const [unit, setUnit] = useState([]);

    function getUnit( loc,cat, beds, bath, start, end) {
        const query = [
            cat !== 'Residential' ? `category=${cat}` : '',
            beds !== '' ? `bedrooms=${beds}` : '',
            bath !== '' ? `bathrooms=${bath}` : '',
            start !== '' && end !== '' ? `monthlyPrice[gte]=${start}&monthlyPrice[lte]=${end}` : '',
            loc !== '' ? `search=${loc}` : ''
        ]
            .filter(Boolean)
            .join('&');
            console.log(query);
            
        return axiosInstance.get(`units?${query}`)
            .then((res) => {
                setUnit(res.data.data.units);
                
                return res;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    useEffect(()=>{
    getUnit('','Residential', '', '', '', '');
  } , []);
    return (
        <>
            <UnitContext.Provider value={{ getUnit, unit, setUnit }}>
                {children}
            </UnitContext.Provider>
        </>
    )
}
UnitContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};