import {  useContext } from "react"
import  { BaseContext } from "./context/BaseProvider";

function Footer(){
    const context = useContext( BaseContext)
    return <footer>made by ntq ({context.lang})</footer>
}

export default Footer;