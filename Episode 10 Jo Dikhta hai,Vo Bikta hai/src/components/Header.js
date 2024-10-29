import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import {useState} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [signInName,setSignInName] = useState("SignIn")
    const onlineStatus = useOnlineStatus();
    return <div className="flex justify-between items-center">
        <div className="">
            <img src={LOGO_URL} className="w-24" />

        </div>

        <div className="nav-items ">
       <ul className="flex ">

        <li className="px-4"> 
            Online Status : {onlineStatus ? "✅ ": "🔴"}
        </li>
        <li className="px-4">
            <Link to="/">Home</Link></li>
        <li className="px-4">
            
            <Link to="/about">About Us
            </Link></li>
        <li className="px-4">
            <Link to="/contact">
            Contact Us
            </Link></li>
            <li className="px-4">
            <Link to="/grocery">
             Grocery 
            </Link></li>
        <li className="px-4"><Link to="/cart">
        Cart</Link></li>

<li className="px-4">
<button className="signin-btn" onClick={()=>{
             signInName === "SignIn" ?  setSignInName("SignOut") : setSignInName("SignIn")
        }}>{signInName}</button>
</li>
       
       </ul>

        </div>

    </div>

}
export default Header;