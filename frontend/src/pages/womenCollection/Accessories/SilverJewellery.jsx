import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar';
import { brandFocusJewellery, fashionJewellery, fashionstyle, sliverJwellery } from '../../../Data/AllTypesAcccessories';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useRef } from 'react';

const SilverJewellery = () => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

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

      <div className="flex flex-col lg:flex-row gap-4 p-4">
        {/* Sidebar */}
        <aside className="w-full lg:w-72 border-r pr-4">
          <h2 className="text-lg font-semibold mb-2">Silver Jewellery</h2>
          {/* You can add filters or categories here */}
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          {/* Horizontal scroll images */}
          <div className="flex overflow-x-auto space-x-4 mb-6 ">
            {sliverJwellery.map((jewellery, index) => (
              <div key={index} className="min-w-[170px]">
                <Link to={jewellery.path}>
                  <img
                    src={jewellery.img}
                    alt={`Jewellery ${index}`}
                    className="w-full h-44"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Image Slider */}
          <section className="mb-8">
            <h2 className="text-xl font-bold mb-4">Fashion Jewellery</h2>
           <div className="w-full max-w-5xl ">
            <Slider {...sliderSettings} >
              {fashionJewellery.map((item, index) => (
                <div key={index} className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] ">
                     <Link to={item.path}>
                  <img
                    src={item.img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-md"
                    />
                    </Link>
                </div>
              ))}
            </Slider>
          </div>

          </section>
          {/* Shop Now */}
       <section>
        <div className='bg-pink-200 rounded-lg mt-2 mb-2 py-4 px-4'>
            <h1>Shop Now</h1>
            <div>
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2025/MayART/XCM_Ananya/2_1._CB796563294_UC686,360_.png" alt="" className='w-56 ' />
               
            </div>
        </div>
       </section>
{/* Brands In Focus */}
        <section className="relative my-6">
        <div className=''>
             <h2 className="mx-4 mt-2 font-semibold text-lg">Brands In Focus</h2>
                <button  onClick={() => scroll("left")} className='top-1/2 left-0 absolute transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1 ml-2'>
                    <IoIosArrowBack size={30}/>
                </button>
                 <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 px-12 py-2"
      >
                    {brandFocusJewellery.map((brand,index)=>(
                         <img
            key={index}
            src={brand.img}
            alt={`brand-${index}`}
            className="w-60 object-cover rounded-md"
          />
                    ))}
                </div>
                <button onClick={() => scroll("right")} className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-1 mr-2 '>
                    <IoIosArrowForward size={30}/>
                </button>
           
        </div>
       </section>

          {/* Your Passport To Style */}
          <section className="mb-8">
            <div className='py-2 bg-pink-200 rounded-md'>

           
            <h2 className="text-xl font-bold mb-4 mx-4">Your Passport To Style</h2>
           <div className="w-full max-w-5xl ">
            <Slider {...sliderSettings} >
              {fashionstyle.map((item, index) => (
                <div key={index} className="relative w-full h-[200px] md:h-[300px] lg:h-[350px] ">
                     <Link to={item.path}>
                  <img
                    src={item.img}
                    alt={`Slide ${index}`}
                    className="w-full h-full object-cover rounded-md"
                    />
                    </Link>
                </div>
              ))}
            </Slider>
          </div>
          <div className='flex mt-8 gap-8 w-40'>
            <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Passpoert_to_style/shop_the_type-3._SS400_QL85_FMpng_.png" alt="1" />
            <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Passpoert_to_style/shop_the_type._SS400_QL85_FMpng_.png" alt="2" />
            <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Passpoert_to_style/shop_the_type-2._SS400_QL85_FMpng_.png" alt="3" />
            <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Passpoert_to_style/shop_the_type-1._SS400_QL85_FMpng_.png" alt="4" />
          </div>
           </div>

          </section>
{/* Popular Categories */}
          <section>
            <h1 className='text-xl font-bold mb-4 mx-4'>Popular Categories</h1>
            <div className='flex w-40'>
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories._CB559991005_.jpg" alt="1" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories-1._CB559991005_.jpg" alt="2" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories-2._CB559991005_.jpg" alt="3" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories-3._CB559991005_.jpg" alt="4" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories-5._CB559991005_.jpg" alt="5" />
                <img src="https://m.media-amazon.com/images/G/31/img21/Jewellery/2024/SS_24/Cat_page/FJ/Popular_categories/popular_categories-4._CB559991005_.jpg" alt="6" />
            </div>

          </section>
          
        </main>
      </div>
    </div>
  );
};

export default SilverJewellery;
