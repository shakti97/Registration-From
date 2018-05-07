import React from "react";
import {Link} from "react-router-dom"; 
import "../CSS/Categories.css";
export const Categories=(props)=>{
    return(
        <div>
            <ul>
                <li><Link to="/">Introduction</Link></li>
                <li><Link to="/PersonalInfo">Personal Information</Link></li>
            </ul>
        </div>
    )
}