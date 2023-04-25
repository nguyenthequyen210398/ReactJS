import { useState } from "react";
import InputTemperature from "./InputTemperature";

function Question3 (){
    const[temperature, setTemperature] = useState();

    const toC = (F) => {
        return (F -32) * 5 / 9;
    }

    const toF = (C) => {
        return (C * 9 / 5) + 32;
    }

    const handleCelsiusChange = (C) =>{
        temperature = C;
    }

    const handleFahrenheitChange = (F) =>{
        temperature = toC(F);
    }

    const C = temperature === "" ? "" : temperature;
    const F = temperature === "" ? "" : toF(C);



    return<>
        <div>
        <InputTemperature temperature={C} typeTemperature="Celsius"  onTemperatureChange={handleCelsiusChange} changeTemperature={setTemperature}  />
        <InputTemperature temperature={F} typeTemperature="Fahrenheit"  onTemperatureChange={handleFahrenheitChange} changeTemperature={setTemperature}   />
        
        </div>
    </>

}

export default Question3;