import React from "react";
import User from "./User";
import { json } from "react-router-dom";

class UserClass extends React.Component{
    constructor(props){
       super(props);
    //    console.log(props)

       this.state = {
        // count :0,
        // count2 :2
        githubdata : {
            name:"Dummy",
            location:"Default",
            twitter_username: "Default",
            avatar_url: "https://dummyimage.com/150x100/ff9933/000"
        }
       }
      
// console.log("Child Constructor");
    }

   async  componentDidMount(){
        // console.log("Child Component Did Mount Called")
        //Api calls
        const data = await fetch(`https://api.github.com/users/ShAhilK2`);
        const json = await data.json();
        console.log(json)

        this.setState({
            githubdata: json
        })


        this.timer = setInterval(()=>{
            console.log("Namaste React Op!");
        },1000)
      
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.count !== prevState.count){
            //
        }
        if(this.state.count2 !== prevState.count2){
            //
        }
        console.log("Child Component Did Update")
    }

    componentWillUnmount(){
        console.log("Child Component Did Unmount")
        clearInterval(this.timer);
    }
    render(){
        // console.log("Child Render")
       const  {name,location} = this.props;
    //    const {count,count2} = this.state;
        return <div className="user-card">
            {/* <h1>Count : {count}</h1>
            <button onClick={()=>{
                //Never Update state vaiable directly
                this.setState({
                    count:this.state.count  +1,
                    // count2:this.state.count2  +1

                })
            }}>
                Increase Count
            </button> */}
            {/* <h1>Count2 :{count2}</h1> */}
            <img src={this.state.githubdata.avatar_url}/>
        <h1>Name : {this.state.githubdata.name}</h1>
        
        <h2>Location : {this.state.githubdata.location}</h2>
        <p>Social Handle : {this.state.githubdata.twitter_username}</p>
    </div>
    }
}


export default UserClass;