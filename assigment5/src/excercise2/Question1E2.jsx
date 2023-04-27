import { createContext } from "react";
import ParentComponent from "./ParentComponent";
import { useState } from "react";

const themeLight = {color: 'black',background: 'white'};
const themeDark = {color: 'white',background: 'black'};
export const MessageContext = createContext ();
function Question1E2 () {
    const [theme, setTheme] = useState(themeLight);
    const message = "Cố học đi cháu";

    const changeTheme = () => {
        theme === themeLight ?setTheme(themeDark): setTheme(themeLight);
    }
    return <>
    <MessageContext.Provider value={{message, theme}}>
        <ParentComponent ></ParentComponent>
        <button  onClick={changeTheme}>Change Theme</button>
    </MessageContext.Provider>
   
    </>
}

export default Question1E2;