import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import MegaMenuelectronics from './MegaMenuelectronics';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  categoriesComputers,
  categoryslide1,
  categoryslide2,
  categoryslide3
} from '../../Data/AllTypesAcccessories';
import { trendingAudio } from '../../Data/ElectronicData';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const bankBanner = [
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/IDFC-Bank_1242._CB795752984_.jpg",
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/FED-Bank_1242._CB795752984_.jpg",
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/YES-Bank_1242._CB795752984_.jpg",
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/ONE-Bank-Strip-1282x182._CB795752984_.png",
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/BOB_1242._CB795752984_.jpg",
  "https://m.media-amazon.com/images/G/31/img24hp/g/hh/YES-Bank_1242._CB795752984_.jpg"
];

// Skeleton for product items
const SkeletonCard = () => (
  <div className="flex gap-2 px-4 py-2">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="animate-pulse w-36 mb-4 mx-2">
        <div className="bg-gray-200 w-40 h-40 rounded-full" />
        <div className="bg-gray-200 h-4 mt-2 rounded" />
      </div>
    ))}
  </div>
);

// Skeleton for sidebar
const Skeleton = () => (
  <div className="flex flex-col gap-2 px-2">
    {[...Array(20)].map((_, index) => (
      <div key={index} className="animate-pulse w-44 h-4 bg-gray-200 rounded" />
    ))}
  </div>
);

const Electronics = () => {
  const [loading, setLoading] = useState(true);
const scrollRef = useRef(null);

const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };
  //skeleton loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <div className="w-full">
      <MegaMenuelectronics />

      <div className="flex flex-col lg:flex-row gap-4 p-2 mx-2">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 border-r px-4 py-1">
          <h2 className="text-sm font-semibold mb-2">Category</h2>
          <h1 className="text-sm font-bold mb-1">Electronics</h1>
          <ul className="text-sm mx-2 space-y-1">
            {loading ? (
              <Skeleton />
            ) : (
              categoriesComputers.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-500 block transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:w-3/4 bg-gray-100">
          {/* Banner Slider */}
          <div className="bg-white p-6 shadow mx-2 mt-2">
            <Slider {...sliderSettings}>
              {bankBanner.map((url, index) => (
                <div key={index}>
                  <img
                    src={url}
                    alt={`Bank Banner ${index + 1}`}
                    className="w-full h-auto object-contain rounded-md"
                  />
                </div>
              ))}
            </Slider>
          </div>

          {/* Shop by Category */}
          <div className="bg-white mx-2 mt-2">
            <h1 className="mx-4 font-bold text-lg py-2">Shop by category</h1>

            <div className="flex overflow-x-auto scrollbar-hide">
              {loading ? (
                <SkeletonCard />
              ) : (
                categoryslide1.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <div className="items-center text-center w-36 mb-4 mx-2">
                      <img src={item.image} alt={item.name} className="w-full h-40 object-contain" />
                      <p className="text-sm mt-1">{item.name}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>

            <div className="flex overflow-x-auto scrollbar-hide">
              {loading ? (
                <SkeletonCard />
              ) : (
                categoryslide2.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <div className="items-center text-center w-36 mb-4 mx-2">
                      <img src={item.image} alt={item.name} className="w-full h-40 object-contain" />
                      <p className="text-sm mt-1">{item.name}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>

          {/* Customer's Most Loved */}
          <div className="bg-white mt-2 mx-2">
            <h1 className="mx-4 font-bold text-lg py-2">Customer's Most Loved</h1>
            <div className="flex overflow-x-auto scrollbar-hide mx-2">
              {loading ? (
                <SkeletonCard />
              ) : (
                categoryslide3.map((item, index) => (
                  <Link to={item.path} key={index}>
                    <div className="items-center text-center w-36 border mb-4 mx-2">
                      <img src={item.image} alt={item.name} className="w-full h-40 object-cover" />
                  
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
           <section className="relative my-2">
      <div className="px-4 bg-white">
        <h1 className="text-xl font-semibold mb-4">New & trending: Audio</h1>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-70 p-3 py-10 mx-2 hidden md:block"
        >
          <IoIosArrowBack size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto   space-x-4 scroll-smooth"
        >
          {trendingAudio.map((audio, index) => (
            <div
              key={index}
              className="w-80 flex-shrink-0"
            >
              <Link to={audio.path}>
                <img
                  src={audio.image}
                  alt="audio"
                  className="w-full h-80 object-contain "
                />
              </Link>
            
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white  p-3 py-10 mx-2 hidden md:block"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>
    </section>
        </main>
      </div>
    </div>
  );
};

export default Electronics;
