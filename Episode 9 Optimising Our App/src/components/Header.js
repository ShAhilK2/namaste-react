import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [signInName,setSignInName] = useState("SignIn")
    const onlineStatus = useOnlineStatus();
    return <div className="header">
        <div className="logo-container">
            <img src={LOGO_URL} className="logo" />

        </div>

        <div className="nav-link-container">
       <ul>

        <li> 
            Online Status : {onlineStatus ? "✅ ": "🔴"}
        </li>
        <li>
            <Link to="/">Home</Link></li>
        <li>
            
            <Link to="/about">About Us
            </Link></li>
        <li>
            <Link to="/contact">
            Contact Us
            </Link></li>
            <li>
            <Link to="/grocery">
             Grocery 
            </Link></li>
        <li><Link to="/cart">
        Cart</Link></li>


        <button className="signin-btn" onClick={()=>{
             signInName === "SignIn" ?  setSignInName("SignOut") : setSignInName("SignIn")
        }}>{signInName}</button>
       </ul>

        </div>

    </div>

}
export default Header;