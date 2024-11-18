
const RestaurantCard =({restaurant})=>{
    console.log(restaurant)


    const {name,cuisines,avgRating,cloudinaryImageId,costForTwo,id} = restaurant?.info;
    const {deliveryTime} = restaurant?.info?.sla;

    return ( <div className="p-4 m-4 w-[250px] rounded-md bg-gray-50 hover:bg-gray-100" data-testid="resCard">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} className="rounded-md" />
        <h3 className="font-bold py-4 text-xl">{name}</h3>
        <h4 >{cuisines.join(", ")}</h4>
        <h4>{avgRating} rating</h4>
        <p>{costForTwo}</p>
        <p>{deliveryTime} Minutes</p>
    </div>)
}


//Higher Order Function 

//input - RestaurantCard ==> MoreRatingRestaurantCard

export const withMoreRatingRestaurantCard = (RestaurantCard) =>{
    return ({restaurant}) =>{

    
        return (<div className="relative">
            <label className="absolute bg-black text-white px-3 py-1 left-6 rounded-md">More rating</label>
            <RestaurantCard restaurant={restaurant}/>
            
        </div>)
    }

}


export default RestaurantCard;