import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

function Question1() {
    const [temperature, setTemperature] = useState(0);
    const temperatureChange = (evt) => {
        setTemperature(evt.target.value);
        console.log(temperature);
    }
    return<>
    <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="text" value={temperature} onChange={temperatureChange}></input>
        <BoilingVerdict celsius = {temperature}/>
    </fieldset>
    </>
}

export default Question1;