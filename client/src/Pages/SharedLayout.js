import { Outlet, Link } from "react-router-dom";
import Header from "../Components/Admin/header";

const SharedLayout = () => {
return (
    <>
    <Header />
    <Outlet />
    </>
)
}

export default SharedLayout