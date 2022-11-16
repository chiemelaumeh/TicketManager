import {Outlet, Navigate } from "react-router-dom";


const ProtectedRoutes = ({user}) => {

    if(user.accessRole === 'admin' || user.accessRole === 'tech' || user.accessRole === 'User'){
        return <>
        <Navigate to={`/${user.accessRole}`} />
        <Outlet />
        </>
    }else{
        return <Navigate to='/' />
    }
};

export default ProtectedRoutes;