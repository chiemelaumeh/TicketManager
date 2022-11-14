import { useState, createContext } from "react";

const LoginContext = createContext();

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState('');

    const handleLogOut = () => {
        setUser('')
        sessionStorage.removeItem('testToken')
    }

    return (
        <LoginContext.Provider
            value = {{user, setUser, handleLogOut}}>
                {children}
            </LoginContext.Provider>
    )
};



export default LoginContext;