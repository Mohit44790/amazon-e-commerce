import React from "react";
import Slider from "react-slick";
import AmazonFashionNavbar from "../../MensCollection/AmazonFashionNavbar";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HandBagsCluthes = () => {
 const sliderImages = [
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/Handbags/Sept/Cat_Page/Heros/Premium_picsk_PC_1500x400._CB563280530_.png",
    path: "/handbags/premium",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/Handbags/Sept/Cat_Page/Heros/Bestselling_clutches_1500x400._CB563274578_.png",
    path: "/clutches/bestselling",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/Handbags/Sept/Cat_Page/Heros/Stylish_handbags_PC_1500x400._CB563274578_.png",
    path: "/handbags/stylish",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/Handbags/Sept/Cat_Page/Heros/Chic_Handbags_1500x400._CB563274578_.png",
    path: "/handbags/chic",
  },
  {
    url: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/Handbags/Sept/Cat_Page/Heros/Premium_vegan_workbags_1500x400._CB563274578_.png",
    path: "/workbags/vegan-premium",
  },
];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <AmazonFashionNavbar />

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-72   p-4 bg-gray-100 text-sm">
          <h3 className="font-bold mb-2">Category</h3>
          <ul className="space-y-1 mb-4">
            <li>Shoes & Handbags</li>
            <li>Handbags, Purses & Clutches</li>
            <li>Clutches</li>
            <li>Handbags</li>
            <li>Kids'</li>
            <li>Men's</li>
            <li>Messenger Bags</li>
            <li>Potlis & Wristlets</li>
            <li>Sling & Cross-Body Bags</li>
            <li>Women's Backpacks</li>
            <li>Women's Wallets</li>
          </ul>

          <h3 className="font-bold mb-2">Price</h3>
          <ul className="space-y-1 mb-4">
            <li>Under ₹500</li>
            <li>₹500 - ₹1,000</li>
            <li>₹1,000 - ₹2,500</li>
            <li>₹2,500 - ₹5,000</li>
            <li>Over ₹5,000</li>
          </ul>

          <h3 className="font-bold mb-2">Brands</h3>
          <ul className="space-y-1 mb-4">
            <li>Lavie</li>
            <li>ZOUK</li>
            <li>ADISA</li>
            <li>Miraggio</li>
            <li>Caprese</li>
            <li>Fostelo</li>
            <li>EXOTIC</li>
            <li>INOVERA (LABEL)</li>
            <li>Lino Perros</li>
          </ul>

          <h3 className="font-bold mb-2">Amazon Prime</h3>
          <p className="mb-4">Prime Eligible</p>

          <h3 className="font-bold mb-2">Delivery Day</h3>
          <ul className="mb-4">
            <li>Get It Today</li>
            <li>Get It by Tomorrow</li>
          </ul>

          <h3 className="font-bold mb-2">Customer Review</h3>
          <p className="mb-4">4 Stars & Up</p>

          <h3 className="font-bold mb-2">Deals & Discounts</h3>
          <ul>
            <li>All Discounts</li>
            <li>Today's Deals</li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full p-2">
          <div className="w-full max-w-5xl mx-auto">
            <Slider {...sliderSettings} >
              {sliderImages.map((item, index) => (
                <div key={index} className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] ">
                     <Link to={item.path}>
                  <img
                    src={item.url}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-md"
                    />
                    </Link>
                </div>
              ))}
            </Slider>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HandBagsCluthes;
