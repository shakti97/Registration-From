import React from "react";
import {Link} from "react-router-dom"; 
import "../CSS/Introduction.css";

export const Introduction=(props)=>{
    return(
        <div>
            <div className="row">
                <div className="col-md-1"><i className="fa fa-user" aria-hidden="true" ></i></div>
                <div className="col-md-4">
                    <label>Your Name</label>
                    <br/>
                    <input type="text" placeholder="Type your Name here" defaultValue={props.Name} name="name" onKeyUp={props.name}  />  
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                <br/>
                    <label>Write a short Description About yourself</label>
                    <br/>
                    <textarea rows="4" cols="50" defaultValue={props.desc} placeholder="May be you write about your goals and motivation" desc="desc" onChange={props.Description}></textarea>
                </div>
            </div>
            <div>
                
                <button ><Link  to={props.to} >Proceed </Link> </button>
            </div>
        </div>
    )
}