import React from 'react'
import {useState,useEffect} from "react";
import { MENU_API, REASTAURANT_URL } from '../utils/constant';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
function RestaurantMenu() {
  const [showIndex,setShowIndex] = useState(null);



const {resId} = useParams();

const resInfo = useRestaurant(resId);
   
    if(resInfo === null) {
        return <Shimmer /> 
    } 
const {name,cuisines,costForTwo,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card;
console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards);

const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(category => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categories)



  return (
    
    <div className='mx-7 text-center' >
      <h1 className='font-extrabold text-2xl text-center'>{name}</h1>
      <p className='font-semibold text-lg'>{cuisines.join(", ")} : {costForTwo / 100} Rs For two</p>
     
    {/* Categories */}
 {categories.map((c,index)=>{

  //Controlled Component
  return <RestaurantCategory key={c?.card?.card?.title} menudata={c?.card?.card} showItems={index === showIndex ? true:false} setShowIndex={()=>setShowIndex(index)} />
 })}

    </div>
  )
}

export default RestaurantMenu
