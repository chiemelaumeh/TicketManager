import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../Contexts/loginContext";
import { BiLogOut } from 'react-icons/bi'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'



const Header = () => {
    const { handleLogOut } = useContext(LoginContext)

    return (
        <> 
        <h1 className="NavBarTitle">ATHENA</h1>
            <button onClick={handleLogOut} id="LogOutBTN"><BiLogOut /> Sign Out</button>
        <nav className="NavBar">
            <NavLink to="/admin/CreateAccount" className="NavBarComp"><AiOutlineUser /> Create Accout</NavLink>
            <NavLink to="/admin/ManageAccounts" className="NavBarComp"><MdOutlineManageAccounts /> ManageAccounts</NavLink>
            <NavLink to="/admin/TicketHistory" className="NavBarComp"><IoTicketOutline /> TicketHistory</NavLink>
        </nav>
        </>
    )
}

export default Header 
