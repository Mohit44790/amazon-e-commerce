import React, { useState } from 'react';
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { IoIosArrowDown, IoIosArrowForward, IoIosArrowUp, IoMdArrowDropdown } from "react-icons/io";

import { allProducts, electronics, electronicsItems, products } from '../Data/DataProduct';
import { Link, useNavigate } from 'react-router-dom';

// import { useCart } from '../context/CartContext';
import { MdArrowDropUp } from 'react-icons/md';
import { allBrands, mockProducts } from '../Data/AllTypesAcccessories';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from "../redux/slice/authSlice";
import { toggleCart } from '../redux/slice/cartSlice';
import CartSidebar from './CartSidebar';
import SearchBar from '../pages/SearchBar';
import { useTranslation } from "react-i18next";





const Navbar = () => {
  
    const { i18n } = useTranslation();
  
    const changeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
    };
    const { t } = useTranslation();
  // const [query, setQuery] = useState('');
  // const { toggleCart } = useCart();
  // const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const [showMenu,setShowMenu] =useState(false);
  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.userInfo);
  const  {user}  = useSelector((state) => state.auth);
  const cartItems = useSelector((state) => state.cart.items);

  // Count total quantity
  const cartCount = Array.isArray(cartItems) 
  ? cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  : 0;
  // const userInfo = localStorage.getItem("userInfo");
  

  const handleLogout = () => {
    dispatch(logoutUser()); // clear user from redux
    navigate("/signin");    // redirect to sign-in
  };

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setQuery(value);
  
    // if (value.trim() === '') {
    //   setSuggestions([]);
    // } else {
    //   const input = value.toLowerCase();
    //   const combinedProducts = [
    //     ...allProducts,
    //     ...electronics,
    //     ...electronicsItems,
    //     ...products,
    //     ...allBrands,
    //     ...mockProducts
    //   ].filter((item) => item.brand || item.category);
  
      // const filtered = combinedProducts.filter((item) =>
      //   item.brand.toLowerCase().includes(input) ||
      //   item.category?.toLowerCase().includes(input) // safe check for category
      // );
  
  //     setSuggestions(filtered);
  //   }
  // };
  
 
    //add to cart count
    const isCartOpen = useSelector(state => state.cart.isCartOpen);

  const handleToggle = () => {
    dispatch(toggleCart());
  };
  
  
    // const handleSelect = (id) => {
    //   setQuery('');
    //   setSuggestions([]);
    //   navigate(`/product/${id}`);
    // };
  return (
    <>
    <div className="bg-black text-white px-4 py-3 w-full">
      <div className="flex flex-wrap justify-between items-center gap-y-4 sm:gap-y-0">
     
      

        {/* Logo */}
     <Link to={"/"}>  <div className="flex items-center">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt="amazon"
            className="w-28 object-contain"
          />
        </div></Link> 

        {/* Location */}
        <div className="hidden sm:flex flex-col justify-center items-start text-sm">
          <p>{t("deliveryToDelhi")}</p>
          {/* <p>{t("deliveryToDelhi")}</p> */}
          <div className="flex items-center gap-1">
            <CiLocationOn size={20} />
            <span className="font-bold">{t("updateLocation")}</span>
          </div>
        </div>

        {/* Search bar */}
        <div className="w-full sm:flex sm:flex-grow sm:max-w-2xl">
        {/* <div className="flex w-full bg-white rounded overflow-hidden  ">
            <div className="flex items-center px-2 bg-gray-100 text-black">
              <span className="flex items-center gap-1 text-sm">All <IoIosArrowDown /></span>
            </div>
            <input
              type="search"
              value={query}
        onChange={handleChange}
              placeholder="Search Amazon.in"
              className=" flex-grow px-2 py-1 text-black focus:outline-none"
            />{suggestions.length > 0 && (
              <ul className="absolute z-20 mt-12 w-96 max-h-64 overflow-y-auto bg-white text-black shadow-lg border border-gray-300 rounded-md">
                {suggestions.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {item.brand}
                  </li>
                ))}
              </ul>
            )}
            
            <button className="bg-orange-400 p-2 text-black flex items-center justify-center">
              <CiSearch size={22} />
            </button>
          </div> */}
          <SearchBar/>
        </div>

        {/* Language Selector */}
        <div className="hidden sm:block">
          <select onChange={changeLanguage}
        value={i18n.language} className="bg-gray-200 text-black text-sm px-1 w-12 py-1 rounded">
           <option value="en">English</option>
<option value="hi">हिन्दी</option>
<option value="mr">मराठी</option>

          </select>
        </div>

        <div
      className="relative hidden sm:block text-sm text-left"
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
    >
      {/* Trigger */}
      <div className="cursor-pointer">
     
        <p className="text-sm">
  {t("hello")}, <span className="font-medium">{user?.name ? user.name : 'sign in'}</span>
</p>

        
        <h2 className="font-bold flex items-center">
          {t("accountAndList")} <IoMdArrowDropdown className="ml-1" />
        </h2>
      </div>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute z-50 bg-white text-black w-[400px] shadow-lg p-4 top-10 right-0 -left-40 border border-gray-200 rounded-md">
          <MdArrowDropUp size={28} className='relative -top-8 left-60  text-white' />
          <div className="border-b bg-blue-100 py-1  px-2 text-center rounded-lg flex justify-between  mb-2">
            <p>Who is Shopping? {user?.name ? user.name : 'Select a Profile'}</p>
            <button className="text-blue-600 font-semibold flex items-center">Manage Profiles <IoIosArrowForward /></button>
          </div>
          <div className="flex justify-between text-sm">
            {/* Your Lists */}
            <div>
              <h3 className="font-bold mb-2">Your Lists</h3>
              <ul className="space-y-1">
                <li>Create a Wish List</li>
                <li>Wish from Any Website</li>
                <li>Baby Wishlist</li>
                <li>Discover Your Style</li>
                <li>Explore Showroom</li>
                <Link to={"/user/giftcards/redeem"}> <li>Redeem</li></Link>
                <Link to={"/user/giftcards"}> <li>Gift Card</li></Link>
              </ul>
            </div>
            {/* Your Account */}
            <div>
              <h3 className="font-bold mb-2">Your Account</h3>
              <ul className="space-y-1">
              {/* <Link to="/admin"><ul><AdminDashboard /></ul></Link> */}
              {user?.role === "admin" && (
  <li>
    <Link to="/admin">
      <button className="btn-admin text-blue-500">Go to Admin Dashboard</button>
    </Link>
  </li>
)}

{/* {console.log(user?.role)} {/* Add this to check the role */}
{/* {user?.role === "admin" ? AdminDashboard : "Not Admin"} */} 

                <li>Your Orders</li>
                <li>Your Wish List</li>
                <li>Your Recommendations</li>
                <li>Prime Membership</li>
                <li>Content Library</li>
                <li>Switch Accounts</li>
                <li onClick={handleLogout} className="cursor-pointer">Sign Out</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>

        {/* Orders */}
        <Link to="/my-orders">  <div className="hidden sm:block text-sm text-left">
          <p>{t("return")}</p>
          <h2 className="font-bold">{t("order")}</h2>
        </div></Link> 

        {/* Cart */}
        <div>
      <div
        className="relative flex items-center gap-1 cursor-pointer"
        onClick={handleToggle}
      >
        <LiaCartArrowDownSolid size={38} />
        <span className="absolute top-1 right-10 bg-black text-orange-600 font-bold text-xs px-1.5 rounded-full shadow">
  {cartCount}
</span> 
        Cart
      </div>

      {isCartOpen && (
       <CartSidebar className="text-black"/>
      )}
    </div>

      </div>
    </div>
    
  
    </>
  );
};

export default Navbar;
