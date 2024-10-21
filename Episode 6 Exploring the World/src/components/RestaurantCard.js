import { REASTAURANT_URL } from "../utils/constant";

const RestaurantCard =({restaurant})=>{

    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,id} = restaurant.info;
    const {deliveryTime} = restaurant.info.sla;

    return ( <div className="res-card">
        <img src={`${REASTAURANT_URL}${cloudinaryImageId}`} className="res-image" />
        <h3>{name}</h3>
        <h4 >{cuisines.join(", ")}</h4>
        <h4>{avgRating} rating</h4>
        <p>{costForTwo}</p>
        <p>{deliveryTime} Minutes</p>
    </div>)
}

export default RestaurantCard;