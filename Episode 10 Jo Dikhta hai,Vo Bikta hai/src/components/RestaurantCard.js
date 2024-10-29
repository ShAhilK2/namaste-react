import { REASTAURANT_URL } from "../utils/constant";

const RestaurantCard =({restaurant})=>{

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,id} = restaurant?.info;
    const {deliveryTime} = restaurant?.info?.sla;

    return ( <div className="p-4 m-4 w-[250px] rounded-md bg-gray-50 hover:bg-gray-100">
        <img src={`${REASTAURANT_URL}${cloudinaryImageId}`} className="rounded-md" />
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4 >{cuisines.join(", ")}</h4>
        <h4>{avgRating} rating</h4>
        <p>{costForTwo}</p>
        <p>{deliveryTime} Minutes</p>
    </div>)
}

export default RestaurantCard;