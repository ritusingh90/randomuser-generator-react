import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {addToCart } from '../Redux/cartSlice';


const ProductDetail = () => {

    const [data, setData] = useState([]);

    // const {carts} = useSelector((state)=> state.allCart); 
    const carts1 = useSelector((state)=> state.allCart.carts1)
    console.log(carts1, "Testing Datas")
    // setData(carts);

    const dispatch = useDispatch() 

    // const history = useNavigate(); 

    const {id} = useParams();
    console.log("Params :", id);

    //add to Cart
    const send = (e) => {
        console.log("First Alert", e)
        dispatch(addToCart(e))
        toast.success("Item added In Your Cart")
    }


    const compareProduct = () => {
        let compareProductData = carts1.filter((e) => {
            return e.id == id
        });
        setData(compareProductData)
        console.log("asfjakf", compareProductData)
    }

  

 


    useEffect(() => {
        compareProduct();
        console.log('checkling data: ', data);
    },[id])

    
  return (
    <div className='container mx-auto px-4 pt-6 pb-[100px]'>
        {
            data.map((item)=>{
                return (
                    <div key={item.id} className='flex' gap={6}>
                        <div className='w-[40%]'>
                            <img src={item.imgdata} alt="" className='w-[400px] h-[400px] object-contain inline-block'/>
                        </div>
                        <div className='w-[60%] pl-7'>
                            <div>
                                <h2 className='font-semibold text-xl leading-[30px] mb-4'>{item.dish}</h2>
                            </div>
                            <p className='mb-2'><strong>Price:</strong> &#8377;{item.price}/-</p>
                            <button className='bg-orange-600 hover:bg-orange-400 text-white  py-1 px-3 border-b-4 border-orange-700 hover:border-orange-500 rounded' onClick={() => send(item)}>Add to Cart</button>
                            <div className='mt-4'>
                                <h5 className='font-semibold'>Discription:</h5>
                                <p>{item.somedata}</p>
                            </div>
                        </div>
                        <ToastContainer position="top-center"/>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default ProductDetail