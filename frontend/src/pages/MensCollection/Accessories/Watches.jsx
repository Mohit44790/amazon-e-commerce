import React, { useEffect, useRef, useState } from 'react';
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar';
import { Link } from 'react-router';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { womenWatches } from '../../../Data/AllTypesAcccessories';


const SkeletonCard = () => {
  return (
    <div className="border p-2 animate-pulse space-y-2">
      <div className="bg-gray-300 h-56 w-full rounded"></div>
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
      <div className="bg-gray-300 h-6 w-28 rounded"></div>
      <div className="flex gap-2">
        <div className="h-4 bg-gray-300 rounded w-20"></div>
        <div className="h-4 bg-gray-300 rounded w-24"></div>
        <div className="h-4 bg-gray-300 rounded w-16"></div>
      </div>
    </div>
  );
};
const Watches = () => {
      const scrollRef = useRef(null);
       const [loading, setLoading] = useState(true);
      
        // Simulate loading
        useEffect(() => {
          const timer = setTimeout(() => {
            setLoading(false);
          }, 1000); // simulate 1.5s load time
          return () => clearTimeout(timer);
        }, []);
    
      const scrollLeft = () => {
        scrollRef.current.scrollBy({
          left: -200,
          behavior: 'smooth',
        });
      };
    
      const scrollRight = () => {
        scrollRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });
      };
  return (
    <div>
      <AmazonFashionNavbar />

      <div className="flex flex-col md:flex-row">
        {/* Left Sidebar */}
        <div className="w-full md:w-72 border-r p-4 ">
          <h1 className="text-sm font-semibold">Category</h1>
          <div className="flex items-center  mt-1">
            <IoIosArrowBack />
            <h1 className="text-sm">Watches</h1>
          </div>
          <h1 className="text-sm font-semibold mx-4">Men</h1>
          <div className="text-sm mt-1 mx-8">
            {[
              { label: 'Wrist Watches', path: '/wrist-watches' },
              { label: 'Fashion Smartwatches', path: '/fashion-smartwatches' },
              { label: 'Pocket & Fob Watch', path: '/pocket_fob_watch' },
            ].map((item, index) => (
              <Link to={item.path} key={index}>
                <p>{item.label}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full p-4">
          <div className="flex justify-center  ">
            <Link to="/watches">
              <img
                src="https://m.media-amazon.com/images/G/31/img21/Watches2024/Sept/Jupiter/Category/Toggle/PC3.jpg"
                alt="menwatches"
                // className=" sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
            </Link>
            <Link to="/wfashion_watches">
              <img
                src="https://m.media-amazon.com/images/G/31/img21/Watches2024/Sept/Jupiter/Category/Toggle/PC4.jpg"
                alt="womenwatches"
                // className=" sm:w-1/2 md:w-1/3 lg:w-1/4"
              />
            </Link>
          </div>

          {/* Watch Slider */}
          <div className="relative w-full overflow-hidden">
            <button
              onClick={scrollLeft}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 py-3 px-2 border shadow-sm bg-white z-10"
            >
              <IoIosArrowBack size={24} />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto  scrollbar-hide gap-4 px-6 py-4 scroll-smooth"
            >
              {womenWatches.map((watches, index) => (
                <div key={index} className="text-center flex-shrink-0">
                  <Link to={watches.path}>
                    <img
                      src={watches.image}
                      alt={watches.name}
                      className="h-40"
                    />
                    <p className="mt-2 text-sm font-medium">{watches.name}</p>
                  </Link>
                </div>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 py-3 px-2 border shadow-sm bg-white z-10"
            >
              <IoIosArrowForward size={24} />
            </button>
          </div>

         {/* Bank Offers */}
<div className="mt-4 overflow-x-auto">
  <div className="flex gap-5 justify-start sm:justify-center flex-nowrap px-4">
    <img
      src="https://m.media-amazon.com/images/G/31/img24/Fashion/Bank/BAU/May/Stripes/HSBC.png"
      alt="HSBC"
      className="max-h-12"
    />
    <img
      src="https://m.media-amazon.com/images/G/31/img24/Fashion/Bank/BAU/May/Stripes/BOB_Card-10.png"
      alt="BOB"
      className="max-h-12"
    />
    <img
      src="https://m.media-amazon.com/images/G/31/img24/Fashion/Bank/BAU/May/Stripes/federal.png"
      alt="Federal"
      className="max-h-12"
    />
  </div>

   <div className='mt-4 w-48'>

  {
      loading ? ( <SkeletonCard  /> ):(<div>
    <img src="https://m.media-amazon.com/images/I/71GyfHYIR+L._AC_UL320_.jpg" alt="" />
    <h1>Fossil</h1>
    <p>Gwen Analogue Women's Watch (Gold Dial Womens Standard Colored)-Es487</p>
    <p>9888</p>
  </div> )
  }
  </div>
  
</div>

        </div>
      </div>
      {/* desciptions  */}
      <div className="px-4 md:px-8 py-6 space-y-4 text-gray-800 text-sm md:text-base">
  <h1 className="text-xl md:text-2xl font-semibold">
    Buy the Best Watches for Women on Amazon.in
  </h1>

  <p>
    Stay stylish with the finest collection of watches for women available on Amazon.in. Whether you're searching for a ladies wristwatch that complements your personality or a digital watch for women that combines functionality with modern style, Amazon.in offers a wide range of options to suit every need and budget.
  </p>

  <h2 className="text-lg font-semibold">Explore a Diverse Selection of Women’s Watches</h2>

  <p>
    Amazon.in features an extensive array of women's wristwatches suitable for any occasion. From everyday wear to special events, find the perfect wrist watch for women that aligns with your personal style.
  </p>

  <h3 className="text-base font-semibold">Casual and Everyday Watches:</h3>
  <p>
    For a blend of style and practicality, check out casual strap watches for women that are perfect for daily wear. These watches offer both comfort and elegance, making them ideal for routine activities and casual outings.
  </p>

  <h3 className="text-base font-semibold">Formal and Luxury Watches:</h3>
  <p>
    Elevate your formal attire with women's luxury watches or sophisticated automatic watches for women. These timepieces are designed to enhance your professional look and make a statement at any event. If you’re looking for the latest styles, explore our range of latest watches for women that feature cutting-edge designs and technology.
  </p>

  <h2 className="text-lg font-semibold">How to Style The Latest Watch for Women:</h2>
  <p>
    Choosing the right watch can enhance your overall look. For a classic and timeless appearance, pair a women's luxury watch with formal wear or an elegant evening dress. If you're going for a casual look, a female wristwatch with a leather strap or minimalist design works perfectly with jeans and a blouse. For sporty or active days, a digital watch for women not only looks chic but also offers practicality. Mix and match your watch with bracelets or bangles for a personalized and trendy style.
  </p>

  <h2 className="text-lg font-semibold">Shop Rugged Digital Watches for Women Living Active Lifestyle</h2>
  <p>
    For those who lead an active lifestyle, Amazon.in has a selection of digital watches for women that are perfect for workouts, jogging, or any sporty activity. These watches are engineered to provide precision and comfort during physical activities.
  </p>

  <h2 className="text-lg font-semibold">Get Elegant and Stylish Options Ladies Watches</h2>
  <p>
    Discover female wristwatch designs that offer a touch of elegance and versatility. Whether you prefer classic or contemporary styles, you’ll find a range of options that suit any occasion and personal preference.
  </p>

  <h2 className="text-lg font-semibold">Great Deals and Offers on Wristwatch for Ladies Available on Amazon.in</h2>
  <p>
    Don’t miss out on the best deals and discounts with watches for women on sale. Shop now to find excellent prices on a variety of styles and brands, ensuring you get the best value for your money. Find your ideal watch today and experience the perfect blend of style, function, and elegance with Amazon.in.
  </p>
</div>

    </div>
  )
}

export default Watches