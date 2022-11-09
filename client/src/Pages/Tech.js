import { Link, NavLink } from "react-router-dom";
import userTickets from "./data";
import "../CssFiles/tech.css";
import Navbar from "../Components/Navbar";

const Tech = () => {
  // console.log(userTickets);
  const claimed = userTickets.filter((c) => c.assigned == true);
  // console.log(claimed)
  const unclaimed = userTickets.filter((c) => c.assigned == false);
  // console.log(unclaimed)
  return (
    <>
      <Navbar />
      <div className="mainticket">
        <div className="sidenav">SIDE MENU HERE</div>
        <div className="ticket-board">
          <h3 className="portal-text">TECH PORTAL</h3>
          <div className="all-tickets">
            <div className="unclaimed-tickets">
              {claimed.map((ticket) => {
                return (
                  <article className="ticket unclaimed-oneticket" key={ticket.ticket_id}>
                    {/* <h3>{ticket.ticket_id}</h3> */}
                    <p>{ticket.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="claimed-tickets">
              {unclaimed.map((ticket) => {
                return (
                  <article className="ticket claimed-oneticket" key={ticket.ticket_id}>
                    <h3>{ticket.ticket_id}</h3>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tech;
