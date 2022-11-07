import { Link, NavLink } from "react-router-dom";
import userTickets from "../data";
import "../CssFiles/tech.css"
const Tech = () => {
  console.log(userTickets);
  return (
    <>

      <nav className="navbar">
            <input type="search" className="search" placeholder="Search"/>
      </nav>
      <div className="ticketboard">
        
        {userTickets.map((ticket) => {
          return (
            <article className="oneticket" key={ticket.ticket_id}>
             
                <h3>{ticket.category}</h3>
            
            </article>
          );
        })}
      </div>
    </>
  );
};

export default Tech;
