import { FaAngleDown } from "react-icons/fa";
import ItemCards from "./ItemCards";
import { useState } from "react";
const RestaurantCategory = ({menudata,showItems,setShowIndex}) =>{


const {title,itemCards,id} = menudata;
    return <div className="justify-center flex" key={id}>
        {/* Accordion Header */}
     <div className="w-6/12 bg-gray-50 p-4 shadow-lg my-4">
     <div className="flex justify-between items-center" onClick={()=>setShowIndex()}>
     <span className="font-semibold text-lg ">{title}  ({itemCards.length})</span>
        <span className="">
        <FaAngleDown  size={18}/>
       
        </span>
     </div>
      {/* Accordion Body */}
{showItems &&  <ItemCards items={itemCards}/>
}

    

        
     </div>
   
       
    </div>
}


export default RestaurantCategory;