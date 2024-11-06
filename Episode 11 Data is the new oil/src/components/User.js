import React from 'react'

import {useState,useEffect} from "react";
function User({name}) {
    const [count,setCount] = useState(0); 
    const [count2,setCount2] = useState(1); 


    useEffect(()=>{
        //Api calls
         const timer = setInterval(()=>{
        console.log("Namaste React Op!")
        },1000)

     

        return ()=>{
            console.log("useEffect Return")
            clearInterval(timer);
        }
    },[])
  return (



    
    <div className="user-card">
        <h1>Count : {count}</h1>
        <h1>Count2 : {count2}</h1>
        <h1>Name : {name}</h1>
        <h2>Location : Fort-Songadh</h2>
        <p>Social Handle : sahil.kataria@8</p>
    </div>
  )
}

export default User
