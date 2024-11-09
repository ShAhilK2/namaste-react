import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import {useState,useContext} from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () =>{
    const [signInName,setSignInName] = useState("SignIn")
    const onlineStatus = useOnlineStatus();
    const data = useContext(UserContext);
    console.log(data);

    //Subscribing to the store using selector
    const cartItems = useSelector((store)=>store.cart.items)

    return <div className="flex justify-around items-center">
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
        Cart ({cartItems.length} items)</Link></li>

<li className="px-4">
<button className="signin-btn" onClick={()=>{
             signInName === "SignIn" ?  setSignInName("SignOut") : setSignInName("SignIn")
        }}>{signInName}</button>
</li>
<li className="font-bold">
    {data.loginUser}
</li>
       
       </ul>

        </div>

    </div>

}
export default Header;