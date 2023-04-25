import { createContext } from "react";
import ParentComponent from "./ParentComponent";
export const MessageContext = createContext;
function Question1E2 () {

    const message = "Cố học đi cháu";
    return <>
    <MessageContext.Provider value={message}>
        <ParentComponent />
    </MessageContext.Provider>
   
    </>
}

export default Question1E2;