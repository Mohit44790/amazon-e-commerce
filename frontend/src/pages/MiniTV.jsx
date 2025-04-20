import React, { useEffect, useRef, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaAmazon, FaSearch } from 'react-icons/fa';
import { miniTvbannerImage, trendingTop } from '../Data/miniTv';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MiniTV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState('Home');
  const scrollRef = useRef();
  const menuItems = [
    'Home',
    'New & Hot',
    'Web Series',
    'Movies',
    'VDesi',
    'Romance',
    'Comedy',
    'Tamil',
    'Telugu'
  ];
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? miniTvbannerImage.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === miniTvbannerImage.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  //top trending 10
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="bg-gray-900 min-h-screen text-white relative overflow-hidden">
      {/* Navbar */}
      <nav className="font-bold flex flex-wrap gap-4 justify-between items-center mx-9">
        {/* Logo Section */}
        <div className="flex mt-4 w-full  items-center gap-2">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt="Amazon"
            className="w-24 mt-4 object-contain"
          />
          <span>|</span>
          <img
            src="https://www.vhv.rs/dpng/d/417-4172864_mx-player-ifixit-logo-transparent-hd-png-download.png"
            alt="MX player"
            className="w-24 object-contain"
          />
        

        {/* Menu Items */}
        <div className="flex  gap-4 px-12 mx-3 justify-between  items-center text-sm md:text-base">
          
          {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setActiveMenu(item)}
          className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
            activeMenu === item ? 'text-blue-500 border-b-2 border-blue-500' : 'hover:text-gray-400'
          }`}
        >
          {item}
        </div>
      ))}
        </div>
        <div className='flex space-x-9'>

          <FaSearch size={20} className="cursor-pointer" />
          <FaAmazon size={24} className="text-orange-500 cursor-pointer" />
          <CiSettings size={24} className="cursor-pointer" />
        </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative w-full flex justify-center items-center mt-4">
        <img
          src={miniTvbannerImage[currentIndex].url}
          alt={`MiniTV ${currentIndex}`}
          className="rounded-md w-full sm:w-[80%] md:w-[100%] object-cover"
        />

        {/* Arrows */}
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>

      <div>
      <h2 className='text-2xl py-1 px-4 mb-2'>Trending Top 10</h2>
      <div className='relative'>
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() => scroll('left')}
        >
         <IoIosArrowBack size={30}/>
        </button>

        {/* Slider Container */}
        <div
          ref={scrollRef}
          className='flex overflow-hidden no-scrollbar scroll-smooth w-full px-4 gap-4'
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {trendingTop.map((trend, index) => (
            <div
              key={index}
              className='flex-shrink-0 w-[23%] md:w-[23%] py-2 lg:w-[28%] xl:w-[23%] 2xl:w-[15%] scroll-snap-align-start'
            >
              <img src={trend.image} alt={trend.name} className='w-full h-40 rounded-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg object-cover'
 />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() => scroll('right')}
        >
               <IoIosArrowForward size={30} />

        </button>
      </div>
    </div>
    </div>
  );
};

export default MiniTV;
