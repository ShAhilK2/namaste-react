import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        return dispatch(clearCart());
    }


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="text-center p-4 w-full max-w-4xl">
                <h1 className="text-2xl font-bold mb-4">Cart</h1>
                <div className="flex justify-center">
                    <div className="w-full md:w-6/12">
                    <button className="p-2 m-2 bg-black text-white rounded-lg"onClick={()=>handleClearCart()}>Clear Cart</button>
                    {cartItems.length === 0 ? <div className="text-md text-gray-400">Cart is Empty,Please Add Items to the Cart !</div> 
                    : <ItemCards items={cartItems} />}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
