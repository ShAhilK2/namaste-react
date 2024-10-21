import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
const Header = () =>{
    const [signInName,setSignInName] = useState("SignIn")
    return <div className="header">
        <div className="logo-container">
            <img src={LOGO_URL} className="logo" />

        </div>

        <div className="nav-link-container">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
        <button className="signin-btn" onClick={()=>{
             signInName === "SignIn" ?  setSignInName("SignOut") : setSignInName("SignIn")
        }}>{signInName}</button>
       </ul>

        </div>

    </div>

}
export default Header;