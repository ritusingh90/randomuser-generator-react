import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
    const {carts} = useSelector((state)=> state.allCart);

    console.log("testing for Data,", carts)
  return (
    <nav className='p-4 bg-black'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-space-between'>
            <div className='w-[70%]'>
              <Link to="/" className='px-3 py-1 text-white'>Home</Link>
              <Link to="/cart" className='px-3 py-1 text-white'>Food</Link>
              <Link to="/productcart" className='px-3 py-1 text-white'>All Products</Link>
              <Link to="/swaip" className='px-3 py-1 text-white'>swaip</Link>
            </div>
            <div className='w-[30%] text-right '>
              <Link to="/cartdetail" className='p-1 text-white relative flex justify-end '>
                <FiShoppingCart className='text-4xl'/>
                <span className='absolute bg-white text-black w-[20px] h-[20px] text-center rounded-full leading-[20px] text-sm'>{carts.length}</span>
              </Link>
            </div>
          </div>
        </div>
        
       
    </nav>
  )
}

export default Header