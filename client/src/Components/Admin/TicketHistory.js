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
                <h2 className="table-text" >Ticket#</h2>
                <h2 className="table-text" >Campus</h2>
                <h2 className="table-text" >Category</h2>
                <h2 className="table-text" >Urgency</h2>
                <h2 className="table-text" >Status</h2>
                <h2 className="table-text" >ETR</h2>
            </div>
            {ticket.map((elem) => (
                <AdminSingle elem={elem} key={elem.ticket_id} />
            ))}
        </div>

    )
}

export default TicketHistory