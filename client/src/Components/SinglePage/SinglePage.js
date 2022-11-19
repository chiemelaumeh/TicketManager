import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import '../../CssFiles/SinglePage.css';
import Comment from './Comment';
import CommentContext from '../../Contexts/CommentsContext';
import SingleTicketContext from '../../Contexts/SingleTicketContext';
import LoginContext from "../../Contexts/loginContext";

const SinglePage = () => {
    const { ticket_id } = useParams();
    const { user } = useContext(LoginContext)
    const { comments, setComments } = useContext(CommentContext);
    const { ticket, setTicket } = useContext(SingleTicketContext);
    const [techComment, setTechComment] = useState('');
    const [load, setLoad] = useState(true)

    function handleChange(e) {
        setTechComment(e.target.value)
    };
    //const response = await axios.post("https://taskappapi.onrender.com/tech/ticket/comment"


    const postComment = async () => {
        console.log(user)
        const response = await axios.post("http://localhost:6001/tech/ticket/comment", {
            user_id: user.user_id,
            ticket_id: ticket_id,
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
            // const { data } = await axios.get(`https://taskappapi.onrender.com/tech/ticket/${ticket_id}/comment`)
            const { data } = await axios.get(`http://localhost:6001/tech/ticket/${ticket_id}/comment`)
            setComments(data)
            setLoad(false)
        }
        getComments()
    }, [techComment]);

    useEffect(() => {
        const getSingleTicket = async () => {
            // const { data } = await axios.get(`https://taskappapi.onrender.com/tech/ticket/${ticket_id}`)
            const { data } = await axios.get(`http://localhost:6001/tech/ticket/${ticket_id}`)
            console.log(data)
            setTicket(data[0])
        }
        getSingleTicket()
    }, []);


    if (!load) {
        return (
            <div className='singlePageContainer'>
                <Link to="/tech">
                    <button className="back-to-tickets">X</button>
                </Link>

                <div className='SingleTicket'>
                    <div className='user-info'>
                        <img className='img-profile' alt='' src = {ticket.profilepic} />
                        <h4 className='img-username'>{ticket.username}</h4>
                    </div>

                    <h3 className='TicketTitle'>Category: <span className='highlight'>{ticket.category}</span></h3>
                    <div className='Desc-cont'>
                        <h3 className='ticketDescrip'>Description: </h3>
                        <h4 className='highlight-2'>{ticket.descrip}</h4>
                    </div>
                </div>
                
                <div className='Line'></div>
                <div className='SingleTicket2'>
                    <h3 className='camp'>TICKET #<span className='highlight'>{ticket.ticket_id}</span></h3>
                    <div className='camp-3'>
                        <h3 className='camp'>Campus: <span className='highlight'>{ticket.name}</span></h3>
                        <h3 className='camp'>Priority: <span className='highlight'>{ticket.priority}</span></h3>
                        <h3 className='camp'>Submission: <span className='highlight'>{ticket.to_char}</span></h3>
                    </div>
                    <div className='comment-cont'>
                        <h1 className='tech-h1'>Tech Comments</h1>
                        <div className='Comment'>
                            {comments.map((data) => (
                                <Comment key={data.ticket_id} data={data} load={load} />
                            ))
                            }
                        </div>
                        <form onSubmit={handleSubmit} className='form-post'>
                            <input type='text' value={techComment} onChange={handleChange} className="input-post" placeholder='Post an update…' />
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