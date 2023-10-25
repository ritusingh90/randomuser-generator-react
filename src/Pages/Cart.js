import React, { useState } from 'react'
import CartData from '../components/CartData'
import { addToCart, testing } from '../Redux/cartSlice'
import { useDispatch } from 'react-redux';
import { FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';


const Cart = () => {
    const [cartData, setCartData] = useState(CartData);
    const dispatch = useDispatch();

    //add to Cart
    const send = (e) => {
        console.log("First Alert", e)
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }


    const redirectingpage = (e) => {
        console.log("dwd", e);
        dispatch(testing(e)) 
    }


  return (
    <div className='container mx-auto px-4 pt-6 pb-[100px]'>
        <div className='grid grid-cols-4 gap-6'>
        {
            cartData.map((item)=>{
                return(
                    <div className="max-w-sm rounded overflow-hidden shadow-lg" key={item.id}>
                        <div className='p-4'>
                            <NavLink to={`/productdetail/${item.id}`} onClick={()=>redirectingpage(item)}>
                                <img className="w-full h-[200px] object-cover border rounded p-3" src={item.imgdata} alt="Sunset in the mountains" />
                            </NavLink>
                        </div>
                        <div className="px-8 py-4">
                            <div className="font-medium text-lg mb-2 truncate">{item.dish}</div>
                            <p className="text-gray-700 text-base">
                            {item.address}</p>
                            
                            <p>&#8377;{item.price}/-</p>
                        </div>
                        <div className="px-6 pt-1 pb-6 flex justify-between items-center">
                            <p className='bg-lime-600 px-4 text-white rounded flex items-center justify-space-between'>{item.rating}<FaStar className='pl-1'/></p>
                           <button className='bg-orange-600 hover:bg-orange-400 text-white  py-1 px-3 border-b-4 border-orange-700 hover:border-orange-500 rounded' onClick={() => send(item)}>Add to Cart</button>
                           <ToastContainer position="top-center"/>
                        </div>
                    </div>
                )
            })
        }
        </div>
       

    </div>
  )
}

export default Cart