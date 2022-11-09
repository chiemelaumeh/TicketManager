import { useState, createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [userRole, setUserRole] = useState('');

    const handleLogOut = () => {
        setUserRole('')
        sessionStorage.removeItem('testToken')
    }

    return (
        <LoginContext.Provider
            value = {{userRole, setUserRole, handleLogOut}}>
                {children}
            </LoginContext.Provider>
    )
};



export default LoginContext;