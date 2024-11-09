import React, { useState } from 'react';
import { REASTAURANT_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';

function ItemCards({ items }) {
  const dispatch = useDispatch();
  const handleAddItem = (item) =>{
    return dispatch(addItem(item))
  }

  return (
    <div className="flex flex-col">
      {items.map(item => (
        <div key={item.card.info.id} className="p-4 m-2 border-b border-gray-300 flex justify-between items-start transition-transform transform hover:scale-105">
          <div className="w-9/12" >
            <div className="font-semibold text-lg">{item.card.info.name}</div>
            <div className="text-md text-gray-800">
              ₹ {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm text-gray-600">{item.card.info.description}</p>
          </div>

          <div className="w-3/12 relative flex flex-col items-center">
            <img
              src={REASTAURANT_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-auto rounded-lg shadow-md"
            />
            <button className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-2 bg-blue-500 text-white shadow-lg rounded-md transition-colors duration-300 hover:bg-blue-600" 
            onClick={()=>handleAddItem(item)}>
              ADD +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ItemCards;
