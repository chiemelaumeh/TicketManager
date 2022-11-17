import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import '../../CssFiles/SinglePage.css';
import Comment from './Comment';
import CommentContext from '../../Contexts/CommentsContext';
import SingleTicketContext from '../../Contexts/SingleTicketContext';

const SinglePage = () => {
    const { ticket_id } = useParams();
    console.log(ticket_id)
    
    const { comments, setComments } = useContext(CommentContext);
    const { ticket, setTicket } = useContext(SingleTicketContext);
    const [techComment, setTechComment] = useState('');
    
    function handleChange(e) {
        setTechComment(e.target.value)
    }; 

    const postComment = async () => {
        const response = await axios.post("http://localhost:6001/tech/ticket/comment", {
            user_id: 11,
            ticket_id: 27,
            comment: techComment
        })
        console.log(response)
    };

    function handleSubmit(e) {
        e.preventDefault()
        postComment()
        setTechComment('')
    };

    useEffect(() => {
        const getComments = async () => {
            const { data } = await axios.get(`http://localhost:6001/tech/ticket/27/comment`)
            setComments(data)
            //console.log(data)
        }
        getComments()
    }, [comments]);
    
    useEffect(() => {
        const getSingleTicket = async () => {
            const { data } = await axios.get(`http://localhost:6001/tech/ticket/27`)
            setTicket(data[0])
        }
        getSingleTicket()
    }, []);

    return (
        <div className='singlePageContainer'>

            <div className='SingleTicket'>
                <h4>UserName Pic??</h4>
                <h3 className='TicketTitle'>Ticket Category: {ticket.category}</h3>
                <p className='ticketDescrip'>Ticket Description: {ticket.descrip}</p>
            </div>
            <div className='Line'></div>

            <div className='SingleTicket2'>
                <h2>Ticket #{ticket.ticket_id}</h2>
                <h3 id='camp'>Campus: <span id='highlight'>{ticket.name}</span></h3>
                <h3 id='camp'>Priority: <span id='highlight'>{ticket.priority}</span></h3>
                <h3 id='camp'>Date: <span id='highlight'>{ticket.create_date}</span></h3>
                <div>
                    <div className='Comment'>{comments.map((data) => (
                        <Comment key={data.ticket_id} data={data} />
                    ))} 
                    <Link to="/tech">
                <button className="back-to-tickets">Tickets</button>
              </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <input type='text' value={techComment} onChange={handleChange} />
                        <input type='submit' value='Submit Comment' />
                    </form>

                </div>
            </div>
        </div>
    )
}

export default SinglePage;