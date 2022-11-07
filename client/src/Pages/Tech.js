import { Link, NavLink } from "react-router-dom";
import userTickets from "../data";
import "../CssFiles/tech.css";
import Navbar from "../Components/Navbar";

const Tech = () => {


  console.log(userTickets);
  return (
    <>
      <Navbar />
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
