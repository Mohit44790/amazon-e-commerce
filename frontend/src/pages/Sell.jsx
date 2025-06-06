import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import SellerCreateProduct from "../admin/SellerAccount/SellerCreateProduct";
import { useSelector } from "react-redux";

const Sell = () => {


  const [products, setProducts] = useState([]);
const  {user}  = useSelector((state) => state.auth);
  useEffect(() => {
    axios.get('http://localhost:8000/api/sales/assigned-products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Error loading today deals:', err));
  }, []);
  return (
    <div>
      <p className="text-xl mt-2">
  Want to sell?{" "}
  <Link to="/register-seller" className="text-blue-600 hover:underline">
    Register as a Seller
  </Link>
</p>
      {/* Top Banner Section */}
      <div className="flex flex-col lg:flex-row bg-gray-800 mt-4 mx-4 text-white p-6 lg:p-12 rounded-md">
        
        <div className="flex-1 lg:mx-20 mt-8 lg:mt-20 space-y-4">
          <h2 className="text-xl lg:text-2xl font-semibold">Announced:</h2>
          <h1 className="text-3xl lg:text-6xl font-bold leading-tight">
            ZERO referral fee on over 1.2 crore products
          </h1>
          <h1 className="text-lg lg:text-xl font-semibold mt-2">
            Highest-ever seller fee reduction
          </h1>
          <p className="font-semibold underline">Know more</p>
          <button className="bg-yellow-500 py-3 px-6 text-lg mt-4 rounded-full">
            Sign In
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
          <img
            src="https://m.media-amazon.com/images/G/31/amazonservices/Selling_fee_drop_GIF.gif"
            alt=""
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Fee Drop Highlight Title */}
      <div className="flex flex-col sm:flex-row gap-4 text-center justify-center items-center mt-10">
        <img
          src="https://m.media-amazon.com/images/G/31/amazonservices/New_new_new_one_more.gif"
          className="w-20"
          alt=""
        />
        <h1 className="text-3xl sm:text-5xl text-gray-900">Fee drop highlights</h1>
      </div>

      {/* Highlight Boxes */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 px-4">
        {[
          { percent: "0%", text: ["Referral fees on products under", "₹300"] },
          { percent: "65%", text: ["National shipping rates now,", "₹77"] },
          { percent: "90%", text: ["Savings in selling fees", "on the sale of second unit ₹300"] },
        ].map((item, i) => (
          <div key={i} className="p-5 bg-blue-300 rounded-2xl text-center w-full sm:w-1/3">
            <p className="text-4xl font-bold text-gray-900">{item.percent}</p>
            {item.text.map((t, idx) => (
              <p key={idx} className="text-sm">{t}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Category Impact Section */}
      <div className="mt-12 px-4 sm:px-8 md:px-20">
        <h1 className="text-2xl sm:text-3xl text-gray-900 font-bold text-center mb-8">
          Category Level Impact
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Apparel",
              img: "https://m.media-amazon.com/images/G/31/amazonservices/Apparel_lifestyle.jpg",
              desc: "Enjoy up to 16.5% reduction in referral fee on items priced above Rs.300.",
            },
            {
              title: "Home",
              img: "https://m.media-amazon.com/images/G/31/amazonservices/Home_lifestyle.jpg",
              desc: "See up to 15.5% reduction in referral fee for products = Rs.300.",
            },
            {
              title: "Shoes",
              img: "https://m.media-amazon.com/images/G/31/amazonservices/Shoes_lifestyle.jpg",
              desc: "See up to 15% reduction in referral fee for products = Rs.300.",
            },
            {
              title: "Jewellery",
              img: "https://m.media-amazon.com/images/G/31/amazonservices/Jewellery_lifestyle.jpg",
              desc: "See up to 17.5% reduction in referral fee for products = Rs.300.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full sm:w-64 h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-6">
          <button className="py-2 px-6 bg-orange-500 text-white rounded-full text-sm sm:text-base hover:bg-orange-600">
            Know more about fee drop here
          </button>
        </div>
      </div>
     {/* Todays Deal  */}
      <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Today Deals</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
  {products.length === 0 ? (
    <p className="text-gray-500">No deals available right now.</p>
  ) : (
    products.map((item) => {
      const promotionStart = item?.promotion?.startDate
        ? new Date(item.promotion.startDate)
        : null;
      const promotionEnd = item?.promotion?.endDate
        ? new Date(item.promotion.endDate)
        : null;
      const now = new Date();

      const isOfferActive =
        promotionStart && promotionEnd && now >= promotionStart && now <= promotionEnd;

      const discountedPrice = isOfferActive
        ? parseFloat(item.price) - (parseFloat(item.price) * (item.discount || 0)) / 100
        : item.price;

      return (
        <div
          key={item._id}
          className="bg-white h-full shadow-md rounded-lg overflow-hidden"
        >
          <img
            src={item.images?.[0] || "/placeholder.jpg"}
            alt={item.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-600">{item.description?.slice(0, 60)}...</p>
            <p className="mt-2">
              <span className="text-red-500 font-semibold">
                {item.discount}% OFF
              </span>
            </p>
            <p>
              <span className="line-through text-gray-400 text-sm">₹{item.price}</span>{' '}
              <span className="text-green-700 font-bold text-lg">₹{discountedPrice.toFixed(2)}</span>
            </p>
            <p className="text-sm mt-1">
              {promotionStart && promotionEnd ? (
                isOfferActive ? (
                  <span className="text-green-600 font-medium">Active Offer</span>
                ) : now < promotionStart ? (
                  <span className="text-yellow-500 font-medium">Upcoming Offer</span>
                ) : (
                  <span className="text-gray-500 font-medium">Expired</span>
                )
              ) : (
                <span className="text-red-500 font-medium">No Promotion</span>
              )}
            </p>
            <Link to={`/offer-product/${item._id}`}>
              <button className="mt-3 w-full py-2 bg-yellow-400 hover:bg-yellow-500 rounded-full font-semibold">
                View Deal
              </button>
            </Link>
          </div>
        </div>
      );
    })
  )}
</div>

    </div>
      {user?.role === "seller" && (
    <div>
      
           <SellerCreateProduct/>
     
    </div>
  )}
  

   
    </div>
  );
};

export default Sell;
