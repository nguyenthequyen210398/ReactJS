
import { useContext } from "react";
import { MessageContext } from "./Question1E2";
function ChildComponent(){

    const message = useContext(MessageContext);
    return <h1>Message from Grandparents: {message}</h1>
}

export default ChildComponent;