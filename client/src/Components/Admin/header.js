import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../Contexts/loginContext";



const Header = () => {
    const {handleLogOut} = useContext(LoginContext)

    return(
        <nav className="NavBar">
        <h1 className="NavBarTitle">ATHENA</h1>
        <NavLink to ="/admin/CreateAccount" className="NavBarComp">Create Accout</NavLink>
        <NavLink to = "/admin/ManageAccounts" className="NavBarComp">ManageAccounts</NavLink>
        <NavLink to = "/admin/TicketHistory" className="NavBarComp">TicketHistory</NavLink>
        <button onClick={handleLogOut} className="NavBarComp" id = "LogOutBTN">log out</button>
        </nav>
    )
    }
    
    export default Header 
    // <nav>
    //     <h1>ATHENA</h1>
    //     <CreateAccount />
    //     <ManageAccounts />
    //     <TicketHistory />
    // </nav>