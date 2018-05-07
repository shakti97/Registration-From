import React from "react";
import {Header} from "../Components/Header";
import {Categories} from "../Components/Categories";
import {Introduction} from "../Components/Introduction";
import {PersonalInfo} from "../Components/PersonalInfo";
import {Routing} from "../Components/Routing";
import Firebase from 'firebase';
import {DB_Config} from "../Config";
import PersonDetails from "../PersonDetails"

export class Main extends React.Component{
    constructor(props){
        super(props);
        this.len;
        this.name="";
        this.Desc="";
        this.to="/";
        this.State="";
        this.Ethnicity="";
        this.sex="";
        this.age;
        this.height;
        this.weight;
        this.Error="";
        this.firebaseRef;
        this.state={len:this.len,name: this.name,Desc:this.Desc,to: this.to,State:this.State,age : this.age,Ehtnicity: this.Ethnicity,sex : this.sex,height: this.height, weight : this.weight ,nameEmpty:true, StateEmpty: true, ageEmpty: true, EhtnicityEmpty: true, sexEmpty : true, heightEmpty:true, weightEmpty:true,Error:this.Error};
    }
   componentWillMount(){
        this.firebaseRef=Firebase.initializeApp(DB_Config);
   }
    IntroSubmit(event){
        console.log(this.state.name);
        console.log(this.state.Desc);

        console.log(this.state.to);
        
    }
    getName(event){
        this.name=event.target.value;
        this.len=this.name.length;
        if(this.state.name!=""){
            this.setState({...this.state,name : this.name,len:this.len, nameEmpty:false});
        }
        else{
            this.setState({...this.state,name : this.name,len:this.len});
        }
        
        
    }
    getDescription(event){
        if(this.len>0){
            this.to="/PersonalInfo";
        }
        this.Desc=event.target.value;
        this.setState({...this.state,Desc: this.Desc,to:this.to});
        
    }
    getState(event){
        this.State=event.target.value;
        if(this.state.State!=""){
            this.setState({...this.state,State:this.State,StateEmpty:false});
        }
        else{
            this.setState({...this.state,State:this.State,StateEmpty:true});
        }
    }
    getAge(event){
        this.age=(event.target.value);
        if(this.state.age!=""){
            this.setState({...this.state,age:this.age,ageEmpty:false});
        }
        else{
            this.setState({...this.state,age:this.age,ageEmpty:true});   
        }

    }
    getEthnicity(event){
        var form=document.getElementById("Ethnicity");
        var radios=form.querySelectorAll(".optradio");
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { 
                 var radio = radios[i].value; 
                break; 
            }
        }
        this.Ethnicity=radio;
        if(this.Ethnicity!=""){
            this.setState({...this.state,Ethnicity:this.Ethnicity,EhtnicityEmpty:false});
        }
        else{
            this.setState({...this.state,Ethnicity:this.Ethnicity,EhtnicityEmpty:true});
        }
        
    }
    getSex(event){
        var form=document.getElementById("Sex");
        var radios=form.querySelectorAll(".optsex");
        for (var i=0, len=radios.length; i<len; i++) {
            if ( radios[i].checked ) { 
                 var radio = radios[i].value; 
                break; 
            }
        }
        this.sex=radio;
        if(this.sex!=""){
            this.setState({...this.state,sex:this.sex,sexEmpty:false});
        }
        else{
            this.setState({...this.state,sex:this.sex,sexEmpty:true});
        }
        
    }
    getHeight(event){
        this.height=event.target.value;
        if(this.height!=""){
            this.setState({...this.state,height:this.height,heightEmpty:false});
        }
        else{
            this.setState({...this.state,height:this.height,heightEmpty:true});
        }
    }
    getWeight(event){
        this.weight=event.target.value;
        if(this.weight!=""){
            this.setState({...this.state,weight:this.weight,weightEmpty:false});    
        }
        else{
            this.setState({...this.state,weight:this.weight,weightEmpty:true});
        }
    }
    checkValidation(event){
        var a=""
        if(this.state.nameEmpty){
            a+="Fill the Name..."
        }
        if(this.state.StateEmpty){
             a+="Fill the State... ";
        }
        if(this.state.ageEmpty){
            a+=" Fill the age... ";
        }
        if(this.state.EhtnicityEmpty){
            a+=" Fill the Ethnicity...";
        }
        if(this.state.sexEmpty){
            a+=" Fill the Sex...";
        }
        if(this.state.heightEmpty){
            a+=" Fill the Height...";
        }
        if(this.state.weightEmpty){
            a+=" Fill the Weight...";
        }
        if(a!=""){
            this.Error=a;
            this.setState({...this.state,Error:this.Error});
        }
        if(a==""){
            this.Error="No Error.... Submitted SuccessFully";
            console.log("Finally submitted");
            this.name="";this.Desc="";this.State="";this.age="";this.Ethnicity="";this.sex="";this.height="";this.weight="";this.len=0;
            this.setState({...this.state,len:this.len,name:this.name,Desc:this.Desc,State:this.State,age:this.age,Ethnicity:this.Ethnicity,sex:this.sex,height:this.height,weight:this.weight,nameEmpty:true, StateEmpty: true, ageEmpty: true, EhtnicityEmpty: true, sexEmpty : true, heightEmpty:true, weightEmpty:true,Error:this.Error})
            this.firebaseRef.database().ref().push({person:new PersonDetails(this.state.name,this.state.Desc,this.state.State,this.state.age,this.state.Ethnicity,this.state.sex,this.state.height,this.state.weight)});
           
        }
        
    }
    render(){
        return(
            <div className="container">
                <Header/>
                <Categories/>
                <Routing IntroSubmit={this.IntroSubmit.bind(this)} name={this.state.name} getName={this.getName.bind(this)} Desc={this.state.Desc} getDescription={this.getDescription.bind(this)} getTo={this.state.to} State={this.state.State} getState={this.getState.bind(this)} Age={this.state.age} getAge={this.getAge.bind(this)} Ethnicity={this.state.Ethnicity} getEthnicity={this.getEthnicity.bind(this)} Sex={this.state.Sex} getSex={this.getSex.bind(this)} Height={this.state.height} getHeight={this.getHeight.bind(this)} Weight={this.state.weight} getWeight={this.getWeight.bind(this)} checkValidation={this.checkValidation.bind(this)} getError={this.state.Error}/>
            </div>
        )
    }
}