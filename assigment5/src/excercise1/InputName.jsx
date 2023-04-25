import { useState } from "react"

function InputName (props){

    const nameChange = (evt) => {
        props.setName(evt.target.value);
        
    }
    return <>
    <div>
        <label>
            Name: 
            <input type="text" placeholder="Nhập tên" value={props.name} onChange={nameChange}></input>
        </label>
    </div>
    </>
}

export default InputName;