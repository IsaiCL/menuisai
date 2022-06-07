import { NavLink } from 'react-router-dom'
import "./menu.css"

export default function Menu() {
    return (<>
    <div>
        <ul>
            <li>
                <NavLink className={({isActive}) => isActive ? "active1" : "active5"} to="/Celsius" >Converter C°-F°/F°-C°</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active2" : "active5"} to="/Formulario" >Contact Form</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active3" : "active5"} to="/Operaciones" >Multiplication</NavLink>
            </li>
            <li>
                <NavLink className={({isActive}) => isActive ? "active4" : "active5"} to="/Suma" >Sum</NavLink>
            </li>    
        </ul>
    </div>
    </>)
}