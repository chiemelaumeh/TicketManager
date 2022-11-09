import { useState, createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [userRole, setUserRole] = useState('');

    return (
        <LoginContext.Provider
            value = {{userRole, setUserRole}}>
                {children}
            </LoginContext.Provider>
    )
};



export default LoginContext;