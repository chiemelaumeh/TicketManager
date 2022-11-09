import { useState, useEffect, useContext } from 'react'
import Dropdown from 'react-dropdown'
import axios from 'axios'
import { useParams } from "react-router-dom";
import '../../CssFiles/SinglePage.css'
import SingleTicketContext from '../../Contexts/SingleTicketContext';

const SinglePage = () => {
    const ticketTarget = useParams()

    const [text, setText] = useState('')

    const {ticket ,setTicket} = useContext(SingleTicketContext)

    const options = [
        'Not Started', 'In Progress', 'Completed'
    ]
    const defaultOption = options[0]

    const onSelect = () => {

    }

    useEffect(() => {
        const getSingleTicket = async () => {
            const {data} = await axios.get(`http://localhost:6001/tech/ticket/1`)
            setTicket(data[0])
        }
        
        getSingleTicket()
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault()
        //Make a post request to comments

        setText('')
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }


    return (
        <div className='singlePageContainer'>
            <h1>Single Page</h1>
            <div className='SingleTicket'>
                <h4>UserName</h4>
                <h3>Ticket Title: {ticket.category}</h3>
                <p>Ticket Description: {ticket.descrip}</p>
                <h6>Change Ticket Status</h6>
                <Dropdown options={options} conChange={onSelect} value={defaultOption} />
            </div>

            <div>
                <h2>Ticket #{ticket.ticket_id}</h2>
                <h3>Campus: {ticket.name}</h3>
                <h3>Priority: {ticket.priority}</h3>
                <h3>Date: TODAY</h3>
                <form onSubmit={handleSubmit} className="postComment">
                    <input type="text" value={text} onChange={handleChange} className="commentInputBox" />
                    <button type="submit">Submit Comment</button>
                </form>
            </div>
        </div>
    )
}

export default SinglePage