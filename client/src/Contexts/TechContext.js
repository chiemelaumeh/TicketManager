import { createContext, useState } from "react";

const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [open, setOpen] = useState(true);
  return (
    <TechContext.Provider value={{ open, setOpen }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechContext;
