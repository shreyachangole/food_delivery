import React, { useContext } from "react";
import { GiMeat } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa";
import { DataContext } from "../contex/UserContex";

function Card({ data }) {
  const { food_image, food_name, food_type, price } = data;
  const { cartItems, setCartItems } = useContext(DataContext);

  
  const isInCart = cartItems.some((item) => item.id === data.id);

  const handleAddToCart = () => {
    if (!isInCart) {
      setCartItems([...cartItems, data]);
    }
  };

  const handleRemoveFromCart = () => {
    const updatedCart = cartItems.filter((item) => item.id !== data.id);
    setCartItems(updatedCart);
  };

  return (
    <div className='w-[270px] h-[370px] bg-white p-4 rounded-2xl flex flex-col gap-3 shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform duration-300'>
      <div className='w-full h-[60%] overflow-hidden rounded-xl'>
        <img
          src={food_image}
          alt={food_name}
          className='object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-105'
        />
      </div>

      <div className='text-lg font-bold text-gray-800 truncate'>{food_name}</div>

      <div className='w-full flex justify-between items-center'>
        <div className='text-base font-semibold text-green-600'>₹ {price}</div>
        <div className='text-sm'>
          {food_type === "veg" ? (
            <span className="flex items-center gap-1 text-green-500">
              <FaLeaf className="text-sm" /> Veg
            </span>
          ) : (
            <span className="flex items-center gap-1 text-red-500">
              <GiMeat className="text-sm" /> Non-Veg
            </span>
          )}
        </div>
      </div>

      <button
        onClick={isInCart ? handleRemoveFromCart : handleAddToCart}
        className={`w-full mt-auto p-2 rounded-xl font-semibold transition ${
          isInCart
            ? "bg-red-200 text-red-900 hover:bg-red-300"
            : "bg-green-200 text-green-900 hover:bg-green-300"
        }`}
      >
        {isInCart ? "Remove from Plate ❌" : "Add to My Plate 🍽️"}
      </button>
    </div>
  );
}

export default Card;
