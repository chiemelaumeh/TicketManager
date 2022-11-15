import AdminSingle from "./AdminSingle"
import { useEffect, useState } from 'react'
import axios from 'axios'




const TicketHistory = () => {

    const [ticket, setTicket] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:6001/admin/tickets')
            setTicket(result.data)
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="table-container">
                <div className="table-text" >Ticket#</div>
                <div className="table-text" >Campus</div>
                <div className="table-text" >Category</div>
                <div className="table-text" >Urgency</div>
                <div className="table-text" >Status</div>
                <div className="table-text" >ETR</div>
            </div>
            {ticket.map((elem) => (
                <AdminSingle elem={elem} key={elem.ticket_id} />
            ))}
        </>

    )
}

export default TicketHistory