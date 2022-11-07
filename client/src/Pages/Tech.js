import { Link, NavLink } from "react-router-dom";
import userTickets from "../data";
import "../CssFiles/tech.css";
const Tech = () => {
  console.log(userTickets);
  return (
    <>
      <nav className="navbar">
        <div className="name">
          <button className="navlink btn">BLUE OCEAN</button>
          <button className="navlink btn">USERS</button>
       
        </div>
        <input type="TEXT" className="search" placeholder="Search" />
        <div className="sign">
          <button className="signoff btn">Sign Off</button>
        </div>
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
