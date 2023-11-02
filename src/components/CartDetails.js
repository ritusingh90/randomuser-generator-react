import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { emptyCartItems, removeToCart,  removeProduct, addToCart} from '../Redux/cartSlice'
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const CartDetails = () => {
    const [totalprice,setPrice] = useState(0);
    const [totalquantity,setTotalQuantity] = useState(0);

    const {carts} = useSelector((state)=> state.allCart); 
    console.log(carts, "dsfgsejf")

    const dispatch = useDispatch()


    const send = (e) => {
        console.log("First Alert", e)
        dispatch(addToCart(e)) 
    }

    const handleSingleDelete = (e) => {
        dispatch(removeToCart(e))
        toast.success("Item Deleted From Your Cart")
        
    }

    const emptyCart = () => {
        dispatch(emptyCartItems())
        toast.success("Item added In Your Cart")
    }

    const remove = (item)=>{
        dispatch(removeProduct(item));
    }

    const total = () => {
        let totalprice = 0
        carts.map((ele) => {
            console.log("Price:",ele.price, "Qnty:", ele.qnty, "Total:", totalprice);
            totalprice = ele.price * ele.qnty + totalprice
        });
        setPrice(totalprice)
    }


    // count total quantity
    const countquantity = ()=>{
        let totalquantity = 0
        carts.map((ele)=>{
            totalquantity = ele.qnty + totalquantity
        });
        setTotalQuantity(totalquantity)
    } 



    useEffect(() => {
        total();
        countquantity()
    }, [total, countquantity])




  return (
    <div>
        <div className='flex justify-content-center'>
            <div>
                <div className='top flex justify-space-between '>
                    <h3>Cart Calculation({carts.length})</h3>
                    {
                        carts.length > 0 ? (<button onClick={emptyCart}>Clear Cart</button>) : (<></>)
                    }
                    
                </div>
                <div className='content'>
                    {
                         carts.length === 0 ? (
                            <h5>Your cart Emplty</h5>
                         ):(
                            <table className='table-auto'>
                                <thead>
                                    <tr>
                                        <th className="px-4 py-2">Action</th>
                                        <th className="px-4 py-2">Product</th>
                                        <th className="px-4 py-2">Name</th>
                                        <th className="px-4 py-2">Price</th>
                                        <th className="px-4 py-2">Qty</th>
                                        <th className="px-4 py-2">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        {
                                            carts.map((item)=> {
                                                return (
                                                    <tr key={item.id}>
                                                        <td className="border px-4 py-2"><button onClick={()=>handleSingleDelete(item.id)}>Delete</button></td>
                                                        <td className="border px-4 py-2">
                                                            <NavLink to={`/productdetail/${item.id}`}>
                                                                <img src={item.imgdata} alt="" title="" style={{width: '70px', height: '70px'}}/>
                                                            </NavLink>
                                                        </td>
                                                        <td className="border px-4 py-2">{item.dish}</td>
                                                    
                                                        <td className="border px-4 py-2">{item.price}</td>
                                                        <td className="border px-4 py-2">
                                                            <div className='d-flex justify-content-between align-items-center' style={{width:100,cursor:"pointer",color:"#111"}}>
                                                                <span style={{fontSize:24}} onClick={item.qnty <=1 ? ()=>handleSingleDelete(item.id) : ()=>remove(item)}>-</span>
                                                                <span style={{fontSize:22}}>{item.qnty}</span>
                                                                <span style={{fontSize:24}} onClick={()=>send(item)}>+</span>
                                                            </div>
                                                        </td>
                                                        <td className="border px-4 py-2">{(item.price * item.qnty)}</td>
                                                </tr>
                                                )
                                            })
                                        }
                                            
                                    
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th colSpan={3}>&nbsp;</th>
                                        <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{totalquantity}</span></th>
                                        <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {totalprice}</span></th>
                                    </tr>
                                </tfoot>
                            </table>
                         )
                    }
                    <ToastContainer/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartDetails