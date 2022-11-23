import ArchivedTickets from "./ArchivedTickets";

const ArchivedList = ({archived, searchText}) => {

    return(
        <>
        {archived.filter((value) => {
            if (searchText === "") {
                return value;
            } else if (value.category.toLowerCase().includes(searchText.toLowerCase()) || value.ticket_id.toString().toLowerCase().includes(searchText.toLowerCase()) || value.priority.toLowerCase().includes(searchText.toLowerCase()) || value.assigned.toLowerCase().includes(searchText.toLowerCase())) {
                return value;
            }}).map((ticket) => (
                <ArchivedTickets ticket={ticket} key={ticket.ticket_id} />
            ))}
        </>
    )
};

export default ArchivedList;