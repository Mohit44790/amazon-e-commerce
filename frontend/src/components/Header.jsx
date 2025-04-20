import React from 'react'
import Navbar from './Navbar'
import { useCart } from '../context/CartContext';
import CartSidebar from './CartSidebar';
import SidebarMenu from './SidebarMenu';
import { IoIosArrowDown } from 'react-icons/io';
import { Link, Links } from 'react-router';


const Header = () => {
  const { isCartOpen } = useCart();
  return (
    <div><Navbar/>
    {isCartOpen && <CartSidebar />}
    <div className="bg-gray-800 text-white  text-sm px-4 py-2">
      {/* Scrollable nav on mobile */}
      <div className="flex items-center gap-4  overflow-x-auto scrollbar-hide whitespace-nowrap">
        
        <div className="flex  items-center gap-1 min-w-fit">
         <SidebarMenu />
        </div>

     <Link to={"/fresh"}>  <div className="flex items-center gap-1 min-w-fit">
          Fresh <IoIosArrowDown />
        </div></Link> 

        <Link to={"/miniTv"}> <div className="min-w-fit ">MX Player</div></Link>
        <div className="min-w-fit">Sell</div>
        <div className="min-w-fit">Best Sellers</div>
        <div className="min-w-fit">Mobiles</div>
        <div className="min-w-fit">Today's Deals</div>

        <div className="flex items-center gap-1 min-w-fit">
          Prime <IoIosArrowDown />
        </div>

        <div className="min-w-fit">Customer Service</div>
        <div className="min-w-fit">New Releases</div>
        <div className="min-w-fit">Electronics</div>
       <Link to={"/fashion"}><div className="min-w-fit">Fashion</div></Link> 
        <div className="min-w-fit">Amazon Pay</div>
        <div className="min-w-fit">Home & Kitchen</div>
        <div className="min-w-fit">Computers</div>
      </div>
    </div>
    
    </div>
  )
}

export default Header