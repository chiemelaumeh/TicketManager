import { createContext, useState } from "react";


const SingleTicketContext = createContext();

export const SingleTicketProvider = ({children}) => {

    const [ticket, setTicket] = useState([])


    return <SingleTicketContext.Provider value={{
        ticket,
        setTicket
    }}>
        {children}
    </SingleTicketContext.Provider>

}

export default SingleTicketContext;

