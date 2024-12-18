import React from "react";
import ReactDOM from "react-dom"

import Picture from "./assets/image.png"
import ResCardImg from "./assets/res-card.png"
const Header = () =>{
    return <div className="header">
        <div className="logo-container">
            <img src={Picture} className="logo" />

        </div>

        <div className="nav-link-container">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
       </ul>

        </div>

    </div>

}




const resList = [
    {
        restaurantName: "Burger",
        cuisine: ["Burgers", "American", "Chinchwad"],
        rating: 4.9,
        deliveryTime: 20,
        imageUrl: "https://plus.unsplash.com/premium_photo-1664472724753-0a4700e4137b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVyZ2VyfGVufDB8fDB8fHww",
        cost: 3200,
    },
    {
        restaurantName: "Pasta Palace",
        cuisine: ["Italian", "Pasta", "Chinchwad"],
        rating: 4.7,
        deliveryTime: 25,
        imageUrl: "https://images.unsplash.com/photo-1481931098730-318b6f776db0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFzdGElMjBwYWxhY2V8ZW58MHx8MHx8fDA%3D",
        cost: 4500,
    },
    {
        restaurantName: "Sushi Spot",
        cuisine: ["Japanese", "Sushi", "Chinchwad"],
        rating: 4.8,
        deliveryTime: 30,
        imageUrl: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VzaGklMjBzcG90fGVufDB8fDB8fHww",
        cost: 3800,
    },
    {
        restaurantName: "Taco Town",
        cuisine: ["Mexican", "Tacos", "Chinchwad"],
        rating: 4.6,
        deliveryTime: 15,
        imageUrl :"https://plus.unsplash.com/premium_photo-1678051141689-1f7a7861b3b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGFjb3xlbnwwfHwwfHx8MA%3D%3D",
        cost: 2500,
    },
    {
        restaurantName: "Curry Corner",
        cuisine: ["Indian", "Curry", "Chinchwad"],
        rating: 4.5,
        deliveryTime: 35,
        imageUrl: "https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q3Vycnl8ZW58MHx8MHx8fDA%3D",
        cost: 3000,
    },
    {
        restaurantName: "Pizza Place",
        cuisine: ["Italian", "Pizza", "Chinchwad"],
        rating: 4.9,
        deliveryTime: 20,
imageUrl:"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UGl6emF8ZW58MHx8MHx8fDA%3D",   
     cost: 3500,
    },
    {
        restaurantName: "Salad Station",
        cuisine: ["Healthy", "Salads", "Chinchwad"],
        rating: 4.8,
        deliveryTime: 25,
imageUrl :"https://plus.unsplash.com/premium_photo-1673590981774-d9f534e0c617?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FsYWR8ZW58MHx8MHx8fDA%3D",        cost: 2800,
    },
    {
        restaurantName: "Dessert Delight",
        cuisine: ["Desserts", "Sweets", "Chinchwad"],
        rating: 4.7,
        deliveryTime: 15,

imageUrl:"https://plus.unsplash.com/premium_photo-1672192165925-aad4313289c1?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RGVzZXJ0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D",        cost: 1500,
    },
    {
        restaurantName: "Vegan Vibes",
        cuisine: ["Vegan", "Healthy", "Chinchwad"],
        rating: 4.6,
        deliveryTime: 30,
  imageUrl:"https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww",
        cost: 3600,
    },
    {
        restaurantName: "Coffee Corner",
        cuisine: ["Café", "Coffee", "Chinchwad"],
        rating: 4.9,
        deliveryTime: 10,
        imageUrl: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE4OHxlY29mZmVlfGVufDB8fHx8MTY3NDYzMDY5OQ&ixlib=rb-1.2.1&q=80&w=1080",
        cost: 1200,
    },
    {
        restaurantName: "BBQ Haven",
        cuisine: ["BBQ", "Grill", "Chinchwad"],
        rating: 4.8,
        deliveryTime: 40,
     imageUrl:"https://plus.unsplash.com/premium_photo-1661310177352-f586bf23a403?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QkJRfGVufDB8fDB8fHww",
        cost: 5000,
    },
];


const RestaurantCard =({restaurantName,cuisine,rating,deliveryTime,imageUrl,cost})=>{
    return ( <div className="res-card">
        <img src={imageUrl} className="res-image"/>
        <h3>{restaurantName}</h3>
        <h4 >{cuisine}</h4>
        <h4>{rating} rating</h4>
        <p>{cost*2} For Two</p>
        <p>{deliveryTime} Minutes</p>
    </div>)
}
const Body = () =>{
    return <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
{/* Always use key as unique,and does not use index as key as it doesnot get performance or nay type of jump and
always mention keys 
not using keys (not acceptable)
Always use Unique keys
indedx :Anti-pattern because because "when the item is removed, the index is changed and thus the key, which was equal to the index, is no longer valid". */}
{resList.map(el => {
    return  <RestaurantCard 
    key={el.restaurantName} 
    restaurantName={el.restaurantName} 
    cuisine={el.cuisine.join(", ")} 
    rating={el.rating} 
    deliveryTime={el.deliveryTime} 
    imageUrl={el.imageUrl} 
    cost={el.cost}/>
}
)}
        </div>

    </div>
}
const AppLayout = () =>{ 
    return <div id="app">
        <Header />
        <Body />

    </div>

}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)