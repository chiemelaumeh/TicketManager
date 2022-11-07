
import { NavLink } from "react-router-dom";


const Header = () => {
    return(
        <nav>
        <h1>ATHENA</h1>
        <NavLink to ="/admin/CreateAccount">Create Accout</NavLink>
        <NavLink to = "/admin/ManageAccounts">ManageAccounts</NavLink>
        <NavLink to = "/admin/TicketHistory">TicketHistory</NavLink>
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