import { createContext, useState } from "react";


const CommentContext = createContext();

export const CommentProvider = ({children}) => {
    
    const [comments, setComments] = useState([])


    return <CommentContext.Provider
        value={{
            comments,
            setComments
        }}>
            {children}
        </CommentContext.Provider>
    
}

export default CommentContext;