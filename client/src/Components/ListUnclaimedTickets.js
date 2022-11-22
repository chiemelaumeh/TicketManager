import { Link } from "react-router-dom";

const ListUnclaimedTickets = ({tickets}) => {

    return (
        <>
        <Link to={`/tech/${tickets.ticket_id}`} className="ticket-link">
                  <article className="ticket claimed-oneticket" id={tickets.ticket_id}>
                      <h4 className="ticketNumber">Ticket# {tickets.ticket_id}</h4>
                      <p className="ticketCat">Category: {tickets.category}</p>

                      <p className="ticketDesc">Status: {tickets.status}</p>

                    </article>
        </Link>
        </>
    )
}

export default ListUnclaimedTickets;