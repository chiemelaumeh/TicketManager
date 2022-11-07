import React from 'react'
import { Link, useParams } from 'react-router-dom'
const SingleTicket = () => {
  const {ticketId} = useParams()
  return (
    <section className='singleTicketPage'>

      <h1>SingleTicket</h1>
      <h4>{ticketId}</h4>
      <Link to="/tech"> Tickets</Link>
    </section>

  )
}

export default SingleTicket