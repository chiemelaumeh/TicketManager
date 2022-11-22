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
import ListClaimedTickets from "../Components/ListClaimedTickets";
import ListUnclaimedTickets from "../Components/ListUnclaimedTickets";
import axios from "axios";

const Tech = () => {
  const { user } = useContext(LoginContext);
  const { tickets, setTickets } = useContext(TechPageContext);
  const { open, setOpen } = useContext(TechContext);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  // console.log(userTickets);
  const claimed = tickets.filter((c) => c.assigned !== "Pending" && typeof c.assigned === 'string');
  // console.log(claimed)
  const unclaimed = tickets.filter((c) => c.assigned === "Pending");
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
        `https://taskappapi.onrender.com/tech/Tickets/campus/${user.campus_id}`
      );
      setTickets(data);
    };
    getTickets();
  }, []);

  return (
    <>
      <Navbar handleSearch={handleSearch} searchText={searchText} />
      <div className="mainticket">
        {/* <div className={open ? "close-sidenav" : "close-sidenav"}>
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
        </div> */}
        <div className="ticket-board">
          <h3 className="portal-text">TECH PORTAL</h3>
          <hr />

          <div className="ticket-tag">
            <p className="tag">CLAIMED TICKETS</p>
            <p className="tag">UNCLAIMED TICKETS</p>
          </div>
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
                    <ListUnclaimedTickets key={tickets.ticket_id} tickets={tickets}/>
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
                    <ListClaimedTickets key={tickets.ticket_id} tickets={tickets}/>
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
