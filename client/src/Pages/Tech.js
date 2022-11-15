import { Link, NavLink } from "react-router-dom";
import userTickets from "./data";
import "../CssFiles/tech.css";
import Navbar from "../Components/Navbar";
import { useContext, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGear } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaTicketAlt} from "react-icons/fa";
import TechContext from "../Contexts/TechPageContext";

const Tech = () => {

  const {tickets, setTickets} = useContext(TechContext)


  const [open, setOpen] = useState(true);
  // console.log(userTickets);
  const claimed = userTickets.filter((c) => c.assigned == true);
  // console.log(claimed)
  const unclaimed = userTickets.filter((c) => c.assigned == false);
  // console.log(unclaimed)
  const handleClick = () => {
    if (open) {
      setOpen(!true);
    } else {
      setOpen(true);
    }
  };

  




  return (
    <>
      <Navbar />
      <div className="mainticket">
        <div className={open ? "open-sidenav" : "close-sidenav"}>
         
          <FaBars className="menubars" onClick={handleClick} />
          <div className={open ? "menu-items" : "menu-items-hide"}>
            <li className="menu-list">HOME <FaHome className="menu-icon"/></li>
            <li className="menu-list">TICKETS <FaTicketAlt className="menu-icon"/></li>
            <li className="menu-list">RESOLVED <FaCheck className="menu-icon"/></li>
            <li className="menu-list">SETTINGS <AiFillSetting className="menu-icon"/></li>

          </div>
        </div>
        <div className="ticket-board">
          <h3 className="portal-text">TECH PORTAL</h3>
          <div className="all-tickets">
            <div className="unclaimed-tickets">
              {claimed.map((ticket) => {
                return (
                  <article
                    className="ticket unclaimed-oneticket"
                    key={ticket.ticket_id}
                  >
                    {/* <h3>{ticket.ticket_id}</h3> */}
                    <p>{ticket.description}</p>
                  </article>
                );
              })}
            </div>
            <div className="claimed-tickets">
              {unclaimed.map((ticket) => {
                return (
                  <article
                    className="ticket claimed-oneticket"
                    key={ticket.ticket_id}
                  >
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
