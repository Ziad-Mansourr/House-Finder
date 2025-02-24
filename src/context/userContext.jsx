import { createContext, useContext, useState } from "react"
import axiosInstance from "../services/axiosInstance";
export const usersContext = createContext();

export default function UserContextProvider(props) {
    const [name, setName] = useState('');
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    function login(values) {
       return axiosInstance.post(`users/login`, values)
            .then(({ data }) => {
                setName(data.body.user.fullName);
                console.log(data.body.user.fullName);
                return data;
            })
            .catch((errors) => {
                console.log(errors);
                return errors;
            })
    }
    return (
        <>
            <usersContext.Provider value={{ name, login }}>
                {props.children}
            </usersContext.Provider>
        </>
    )
}
