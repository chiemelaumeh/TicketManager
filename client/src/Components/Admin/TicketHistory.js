import AdminSingle from "./AdminSingle"
import { useEffect, useState } from 'react'
import axios from 'axios'




const TicketHistory = () => {

    const [ticket, setTicket] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://taskappapi.onrender.com/admin/tickets')
            setTicket(result.data)
        }
        fetchData()
    }, [])

    return (
        <div className="ManageDiv">
        <div>
            <h2 className="ManageAccountH2">Ticket History</h2>
        </div>
            <div className="table-container">
                <div className="table-text" >Ticket#</div>
                <div className="table-text" >Campus</div>
                <div className="table-text" >Category</div>
                <div className="table-text" >Urgency</div>
                <div className="table-text" >Status</div>
                <div className="table-text" >ETR</div>
            </div>
            <div className="singleTicketContainer">
            {ticket.map((elem) => (
                <AdminSingle elem={elem} key={elem.ticket_id} />
            ))}
            </div>
        </div>

    )
}

export default TicketHistory