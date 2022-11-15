import { Link, NavLink } from "react-router-dom";
import "../CssFiles/tech.css";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding} from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGear } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaTicketAlt} from "react-icons/fa";
import TechContext from "../Contexts/TechPageContext";
import axios from "axios";

const Tech = () => {


  const {tickets, setTickets} = useContext(TechContext)


  const [open, setOpen] = useState(true);
  // console.log(userTickets);
  const claimed = tickets.filter((c) => c.assigned == true);
  // console.log(claimed)
  const unclaimed = tickets.filter((c) => c.assigned == false);
  // console.log(unclaimed)
  const handleClick = () => {
    if (open) {
      setOpen(!true);
    } else {
      setOpen(true);
    }
  };

  useEffect(() => {
    const getTickets = async () => {
      const {data} = await axios.get(`http://localhost:6001/tech/Tickets/campus/1`)
      console.log(data)
      setTickets(data)
    }
    getTickets()
  }, [tickets])

  




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
              {claimed.map((tickets) => {
                return (
                  <article
                    className="ticket unclaimed-oneticket"
                    key={tickets.ticket_id}
                  >
                    {/* <h3>{ticket.ticket_id}</h3> */}
                    <p>{tickets.ticket_id}</p>
                    <p>{tickets.descrip}</p>
                  </article>
                );
              })}
            </div>
            <div className="claimed-tickets">
              {unclaimed.map((tickets) => {
                return (
                  <article
                    className="ticket claimed-oneticket"
                    key={tickets.ticket_id}
                  >
                    <p>{tickets.ticket_id}</p>
                    <p>{tickets.descrip}</p>
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
