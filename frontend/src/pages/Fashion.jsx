import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowUp } from 'react-icons/io';
import { fashionBanner } from '../Data/AllTypesAcccessories';
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
              {/* Top Bar */}
              <div className="flex justify-between items-center text-sm py-3 border-b px-4 md:px-6 bg-white z-50 relative">
                <h1 className="text-xl md:text-2xl -mt-3 font-semibold">Amazon Fashion</h1>
                {/* <div className="flex gap-6"> */}
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
                {/* </div> */}
              </div>
        
              {/* Mega Menu */}
              {hoveredTab && megaMenuData[hoveredTab] && (
                <div
                  onMouseEnter={() => setHoveredTab(hoveredTab)}
                  onMouseLeave={() => setHoveredTab(null)}
                  className="absolute left-0 w-full  bg-white bg shadow-lg border-t px-10 py-6 z-40"
                >
                  <div className="grid  grid-cols-8 gap-2">
                    {/* Columns */}
                    
                    {Object.entries(megaMenuData[hoveredTab].columns).map(([heading, items]) => (
                      <div key={heading}>
                        <h4 className="font-semibold  text-sm mb-2">{heading}</h4>
                        <ul className="space-y-1 text-gray-700 text-sm">
                          {items.map((item) => (
                            <li key={item} className="hover:underline cursor-pointer">
                              {item}
                            </li>
                          ))}
                          
                        </ul>
                        
                      </div>
                    ))}
                  {/* Images Section */}
                  {megaMenuData[hoveredTab].images && (
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
                    )}
                    
                  </div>
                </div>
              )}
            </div>

            <div>
                 {/* Left Arrow */}
                        <button
                          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
                          onClick={() => scroll('left')}
                        >
                         <IoIosArrowBack size={30}/>
                        </button>
                         {/* Right Arrow */}
                                <button
                                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
                                  onClick={() => scroll('right')}
                                >
                                       <IoIosArrowForward size={30} />
                        
                                </button>
                <div className='flex text-center  justify-center ' ref={scrollRef}>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/mens/mens-1._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Men Clothings</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/womens._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Women Clothings</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/kids._SS300_QL85_FMpng_.png" alt="men" />
                        <p>kids Clothings</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/footwear._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Foot wears</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/luggage__bags._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Laggage & bags</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/jewellery._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Jewellery</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/watches._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Watches</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/beauty._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Beauty</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/BAU/Halos/handbags._SS300_QL85_FMpng_.png" alt="men" />
                        <p>HandBags</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/Halos/eyewear._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Sunglasses & Frames</p>
                    </div>
                    <div>
                        <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/WEDDING/Wedding_store_halo._SS300_QL85_FMpng_.png" alt="men" />
                        <p>Store</p>
                    </div>

                </div>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/AF/3.0/FDFO/category/Rnp_PC._CB568620391_.gif" alt="" />
            </div>

            {/* banner image scroll  */}
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
                  <div className='grid grid-cols-3 gap-4'>
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/HSBC.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/BOB.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/federal.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/J_and_K.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/Yes_Bank.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/April/Bank/idfc.png" alt="" />
                    <img src="https://m.media-amazon.com/images/G/31/img24/Fashion/BAU/Bank/July/CBCC-Prime.png" alt="" />
                  </div>
    </div>
  )
}

export default Fashion