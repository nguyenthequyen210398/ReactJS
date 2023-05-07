import React, { useContext } from "react";
import { BaseContext } from "./context/BaseProvider";

function Header() {
    const context = useContext(BaseContext)
    const languageChangeValue = (evt) => {
        context.setLang(evt.target.value)

    }



    return <>

        <header>
            <p>This is header</p>
            <select name="language" id="language" value={context.lang} onChange={languageChangeValue }>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
                <option value="vn">VietNamese</option>

            </select>

        </header>

    </>



}

export default Header;