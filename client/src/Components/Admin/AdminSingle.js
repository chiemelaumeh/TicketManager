

const AdminSingle = ({ elem }) => {
    return (
        <div className='single-ticket'>
            <div className="ticket-div">{elem.ticket_id}</div>
            <div className="ticket-div">{elem.name}</div>
            <div className="ticket-div">{elem.category}</div>
            <div className="ticket-div">{elem.priority}</div>
            <div className="ticket-div">{elem.status}</div>
            <div className="ticket-div">{elem.eta}</div>
        </div>
    )
}


export default AdminSingle