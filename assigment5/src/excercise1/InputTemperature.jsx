import { useState } from "react";

function InputTemperature (props){
    const[temperature, setTemperature] = useState("");
    const changeTemperature = (evt) => {
        props.onTemperatureChange(evt.target.value);
        props.changeTemperature(evt.target.value);
        

        props.temperature = temperature;

    }
     return <>
        <fieldset>
            <legend>Temperature in {props.typeTemperature}</legend>
            <input type="text" value={temperature} onChange={changeTemperature} />
        </fieldset>
    
    </>
}

export default InputTemperature;