import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import { fashionBanner, fashionBanner2, fashionBanner3, fashionBanner4, fashionCategories } from '../Data/AllTypesAcccessories';
import { useNavigate } from 'react-router';
const fashionTabs = [
    "Women",
    "Men",
    "Kids",
    "Bags & Luggage",
    "Sportswear",
    "Sales & Deals",
  ];

  const megaMenuData = {
    "Bags & Luggage": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/HB.jpg", title: "Handbags", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BP.jpg", title: "Backpacks", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/DesktopSubnav/Updated/BWL.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
    "Women": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Women.jpg", title: "Handbags", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Jew/Feb/380-500.jpg", title: "Backpacks", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-Women-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
    "Men": {
      columns: {
        "Bags & Backpacks": ["Backpacks", "Laptop Bags", "Briefcases", "Messenger Bags", "School Bags"],
        "Luggage": ["Suitcases", "Trolley Bags", "Travel Duffles", "Travel Accessories"],
        "Handbags & Clutches": ["Handbags", "Totes", "Clutches", "Sling Bags"],
        "Wallets": ["Men's Wallets", "Women's Wallets"],
        "Stores": ["Leather Handbags", "Party Bags", "Work Bags", "College Bags"]
      },
      images: [
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Men.jpg", title: "Men Clothing", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img18/Fashion/September18/Flyouts/Running-Shoes.jpg", title: "Running Shoes", desc: "40%-70% off" },
        { src: "https://m.media-amazon.com/images/G/31/img19/Fashion/WA19/MAX/FLY_OUT/Sub-Nav-men-2._CB439603748_.jpg", title: "New Arrivals", desc: "Bags and Luggage" },
      ],
    },
  };
const Fashion = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollRef = useRef();
    const navigate = useNavigate();
    const scroll = (direction) => {
        if (scrollRef.current) {
          const scrollAmount = scrollRef.current.offsetWidth / 2;
          scrollRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
          });
        }
      };

      //banner
      const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === 0 ? fashionBanner.length - 1 : prevIndex - 1
        );
      };
      
      const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
          prevIndex === fashionBanner.length - 1 ? 0 : prevIndex + 1
        );
      };
      
      
        useEffect(() => {
          const interval = setInterval(nextSlide, 8000);
          return () => clearInterval(interval);
        }, []);

        
  return (
    <div>
    <div className="relative">
    {/* Top Tabs */}
    <div className="flex justify-between items-center text-sm py-3 border-b px-4 md:px-6 bg-white z-50 ">
      <h1 className="text-xl md:text-2xl -mt-3 font-semibold">Amazon Fashion</h1>
      {fashionTabs.map((tab) => (
        <div
          key={tab}
          className="relative group cursor-pointer pb-1"
          onMouseEnter={() => setHoveredTab(tab)}
          onMouseLeave={() => setHoveredTab(null)}
        >
          <p className={`pb-1 ${hoveredTab === tab ? "border-b-2 border-black" : ""}`}>
            {tab}
          </p>
          {hoveredTab === tab && (
            <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-0">
              <IoIosArrowUp size={20} className="text-gray-200 bg-white" />
            </span>
          )}
        </div>
      ))}
    </div>

    {/* Mega Menu */}
    {hoveredTab && megaMenuData[hoveredTab] && (
      <div
        onMouseEnter={() => setHoveredTab(hoveredTab)}
        onMouseLeave={() => setHoveredTab(null)}
        className="absolute left-0 w-full bg-white shadow-lg border-t px-10 py-6 z-40"
      >
        <div className="grid grid-cols-8 gap-2">
          {Object.entries(megaMenuData[hoveredTab].columns).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="font-semibold text-sm mb-2">{heading}</h4>
              <ul className="space-y-1 text-gray-700 text-sm">
                {items.map((item) => (
                  <li key={item} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Mega Menu Images */}
          <div className="col-span-3 flex gap-4">
            {megaMenuData[hoveredTab].images.map((img, index) => (
              <div key={index} className="text-center text-sm">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-64 object-cover mx-auto"
                />
                <p className="font-semibold mt-1">{img.title}</p>
                <p className="text-xs text-gray-500">{img.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}

   

    {/* Scrollable Halo Section */}
    <div className="relative mt-8 px-4">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('left')}
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className="overflow-x-auto   flex gap-4" ref={scrollRef}>
        {fashionCategories.map((cat, index) => (
          <div key={index} onClick={() => navigate(cat.path)} className="min-w-[140px] text-center flex-shrink-0">
            <img src={cat.img} alt={cat.label}  className="w-32 h-32 cursor-pointer mx-auto object-contain" />
            <p className="mt-2 text-sm">{cat.label}</p>
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('right')}
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
     {/* Banner (optional auto slide - add if needed) */}
     <div className='py-2'><img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/FDFO/category/Rnp_PC._CB568620391_.gif" alt="banner2" /></div>
     {/* Banner Section */}
           <div className="relative w-full flex justify-center items-center mt-4">
             <img
               src={fashionBanner[currentIndex].url}
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
           <div className='grid grid-cols-3 mx-4 mt-4 gap-4'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/HSBC.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/BOB.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/federal.png" alt="" />
                    
                  </div>
                  <div className='grid grid-cols-4 mx-4 gap-4'>
                  <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/J_and_K.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/Yes_Bank.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/idfc.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/BAU/Bank/July/CBCC-Prime.png" alt="" />
                  </div>
                  <div className='mx-4 mb-2'>
                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/UBS/Bank/non-prime_v1.gif" className='rounded-lg mt-4 ' alt="" />
                  </div>
                      
                      {/* banner2  */}
                  <div className='py-2'>
                    <h1 className='mx-8 text-2xl font-semibold'>Just For You</h1>
                    <div className="relative mt-8 px-4">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('left')}
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className="overflow-x-auto no-scrollbar flex mx-2 gap-2 w-full" ref={scrollRef}>
        {fashionBanner2.map((banner, index) => (
          <div key={index} className="  text-center flex-shrink-0">
            <img src={banner.url} alt={banner.label} className="w-96 gap-2 h-full  object-contain" />
           
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('right')}
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>

                  </div>

                  {/* banner3  */}
                  <div className='mx-4'>
                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/Event/GenZsale/April25/HiddenGems/pc._CB546174934_.jpg" alt="banner3" />
                    <div className="relative ">
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('left')}
      >
        <IoIosArrowBack size={30} />
      </button>

      <div className="overflow-x-auto no-scrollbar bg-[#a0eb30] flex" ref={scrollRef}>
        {fashionBanner3.map((banner3, index) => (
          <div key={index} className="  text-center  flex-shrink-0">
            <img src={banner3.url} alt={banner3.label} className="h-40 mt-10  object-contain" />
           
          </div>
        ))}
      </div>

      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
        onClick={() => scroll('right')}
      >
        <IoIosArrowForward size={30} />
      </button>
    </div>
                  </div>

                  {/* banner4 */}
                  <div className="relative w-full flex justify-center items-center mt-4">
             <img
               src={fashionBanner4[currentIndex].url}
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
  </div>
  </div>
  )
}

export default Fashion