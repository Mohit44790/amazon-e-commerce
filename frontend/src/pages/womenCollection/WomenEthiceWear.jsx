import React, { useRef } from 'react';
import AmazonFashionNavbar from '../MensCollection/AmazonFashionNavbar';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { womenEthicWear } from '../../Data/AllTypesAcccessories';

const WomenEthiceWear = () => {
  const womenfashionRef = useRef();

  const handleScroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth / 2;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div>
      <AmazonFashionNavbar />

      <div className='flex flex-col md:flex-row mx-4 mt-2'>
        {/* Sidebar */}
        <div className="w-full md:w-64 border-r pr-4 mb-4 md:mb-0">
          <p className="text-sm font-semibold mb-1">Category</p>
          <Link to="/allAccessories" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Clothing & Accessories</span>
          </Link>
          <Link to="/clothing" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Women</span>
          </Link>

          <h1 className='text-sm font-semibold mx-4'>Ethnic Wear</h1>
          <div className='text-sm mt-1 mx-6 space-y-1'>
            {[
              { label: 'Blouses', path: '/women/ethnic-wear/blouses' },
              { label: 'Bottom Wear', path: '/women/ethnic-wear/bottom-wear' },
              { label: 'Chunnis & Dupattas', path: '/women/ethnic-wear/chunnis' },
              { label: 'Dress Material', path: '/women/ethnic-wear/dress-materials' },
              { label: 'Gowns', path: '/women/ethnic-wear/gowns' },
              { label: 'Kurtas & Kurtis', path: '/women/ethnic-wear/kurtas' },
              { label: 'Lehenga Cholis', path: '/women/ethnic-wear/lehenga' },
              { label: 'Salwar Suits', path: '/women/ethnic-wear/salwar' },
              { label: 'Sarees', path: '/women/ethnic-wear/sarees' },
            ].map((item, i) => (
              <Link to={item.path} key={i} className="block">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className='w-full bg-gray-100'>
          <div className='bg-white'>
            <h1 className='text-2xl font-bold mx-4 '>Women's Ethnic Wear</h1>

            <div className='flex flex-wrap mx-8 gap-4 px-4'>
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/sept/toggle/Ethnic-Toggle-2_01.jpg" alt="kurtas" className="w-36 sm:w-44 md:w-72" />
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/sept/toggle/Ethnic-Toggle-2_02.jpg" alt="sarees" className="w-36 sm:w-44 md:w-72" />
            </div>
          </div>

          {/* Scrollable Section */}
          <div className='relative bg-white mt-3 mx-4 px-4 py-6'>
            <h2 className="text-xl font-bold mb-4">Explore Categories</h2>
            <button
              onClick={() => handleScroll(womenfashionRef, 'left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <IoIosArrowBack size={20} />
            </button>

            <div
              className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-hide flex gap-4 px-4"
              ref={womenfashionRef}
            >
              {womenEthicWear.map((item, index) => (
                <Link to={item.path} key={index} className="flex-shrink-0 text-center">
                  <img src={item.image} alt={item.label} className="w-32 h-32 object-cover mx-auto mb-2 rounded-lg" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              ))}
            </div>

            <button
              onClick={() => handleScroll(womenfashionRef, 'right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
{/* Sun-Sational Styles */}
          <div className='bg-white mx-4 mt-2'>
            <h1 className='text-lg font-semibold mx-2 px-4 py-2'>Sun-Sational Styles</h1>
            <div className='flex w-48'>
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/2025/april/ss-flip/kurta/Sun-Sational/Carousel_Large._SS400_QL85_FMpng_.png" alt="kurta" />
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/2025/april/ss-flip/kurta/Sun-Sational/Carousel_Large-1._SS400_QL85_FMpng_.png" alt="kurta" />
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/2025/april/ss-flip/kurta/Sun-Sational/Carousel_Large-2._SS400_QL85_FMpng_.png" alt="kurta" />
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/2025/april/ss-flip/kurta/Sun-Sational/Carousel_Large-3._SS400_QL85_FMpng_.png" alt="kurta" />
              <img src="https://m.media-amazon.com/images/G/31/img23/WA/2025/april/ss-flip/kurta/Sun-Sational/Carousel_Large-4._SS400_QL85_FMpng_.png" alt="printkurta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WomenEthiceWear;
