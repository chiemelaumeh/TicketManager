import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import '../../CssFiles/SinglePage.css';
import ListComments from './ListComments';

import CommentContext from '../../Contexts/CommentsContext';
import SingleTicketContext from '../../Contexts/SingleTicketContext';
import LoginContext from "../../Contexts/loginContext";

const SinglePage = () => {
    const { ticket_id } = useParams();
    const { user } = useContext(LoginContext)
    const { comments, setComments } = useContext(CommentContext);
    const { ticket, setTicket } = useContext(SingleTicketContext);
    const [techComment, setTechComment] = useState('');
    const [load, setLoad] = useState(false)
    const [commentError, setCommentError] = useState('')
    const [claimed, setClaimed] = useState('')
    const [render, setRender] = useState(false)

    function handleChange(e) {
        setTechComment(e.target.value)
        setCommentError('')
    };
    //const response = await axios.post("https://taskappapi.onrender.com/tech/ticket/comment"


    const postComment = async () => {
        // console.log(user)
        try {
            const response = await axios.post("https://ticket-manager-api.onrender.com/tech/ticket/comment", {
                user_id: user.user_id,
                ticket_id: ticket_id,
                comment: techComment
            })
            setRender(!render)
        } catch (error) {
            // console.log(error.response.data.error.comment)
            setCommentError(error.response.status)
        }

    };

    function handleSubmit(e) {
        e.preventDefault()
        postComment()
        setTechComment('')
    };

    useEffect(() => {
        const getSingleTicket = async () => {
            // const { data } = await axios.get(`https://taskappapi.onrender.com/tech/ticket/${ticket_id}`)

            const { data } = await axios.get(`https://ticket-manager-api.onrender.com/tech/ticket/${ticket_id}`)

            // console.log(data)
            setTicket(data[0])

        }
        getSingleTicket()
    }, [claimed]);

    useEffect(() => {
        const getComments = async () => {


            // const { data } = await axios.get(`https://taskappapi.onrender.com/tech/ticket/${ticket_id}/comment`)
            const { data } = await axios.get(`https://ticket-manager-api.onrender.com/tech/ticket/${ticket_id}/comment`)

            // console.log(data)
            setComments(data)
            setLoad(true)
        }
        getComments()
    }, [render]);




    const claimTicket = async (e) => {
        const id = e.target.id
        const assigned = user.userName
        try {

            await axios.put(`https://ticket-manager-api.onrender.com/tech/tickets/claim/${id}`, { assigned })

            setClaimed(true)
        } catch (error) {
            console.log(error)
        }
    }

    const unclaimTicket = async (e) => {
        const id = e.target.id
        const assigned = "Pending"
        try {

            await axios.put(`https://ticket-manager-api.onrender.com/tech/tickets/claim/${id}`, { assigned })

            setClaimed(false)
        } catch (error) {
            console.log(error)
        }
    }

    const markResolved = async (e) => {
        const id = e.target.id
        const status = "Resolved"
        try {

            await axios.put(`https://ticket-manager-api.onrender.com/tech/tickets/resolve/${id}`, { status })

            setClaimed(false)
        } catch (error) {
            console.log(error)
        }
    }


    if (load) {
        return (
            <div className='singlePageContainer'>
                <Link to="/tech">
                    <button className="back-to-tickets">X</button>
                </Link>

                <div className='SingleTicket'>
                    <div className='user-info'>
                        <img className='img-profile' alt='' src={ticket.profilepic} />
                        <h4 className='img-username'>{ticket.username}</h4>
                    </div>

                    <h3 className='TicketTitle'>Category: <span className='highlight'>{ticket.category}</span></h3>
                    <div className='Desc-cont'>
                        <h3 className='ticketDescrip'>Description: </h3>
                        <h4 className='highlight-2'>{ticket.descrip}</h4>
                    </div>
                    
                    {
                        ticket.assigned === "Pending" ?
                            (<button className='post-btn' id={ticket.ticket_id} onClick={claimTicket}>Claim Ticket</button>)
                            :
                            (<><button className='post-btn' id={ticket.ticket_id} onClick={markResolved}>Mark Resolved</button>
                            <button className='post-btn' id={ticket.ticket_id} onClick={unclaimTicket}>Unclaim Ticket</button>
                            </>)
                    }
                </div>

                <div className='Line'></div>
                <div className='SingleTicket2'>
                    <h3 className='camp'>TICKET #<span className='highlight'>{ticket.ticket_id}</span></h3>
                    <div className='camp-3'>
                        <h3 className='camp'>Campus: <span className='highlight'>{ticket.name}</span></h3>
                        <h3 className='camp'>Priority: <span className='highlight'>{ticket.priority}</span></h3>
                        <h3 className='camp'>Claimed by: <span className='highlight'>{ticket.assigned}</span></h3>
                        <h3 className='camp'>Submission: <span className='highlight'>{ticket.to_char}</span></h3>
                    </div>
                    <div className='comment-cont'>
                        <h1 className='tech-h1'>Tech Comments</h1>
                        <div className='Comment'>
                            <ListComments comments={comments} />
                        </div>
                        <form onSubmit={handleSubmit} className='form-post'>
                            <input type='text' value={techComment} onChange={handleChange} className="input-post" placeholder='Post an update…' />

                            <p style={{ margin: 0, fontFamily: 'Roboto Slab', color: 'red', fontSize: 12 }}>{commentError === 404 ? "Type in a Comment" : null}</p>

                            <input type='submit' value='Submit' className='post-btn' />
                        </form>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='singlePageContainer'>
                <div className='loading-spinner'></div>
            </div>
        )
    }

}

export default SinglePage;