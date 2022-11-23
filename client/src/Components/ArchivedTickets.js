const ArchivedTickets = ({ticket}) => {

    return(
        <div>
            <article className="resolved-ticket" id={ticket.ticket_id}>
                <h4 className="ticketNumber">Ticket# {ticket.ticket_id}</h4>
                <p className="ticketCat">Category: {ticket.category}</p>
                <p className="ticketCat">Priority: {ticket.priority}</p>
                <p className="ticketCat">Assigned: {ticket.assigned}</p>
                <p className="ticketCat">Status: {ticket.status}</p>
            </article>
        </div>
    )
};

export default ArchivedTickets;