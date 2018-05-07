import React from "react";
import {Link} from "react-router-dom"

export const PersonalInfo=(props)=>{
    return(
        <div>
            <div className="form-group">
                <label htmlFor="state">State</label>
                <input type="text"  className="form-control" defaultValue={props.State} onChange={props.state} required={"true"}/>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="number"  className="form-control" defaultValue={props.Age} onChange={props.age} required/>
            </div>
            <div className="form-group">
                <label htmlFor="ethnicity">Ethinicity</label>
                <br/>
                <div id="Ethnicity"  onChange={props.Ethnicity}>
                <label style={{ paddingRight : 3+"em"}}><input type="radio" className="optradio" name="ethn"  value="Hispanic or Latino" />Hispanic or Latino</label>
                <label><input type="radio" className="optradio" name="ethn"  value="Non-Hispanic or Latino"/>Non-Hispanic or Latino</label></div>
            </div>
            <div className="form-group">
                <label htmlFor="sex">Sex</label><br/>
                <div id="Sex"  onChange={props.Sex}>
                <label style={{ paddingRight : 3+"em"}}><input type="radio" className="optsex" name="sex" value="Male"/>Male</label>
                <label><input type="radio" className="optsex" name="sex" value="Female"/>Female</label></div>
            </div>
            <div className="form-group">
                <label htmlFor="height">Height</label>
                <input type="number" className="form-control" defaultValue={props.Height} onChange={props.height} placeholder="in inches" required/>
            </div>
            <div className="form-group">
                <label htmlFor="weight">Weight</label>
                <input type="number" className="form-control" defaultValue={props.Weight} onChange={props.weight} placeholder="in inches" required/>
            </div>
            <div >
                {props.ERROR}
            </div>
            <div>
                <button type="Submit"  className="btn btn-success" onClick={props.validation} >Success</button>
            </div>
        </div>
    )
}