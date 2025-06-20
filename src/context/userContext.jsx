import { createContext } from "react"
import PropTypes from "prop-types";
import axiosInstance from "../services/axiosInstance";
export const usersContext = createContext();

export default function UserContextProvider({children}) {
    // const [name, setName] = useState('');
    // const [name, setName] = useState('');
    function login(values) {
       return axiosInstance.post(`users/login`, values)
            .then(({ data }) => {
                localStorage.setItem('name',data.body.user.fullName);
                localStorage.setItem('phone',data.body.user.phone);
                localStorage.setItem('email',data.body.user.email);
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
            <usersContext.Provider value={{ login }}>
                {children}
            </usersContext.Provider>
        </>
    )
}
UserContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};