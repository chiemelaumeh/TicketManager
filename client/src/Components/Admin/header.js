import { NavLink } from "react-router-dom";
import { useContext } from "react";
import LoginContext from "../../Contexts/loginContext";



const Header = () => {
    const {handleLogOut} = useContext(LoginContext)

    return(
        <nav>
        <h1>ATHENA</h1>
        <NavLink to ="/admin/CreateAccount">Create Accout</NavLink>
        <NavLink to = "/admin/ManageAccounts">ManageAccounts</NavLink>
        <NavLink to = "/admin/TicketHistory">TicketHistory</NavLink>
        <button onClick={handleLogOut}>log out</button>
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