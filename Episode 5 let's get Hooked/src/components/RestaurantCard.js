
const RestaurantCard =({restaurant})=>{
    const {restaurantName,cuisine,rating,deliveryTime,imageUrl,cost} = restaurant;
    return ( <div className="res-card">
        <img src={imageUrl} className="res-image"/>
        <h3>{restaurantName}</h3>
        <h4 >{cuisine}</h4>
        <h4>{rating} rating</h4>
        <p>{cost*2} For Two</p>
        <p>{deliveryTime} Minutes</p>
    </div>)
}

export default RestaurantCard;