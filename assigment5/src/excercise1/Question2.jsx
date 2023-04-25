import { useState } from "react";
import InputName from "./InputName";

function Question2(){
    const [name, setName] = useState("");

    return <>
    <InputName name={name} setName = {setName} />
    <p>Hello: {name}</p>
    </>
}

export default Question2;