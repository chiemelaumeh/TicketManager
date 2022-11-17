import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../Contexts/loginContext";



const Header = () => {
    const { handleLogOut } = useContext(LoginContext)

    return (
        <> 
        <h1 className="NavBarTitle">ATHENA</h1>
        <nav className="NavBar">
            <NavLink to="/admin/CreateAccount" className="NavBarComp">Create Accout</NavLink>
            <NavLink to="/admin/ManageAccounts" className="NavBarComp">ManageAccounts</NavLink>
            <NavLink to="/admin/TicketHistory" className="NavBarComp">TicketHistory</NavLink>
        </nav>
            <button onClick={handleLogOut} id="LogOutBTN">log out</button>
        </>
    )
}

export default Header 
