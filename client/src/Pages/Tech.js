import { Link, Navigate, NavLink } from "react-router-dom";
import LoginContext from "../Contexts/loginContext";
import "../CssFiles/tech.css";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaGear } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import TechContext from "../Contexts/TechContext";
import TechPageContext from "../Contexts/TechPageContext";
import axios from "axios";

const Tech = () => {
  const {user} = useContext(LoginContext)
  const { tickets, setTickets } = useContext(TechPageContext);
  const { open, setOpen} = useContext(TechContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  // console.log(userTickets);
  const claimed = tickets.filter((c) => c.assigned == false);
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
      const { data } = await axios.get(
        `http://localhost:6001/tech/Tickets/campus/${user.campus_id}`
        );
      setTickets(data);
    };
    getTickets();
  }, []);

  return (
    <>
      <Navbar handleSearch={handleSearch} searchText={searchText} />
      <div className="mainticket">
        <div className={open ? "open-sidenav" : "close-sidenav"}>
          <FaBars className="menubars" onClick={handleClick} />
          <div className={open ? "menu-items" : "menu-items-hide"}>
            <li className="menu-list">
              HOME <FaHome className="menu-icon" />
            </li>
            <li className="menu-list">
              TICKETS <FaTicketAlt className="menu-icon" />
            </li>
            <li className="menu-list">
              RESOLVED <FaCheck className="menu-icon" />
            </li>
            <li className="menu-list">
              SETTINGS <AiFillSetting className="menu-icon" />
            </li>
          </div>
        </div>
        <div className="ticket-board">
          <h3 className="portal-text">TECH PORTAL</h3>
          <div className="all-tickets">
            <div className="claimed-tickets">
              {claimed
                .filter((value) => {
                  if (searchText === "") {
                    return value;
                  } else if (
                    value.category
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    value.ticket_id
                      .toString()
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((tickets) => {
                  return (
                  <Link to={`/tech/${tickets.ticket_id}`} className="ticket-link">
                    <article
                      className="ticket claimed-oneticket"
                      key={tickets.ticket_id}
                    >
                      
                      <h4 className="ticketNumber">Ticket {tickets.ticket_id}</h4>
                      <p className="ticketCat">Category: {tickets.category}</p>
                      <p className="ticketDescription">Status: {tickets.status}</p>
                    </article>
                  </Link>
                  );
                })}
            </div>
            <div className="unclaimed-tickets">
              {unclaimed
                .filter((value) => {
                  if (searchText === "") {
                    return value;
                  } else if (
                    value.category
                      .toLowerCase()
                      .includes(searchText.toLowerCase()) ||
                    value.ticket_id
                      .toString()
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return value;
                  }
                })
                .map((tickets) => {
                  return (
                    <Link to={`/tech/${tickets.ticket_id}`} className="ticket-link">
                    <article
                      className="ticket unclaimed-oneticket"
                      key={tickets.ticket_id}
                    >
                      
                      <h4 className="ticketNumber">Ticket {tickets.ticket_id}</h4>
                      <p className="ticketCat">Category: {tickets.category}</p>
                      <p className="ticketDescription">Status: {tickets.priority}</p>
                    </article>
                    </Link>
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
