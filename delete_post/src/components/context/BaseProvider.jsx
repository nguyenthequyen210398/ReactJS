import { createContext,  useState } from "react";

export const BaseContext = createContext();
function BaseProvider(props){

    const[lang, setLang] = useState("vn");

    return <BaseContext.Provider value={{lang, setLang}}>
        {props.children}
    </BaseContext.Provider>
}

export default BaseProvider;