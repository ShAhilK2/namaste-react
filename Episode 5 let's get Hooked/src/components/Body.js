import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import {useState} from "react";

// let filterRes = resList;
// console.log(filterRes);
const Body = () =>{
    const [restaurantList,setRestaurantList] = useState(resList);
    return <div className="body">
        <div className="search">Search</div>
        <div className="filter">
            <button className="filter-btn"
            onClick={()=>{
               setRestaurantList(restaurantList.filter(res => res.rating > 4));
            }}>Top Rated Restaurants</button>

        </div>
        <div className="res-container">
{/* Always use key as unique,and does not use index as key as it doesnot get performance or nay type of jump and
always mention keys 
not using keys (not acceptable)
Always use Unique keys
indedx :Anti-pattern because because "when the item is removed, the index is changed and thus the key, which was equal to the index, is no longer valid". */}
{restaurantList.map(el => {
    return  <RestaurantCard
    key={el.restaurantName} 
    restaurant ={el}/>
}
)}
        </div>

    </div>
}

export default Body;