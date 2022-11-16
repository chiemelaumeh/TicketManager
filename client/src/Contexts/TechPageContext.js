import { createContext, useState } from "react";

const TechPageContext = createContext();

export const TechPageProvider = ({ children }) => {
  const [tickets, setTickets] = useState([]);

  return (
    <TechPageContext.Provider
      value={{
        tickets,
        setTickets,
      }}
    >
      {children}
    </TechPageContext.Provider>
  );
};

export default TechPageContext;
