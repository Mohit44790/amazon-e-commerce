// Header.jsx
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import CartSidebar from './CartSidebar';
import SidebarMenu from './SidebarMenu';
import { IoIosArrowDown } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toggleCart } from '../redux/slice/cartSlice'; // ✅ important

const Header = () => {
  const sidebarRef = useRef();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);

  const { t } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isCartOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        dispatch(toggleCart());
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, dispatch]);

  return (
    <div>
      <Navbar />
      {isCartOpen && <CartSidebar ref={sidebarRef} />}
      <div className="bg-gray-800 text-white text-sm px-4 py-2">
        <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap">
          <div className="flex items-center gap-1 min-w-fit">
            <SidebarMenu />
          </div>
          <Link to="/fresh"><div className="flex items-center gap-1 min-w-fit">{t("fresh")} <IoIosArrowDown /></div></Link>
          <Link to="/miniTv"><div className="min-w-fit">{t("mxPlayer")}</div></Link>
          <Link to="/sell"><div className="min-w-fit">{t("sell")}</div></Link>
          <Link to="/bestsellers"><div className="min-w-fit">{t("bestSellers")}</div></Link>
          <Link to="/mobiles/smartphones"><div className="min-w-fit">{t("mobiles")}</div></Link>
          <Link to="/todayDeal"><div className="min-w-fit">{t("todaysDeals")}</div></Link>
          <Link to="/prime"><div className="flex items-center gap-1 min-w-fit">{t("prime")} <IoIosArrowDown /></div></Link>
          <Link to="/customer"><div className="min-w-fit">{t("customerService")}</div></Link>
          <Link to="/newRelease"><div className="min-w-fit">{t("newReleases")}</div></Link>
          <Link to="/electronics"><div className="min-w-fit">{t("electronics")}</div></Link>
          <Link to="/fashion"><div className="min-w-fit">{t("fashion")}</div></Link>
          <Link to="/amazonpay"><div className="min-w-fit">{t("amazonPay")}</div></Link>
          <Link to="/home-kitchen"><div className="min-w-fit">{t("homeKitchen")}</div></Link>
          <Link to="/computer"><div className="min-w-fit">{t("computers")}</div></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
