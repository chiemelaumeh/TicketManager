import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../Contexts/loginContext";
import { BiLogOut } from 'react-icons/bi'
import { IoTicketOutline } from 'react-icons/io5'
import { AiOutlineUser } from 'react-icons/ai'
import { MdOutlineManageAccounts } from 'react-icons/md'
import { Link } from "react-router-dom";


const Header = () => {
    const { handleLogOut } = useContext(LoginContext)

    return (
        <>
            
            <h1 className="NavBarTitle">ATHENA</h1>
            <nav className="NavBar">
                <NavLink to="/admin/CreateAccount" className="NavBarComp"><AiOutlineUser /> Create Account</NavLink>
                <NavLink to="/admin/ManageAccounts" className="NavBarComp"><MdOutlineManageAccounts /> Manage Accounts</NavLink>
                <NavLink to="/admin/TicketHistory" className="NavBarComp"><IoTicketOutline /> Ticket History</NavLink>
                <NavLink to="/">
                <button onClick={handleLogOut} className="NavBarComp"><BiLogOut /> Sign Out</button>
            </NavLink>
            </nav>
        </>
    )
}

export default Header 
