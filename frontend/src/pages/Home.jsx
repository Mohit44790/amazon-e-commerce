import React, { useEffect, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ProductCollection from '../components/ProductCollection';

const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/OHL/24/BAU/feb/PC_hero_1_2x_1._CB582889946_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/aprilGW/2x._CB547209600_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/MA2025/GW/BAU/Unrec/PC/934044814._CB551384116_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/uber_new_high._CB537689643_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/Hero/makeup_PC._CB547405362_.png"
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-200 w-full">
      {/* Banner Image */}
      <div className="relative h-[500px] sm:h-[350px] md:h-[600px]">
  <img
    src={images[currentIndex]}
    alt={`banner-${currentIndex}`}
    className="w-full h-full object-cover"
  />

        {/* Blur effect at the bottom */}
<div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
        {/* Arrows */}
        <button
          className="absolute left-2 sm:left-4 top-36 transform -translate-y-1/2 z-20 text-white"
          onClick={prevSlide}
        >
          <IoIosArrowBack  size={40} />
        </button>
        <button
          className="absolute right-2 sm:right-4 top-36 transform -translate-y-1/2 z-20 text-white"
          onClick={nextSlide}
        >
          <IoIosArrowForward size={40} />
        </button>

        {/* Overlapping Cards */}
        <div className="absolute w-full px-2 top-[200%] sm:top-[10%] lg:top-[80%]
 transform -translate-y-1/2 z-30">
          <div className="flex flex-wrap justify-center items-stretch gap-6">
            {/* Card 1 */}
            <div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">Continue shopping deals</h2>
              <div className="grid grid-cols-2 gap-2">
                <img src="https://m.media-amazon.com/images/I/71+dSIPTZCL._AC_SY145_.jpg" alt="" className="w-full h-28 object-contain" />
                <img src="https://m.media-amazon.com/images/I/51aXvjzcukL._AC_SY145_.jpg" alt="" className="w-full h-28 object-contain" />
                <img src="https://m.media-amazon.com/images/I/717Qo4MH97L._AC_SY145_.jpg" alt="" className="w-full h-28 object-contain" />
                <img src="https://m.media-amazon.com/images/I/51OWzUUyx6L._AC_SY145_.jpg" alt="" className="w-full h-28 object-contain" />
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div>

            {/* Card 2 */}
            <div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">

              <h2 className="font-semibold text-lg mb-2">Appliances for your home | Up to 55% off</h2>
              <div className="grid grid-cols-2 gap-2">

                 
                  <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />  
                  <p className="text-xs text-center">
                  Air conditioners</p>
                  
                  </div>
                  <div> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Refrigerators</p>
                  
                  </div>
                  <div><img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cushion Covers</p>
                  
                  </div> 
                  <div> <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cushion Covers</p>
                  
                  </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div>

            {/* Card 3 */}
            <div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">Revamp your home in style</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cushion Covers</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Home Decor</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Home Storage</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Lighting</p>
                </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div>

            {/* Card 4 */}
            <div className="w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md bg-white">
  {/* Sign In Section */}
  <div className="flex flex-col items-start mb-5">
    <h2 className="font-semibold text-lg mt-4 mb-4">Sign in for best experience</h2>
    <button className="bg-yellow-400 px-4 py-2 mt-6 text-center justify-center mx-8 rounded-md text-sm font-semibold hover:bg-yellow-500">
      Sign In
    </button>
  </div>

  {/* Product Section */}
  <div className="bg-white mb-2">
    <img
      src="https://m.media-amazon.com/images/I/51OWzUUyx6L._AC_SY145_.jpg"
      alt="Bolt Drive"
      className="w-full h-28 object-contain"
    />
    <div className="px-2">
      <p className="text-sm font-medium">Bolt Drive</p>
      <span className="text-yellow-500">★★★★★</span>
      <p className="text-sm font-semibold">Rs: 19,999</p>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
 {/* Padding for rest of content */}
 {/* <div className="md:h-[120px] sm:h[200px] lg:h[180px]">
    
 </div> */}
 <div className="flex flex-wrap justify-center mt-[265%] items-start gap-6 px-2 sm:mt-12 lg:mt-24">
 <div className="bg-white w-full sm:w-[48%] lg:w-[23%]  p-4 rounded-md shadow-md flex flex-col justify-between">
    <h2 className="font-semibold text-lg mb-2">Starting ₹149 | Headphones</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_boAt_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs sm:text-sm text-center">boat</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Boult_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">boult</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/GW/QC/PC/PC_QuadCard_Noise_0.5x._SY116_CB553870684_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">noise</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/june/CE/MSO/PD3/PC_QuadCard_Zeb_0.5x_1._SY116_CB570220221_.jpg" />
                  <p className="text-xs text-center">zebronics</p>
                </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div>
            <div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">Automotive essentials | Up to 60% off</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Glasscare1X._SY116_CB410830553_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cleaning</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Rim_tyrecare1x._SY116_CB410830552_.jpg" />
                  <p className="text-xs text-center">Tyre</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vega_helmet_186x116._SY116_CB405090404_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Helmets</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Auto/2020/GW/PCQC/Vaccum1x._SY116_CB410830552_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Lighting</p>
                </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div><div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">Starting ₹199 | Amazon Brands & more</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_furnishings_2._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cushion Covers</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_decor_1._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Home Decor</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_storage_1._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Home Storage</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/New/1x/final/186x116_Home_lighting_2._SY116_CB555624324_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Lighting</p>
                </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">See more</button>
            </div><div className="bg-white w-full sm:w-[48%] lg:w-[23%] p-4 rounded-md shadow-md">
              <h2 className="font-semibold text-lg mb-2">Up to 60% off | Styles for women</h2>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Cushion Covers</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF2-186-116._SY116_CB636048992_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Home Decor</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF4-186-116._SY116_CB636048992_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">watch</p>
                </div>
                <div>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF3-186-116._SY116_CB636048992_.jpg" alt="" className="w-full h-28 object-contain" />
                  <p className="text-xs text-center">Fashion Jewellery</p>
                </div>
              </div>
              <button className="mt-2 text-blue-600 hover:underline">End of section sales</button>
            </div>
 </div>
        <div>
            <ProductCollection/>
        </div>
    </div>
  );
};

export default Home;
