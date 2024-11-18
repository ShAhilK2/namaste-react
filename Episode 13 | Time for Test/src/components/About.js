import React from 'react'
import User from './User'
import UserClass from './UserClass'
import {Component} from "react"
export default class About extends Component {
  constructor(props){
    super(props);
    // console.log("Parent Constructor")
  }
  componentDidMount(){
    // console.log("Parent Component Did Mount Called")
}
  render() {
    // console.log("Parent Render")
  return <div>
    <h1>About</h1>
    <h2>Namaste React Series React Router Dom</h2>
    {/* <User name="Shahil Kataria (function)"/> */}
    {/* <UserClass  name="Shahil Kataria (class)" location="Surat"/> */}
    <UserClass  name="Shahil Kataria (class)" location="Surat"/>
  </div>
  }
}


/* 
Parent Contructor
Parent Render

Child Contructor
Chiild Render

Child2 Contructor
Chiild2 Render

Dom Updated in Single Batch
Child ComponentDidMount
Child2 ComponentDidMount

Parent ComponentDidMount
*/ 