import AdminSingle from "./AdminSingle"
import { useEffect, useState } from 'react'
import axios from 'axios'




const TicketHistory = () => {

    const [ticket, setTicket] = useState([])
    const [text, setText] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('http://localhost:6001/admin/tickets')
            setTicket(result.data)
            setLoading(false)
        }
        fetchData()
    }, [])


    const handleChange = (e) => {
        setText(e.target.value)

    }


    return (
        <div className="ManageDiv">
            <div>
                <h2 className="ManageAccountH2">Ticket History</h2>
                <input className="adminSearch" type='text' placeholder='Search' onChange={handleChange} value={text} />
            </div>
            <div className="table-container">
                <div className="table-text" >Ticket#</div>
                <div className="table-text" >Campus</div>
                <div className="table-text" >Category</div>
                <div className="table-text" >Urgency</div>
                <div className="table-text" >Status</div>
                <div className="table-text" >ETR</div>
            </div>
            {!loading &&
                <div className="singleTicketContainer">
                    {ticket.filter((value) => {

                        if (text === "") {
                            return value;
                        } else if (
                            value.category
                                .toLowerCase()
                                .includes(text.toLowerCase()) ||
                            value.ticket_id
                                .toString()
                                .toLowerCase()
                                .includes(text.toLowerCase()) ||
                            value.name
                                .toLowerCase()
                                .includes(text.toLowerCase()) ||
                            value.priority
                                .toLowerCase()
                                .includes(text.toLowerCase())
                        ) {
                            return value;
                        }
                    }).map((elem) => (
                        <AdminSingle elem={elem} key={elem.ticket_id} />
                    ))}

                </div>}

            {loading && <div className="singleTicketContainer"><div className='loading-spinner-admin'></div></div>}





        </div>

    )
}

export default TicketHistory