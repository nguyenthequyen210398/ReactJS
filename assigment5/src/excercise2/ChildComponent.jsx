
import { useContext } from "react";
import { MessageContext } from "./Question1E2";
function ChildComponent(){

    const context = useContext(MessageContext);

    return <>
        <h1 style={context.theme} >Message from Grandparents: {context.message}</h1>
        <button style={context.theme}>Cháu đã hiểu</button>
    </> 
}

export default ChildComponent;