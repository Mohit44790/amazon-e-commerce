import React, { useRef } from 'react'
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar'
import { womenKurtasKurtis, womenKurtasKurtisbanner } from '../../../Data/FashionData'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const KurtasKurtis = () => {
    const navigate = useNavigate()
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
        <AmazonFashionNavbar/>
       <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-56 border-r gap-2 p-4 text-sm">
          <h2 className="font-bold mb-2">Categories</h2>
          <p className="text-gray-600">Kurtas & Kurtis</p>
        </aside>

    <main className=" w-full ">
          {/* Banner Section */}
           <section className="mt-4">
      
        {/* Scrollable Section */}
                <div className='relative bg-white mt-3 mx-4 px-4 py-6'>
                 
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
                    {womenKurtasKurtisbanner.map((item, index) => (
                      <Link to={item.path} key={index} className="flex-shrink-0 text-center">
                        <img src={item.image} alt={item.label} className="w-32 h-32 object-cover mx-auto mb-2 rounded-lg" />
                        <span className="text-sm">{item.name}</span>
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
    </section>
   

    <section>
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2 mt-4">
            {womenKurtasKurtis.map((item,index)=>(
                <div key={index}  onClick={() => navigate(`/offline-product/${item.id}`)} className='flex border rounded-lg  items-center justify-center'>
                    <img src={item.image} alt="" className='w-44 h-56 cursor-pointer' />
<div className="p-4">
                    <p className="font-medium text-sm mb-1">{item.brand}</p>
                    <p className="text-sm mb-2">{item.description}</p>

                    <div className="flex items-center space-x-2 mb-2">
                      <p className="text-lg font-semibold text-black">₹{item.price}</p>
                      <p className="line-through text-gray-500 text-sm">₹{item.MRP}</p>
                      <p className="text-green-600 text-sm">{item.discount}% Off</p>
                    </div>

                   
                    {/* Colors */}
{/* Colors */}
{item.colors && (
  <>
    <p className="text-sm text-gray-700 mb-1">Select Color:</p>
    <div className="flex flex-wrap gap-2 mb-2">
      {item.colors.split(',').map((color, i) => (
        <div
          key={i}
          title={color}
          className="w-5 h-5 rounded-full border border-gray-300"
          style={{ backgroundColor: color.toLowerCase() }}
        ></div>
      ))}
    </div>
  </>
)}

  
   
 


                  </div>
                </div>
            ))}
        </div>
    </section>
   </main>
        </div>
    </div>
  )
}

export default KurtasKurtis