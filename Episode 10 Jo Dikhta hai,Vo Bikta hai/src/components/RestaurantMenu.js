import React from 'react'
import {useState,useEffect} from "react";
import { MENU_API, REASTAURANT_URL } from '../utils/constant';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurant from '../utils/useRestaurantMenu';
function RestaurantMenu() {



const {resId} = useParams();

const resInfo = useRestaurant(resId);
   
    if(resInfo === null) {
        return <Shimmer /> 
    } 
const {name,cuisines,costForTwo,cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[3]?.card?.card;
console.log(itemCards);
  return (
    
    <div className='mx-7'>
      <h1 className='font-extrabold'>{name}</h1>
      <p>{cuisines.join(", ")} : {costForTwo / 100} Rs For two</p>
     
      <h2 className='font-semibold'>Menu</h2>
      <ul>
        {itemCards.map((menu)=> <li key={menu.card.info.id}>{menu.card.info.name} : {(menu?.card?.info?.price)/100 || (menu?.card?.info?.defaultPrice)/100 } Rs</li> )}
      </ul>
    </div>
  )
}

export default RestaurantMenu
