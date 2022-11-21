import { Link } from "react-router-dom";

const ListClaimedTickets = ({tickets}) => {

    return (
        <>
        <Link to={`/tech/${tickets.ticket_id}`} className="ticket-link">
            <article className="ticket unclaimed-oneticket" id={tickets.ticket_id}>

                <h4 className="ticketNumber">{tickets.ticket_id}</h4>
                <p className="ticketCat">Category: {tickets.category}</p>
                <p className={tickets.priority == "1- Urgent" ? "ticketDescription" : "ticketDesc"}>{tickets.priority}</p>

            </article>
        </Link>
        </>
    )
}

export default ListClaimedTickets;