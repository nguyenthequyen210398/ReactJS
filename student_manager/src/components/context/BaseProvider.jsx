import { createContext } from "react";

export const BaseContext = createContext()
function BaseProvider(props) {

    return <BaseContext.Provider>

        {props.children}


    </BaseContext.Provider>

}
export default BaseProvider;