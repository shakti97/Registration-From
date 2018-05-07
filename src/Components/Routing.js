import React from "react";
import { Route, Switch } from "react-router-dom";
import {Introduction} from "./Introduction";
import {PersonalInfo} from "./PersonalInfo";

export const Routing=(props)=>{
    return (
        <div>
            
            <Switch>
                <Route path="/"  exact render={()=> <Introduction IntroSubmit={props.IntroSubmit} name={props.getName} Name={props.name} desc={props.Desc} Description={props.getDescription} to={props.getTo}/>}/>
                <Route path="/PersonalInfo" exact render={()=><PersonalInfo state={props.getState} age={props.getAge} Ethnicity={props.getEthnicity} Sex={props.getSex} height={props.getHeight} weight={props.getWeight} validation={props.checkValidation} ERROR={props.getError}   State={props.State} Age={props.Age} ethnicity={props.Ethnicity} sex={props.Sex} Height={props.Height} Weight={props.Weight}/>}/>
            </Switch>
        </div>
    )
}