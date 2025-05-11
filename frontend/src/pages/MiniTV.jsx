import React, { useEffect, useRef, useState } from 'react';
import { CiSettings } from 'react-icons/ci';
import { FaAmazon, FaSearch } from 'react-icons/fa';
import { miniTvbannerImage, trendingTop, Web_Series } from '../Data/miniTv';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MiniTV = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState('Home');
  const scrollRefs = useRef([]);

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

  const scroll = (index, direction) => {
    if (scrollRefs.current[index]) {
      const scrollAmount = scrollRefs.current[index].offsetWidth / 2;
      scrollRefs.current[index].scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const renderSlider = (title, items, index) => (
    <div className="mx-6 my-8">
      <h2 className="text-2xl py-1 px-4 mb-2">{title}</h2>
      <div className="relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() => scroll(index, 'left')}
        >
          <IoIosArrowBack size={30} />
        </button>

        {/* Slider Container */}
        <div
          ref={(el) => (scrollRefs.current[index] = el)}
          className="flex overflow-hidden no-scrollbar scroll-smooth w-full px-4 gap-4"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[18%] scroll-snap-align-start"
            >
              <div className="w-full h-48 perspective">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-md transform transition-transform duration-500 hover:rotateY-6 hover:scale-125 hover:shadow-xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
          onClick={() => scroll(index, 'right')}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white overflow-hidden">
      {/* Navbar */}
      <nav className="font-bold flex flex-wrap gap-4 justify-between items-center mx-6 py-4">
        <div className="flex flex-wrap w-full items-center gap-4">
          <img
            src="https://www.pngplay.com/wp-content/uploads/3/White-Amazon-Logo-PNG-HD-Quality.png"
            alt="Amazon"
            className="w-24 object-contain"
          />
          <span className="text-white">|</span>
          <img
            src="https://www.vhv.rs/dpng/d/417-4172864_mx-player-ifixit-logo-transparent-hd-png-download.png"
            alt="MX player"
            className="w-24 object-contain"
          />

          <div className="flex-1 flex flex-wrap gap-3 justify-center items-center text-sm md:text-base">
            {menuItems.map((item) => (
              <div
                key={item}
                onClick={() => setActiveMenu(item)}
                className={`cursor-pointer px-2 py-1 rounded-md transition-all duration-200 ${
                  activeMenu === item
                    ? 'text-blue-500 border-b-2 border-blue-500'
                    : 'hover:text-gray-400'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="flex gap-5">
            <FaSearch size={20} className="cursor-pointer" />
            <FaAmazon size={24} className="text-orange-500 cursor-pointer" />
            <CiSettings size={24} className="cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Banner Section */}
      <div className="relative w-full flex justify-center items-center mt-4 px-4">
        <img
          src={miniTvbannerImage[currentIndex].url}
          alt={`MiniTV ${currentIndex}`}
          className="rounded-md w-full sm:w-[90%] object-cover max-h-[400px]"
        />
        <button
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={prevSlide}
        >
          <IoIosArrowBack size={30} />
        </button>
        <button
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>

      {/* Sliders */}
      {renderSlider('Trending Top 10', trendingTop, 0)}
      {renderSlider('Popular Web Series', Web_Series, 1)}
      {renderSlider('Horror, Thriller & Mystery', Web_Series, 2)}
    </div>
  );
};

export default MiniTV;
