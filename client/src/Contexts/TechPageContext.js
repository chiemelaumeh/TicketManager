import { createContext, useState } from "react";


const TechContext = createContext()

export const TechProvider = ({children}) => {

    const [tickets, setTickets] = useState([])










    return <TechContext.Provider value={{
        tickets,
        setTickets
    }}>
        {children}
    </TechContext.Provider>

}

export default TechContext;