import { resList } from "../utils/mockData";
import RestaurantCard,{withMoreRatingRestaurantCard} from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// let filterRes = resList;
// console.log(filterRes);
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
const [filteredRestaurant,setFilterRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  const {setUserName,loginUser} = useContext(UserContext);
  console.log(restaurantList)

  useEffect(() => {
    // console.log(`useEffect called`);
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
    `https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`)
    const json = await data.json();
    // console.log(json);
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    //Optional Chaining
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRestaurant(
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
  };

  //Whenever a state variable update,react triggers a reconcilization cycle(re-renders);
  // console.log(`Render Called`);

// //Conditional Rendering
// if(restaurantList.length === 0){
//     // return <h1>Loading....</h1>
//     return <Shimmer />
// }

const RestaurantCardMoreRating = withMoreRatingRestaurantCard(RestaurantCard);
const onlineStatus = useOnlineStatus();

if(onlineStatus === false) {
  return <h1>Look like you're offline !! Please check your internet connection.</h1>
}

  return (
(restaurantList.length === 0) ? <Shimmer /> :

    <div className="body">
        <div className="flex">
        <div className="search">
        <input type="text" placeholder="Search" className="m-4 p-4 border border-black " value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }}/>
        <button 
        className="bg-green-400 px-4 py-2 rounded-lg"
        onClick={()=>{
            //filter the restaurant cards and update the UI
            const searchList = restaurantList.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            console.log(searchList);
            setFilterRestaurant(searchList);




        }}>Search</button>
      </div>
      <div className="flex items-center justify-center ml-5">
        <button
          className="px-4 py-4 bg-gray-300 rounded-lg"
          onClick={() => {
            setFilterRestaurant(restaurantList.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Restaurants
        </button>

        <label className="ml-6">UserName :  </label>
        <input className="border border-black"value={loginUser} onChange={(e)=>
        {
         return setUserName(e.target.value);
          
        }
         
        }/>
      </div>
        </div>
     
      <div className="flex flex-wrap justify-center">

        {/* Always use key as unique,and does not use index as key as it doesnot get performance or nay type of jump and
always mention keys 
not using keys (not acceptable)
Always use Unique keys
indedx :Anti-pattern because because "when the item is removed, the index is changed and thus the key, which was equal to the index, is no longer valid". */}
        {filteredRestaurant.map((el) => {
          return <Link to={`/restaurant/${el.info.id}`} key={el.info.id}>
            {el.info.avgRating > 4.5 ? <RestaurantCardMoreRating restaurant={el}/> : <RestaurantCard  restaurant={el} />}
            
            </Link>
        
        })}
      </div>
    </div>
  );
};

export default Body;
