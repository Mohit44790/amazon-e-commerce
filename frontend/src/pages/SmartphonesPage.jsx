import  { useRef } from 'react'
import MegaMenuelectronics from './Electronics/MegaMenuelectronics'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { Link } from 'react-router-dom';

const topDeal = [
  "https://m.media-amazon.com/images/G/31/img22/Wireless/devjyoti/BAU/iQOO/Switchover/10R_TD_V1.png",
  "https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/realmepricemay17/70_Turbo_3.png",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/CLP/2025/9thMay/OnePlus_13R_6.png",
  "https://m.media-amazon.com/images/G/31/img22/Wireless/devjyoti/BAU/iQOO/Z10/LP/V3/iQOO_Z10x_1.png",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/Priya/S25/SAMSUNG_S25_Ultra.png",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/TDOW/AprRevamp/iPhone_16_580x740.jpeg",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/Isha/Xiaomi/clp/Redmi_A4_5G_2.png",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/CLP/2025/11thMay/OnePlus_Nord_CE4_7.png",
  "https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/Mseries/Changes/Galaxy_M35_5G_copy_1_580x740.png",
  "https://m.media-amazon.com/images/G/31/img22/Wireless/devjyoti/BAU/iQOO/Neo10/V5/iQOO_Z10_6.png",
  "https://m.media-amazon.com/images/G/31/img24/Wireless/debarsh/Honor/CLP/Honor_200_5G_580x740_1905.png",
  "https://m.media-amazon.com/images/G/31/img24/Wireless/Mounika/lava/Lava_Agni_3_May20.png"
]

const SmartphonesPage = () => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <div>
      <MegaMenuelectronics />
      <div className='flex gap-2'>
        {/* Sidebar */}
        <div className='w-72 p-4 border  bg-white text-sm'>
  <h2 className='font-bold mb-2'>Category</h2>
  <ul className='space-y-1'>
    <li><Link to="/electronics" className="hover:text-orange-500">Electronics</Link></li>
    <li><Link to="/mobiles-accessories" className="hover:text-orange-500">Mobiles & Accessories</Link></li>
    <li><Link to="/mobile-accessories" className="hover:text-orange-500">Mobile Accessories</Link></li>
    <li><Link to="/mobile-broadband" className="hover:text-orange-500">Mobile Broadband Devices</Link></li>
    <li><Link to="/sim-cards" className="hover:text-orange-500">SIM Cards</Link></li>
    <li><Link to="/smartphones" className="hover:text-orange-500">Smartphones & Basic Mobiles</Link></li>
    <li><Link to="/smartwatches" className="hover:text-orange-500">Smartwatches</Link></li>
  </ul>
</div>

        {/* Main Content */}
        <div className="w-full bg-gray-100">
          {/* Banner section */}
          <div className='flex gap-4 w-full p-4'>
            <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/Navigator/Accessories.jpg" alt="access" className="w-1/2 h-auto object-cover" />
            <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/nbshagun/CLP/2025/28Feb/OnePlus-13R-.jpg" alt="Oneplus" className="w-1/2 h-auto object-cover" />
          </div>

          <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Nav/Banner.gif" alt="" className="w-full" />

          {/* Latest Launches */}
          <div className='bg-white mt-4 mx-4 p-4 relative'>
            <h1 className='text-lg font-bold mb-2'>Latest launches in Mobiles & Accessories</h1>

            {/* Scroll buttons */}
            <button
              onClick={() => scroll(-300)}
              className="absolute top-32 left-2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
            >
              <IoIosArrowBack size={20} />
            </button>

            <div
              className='flex overflow-x-auto scrollbar-hide gap-4 px-8'
              ref={scrollRef}
            >
              {/* Product images */}
              {[
                "https://m.media-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/OnePlus13s_newLaunch/TeaserDrop_19thMay/D237447960_WLD_OnePlus_13s_NewLaunch_LaunchLatest_launches_newtemp_978x900_set10._SS600_QL85_.jpg",
                "https://m.media-amazon.com/images/G/31/img24/Wireless/debarsh/Motorola/razr60u/13th/Postlaunch/P232476705_WLD_BAU_Moto_60_Ultra_Latest-launches-new_978x900_x._SS600_QL85_.jpg",
                "https://m.media-amazon.com/images/G/31/img23/Wireless/Priya/ParadigmSlim/GW_SET3_S25-Edge_Launch__NewLaunch_LaunchLatest-launches-new-temp_978x900._SS600_QL85_FMpng_.png",
                "https://m.media-amazon.com/images/G/31/img22/Wireless/devjyoti/BAU/iQOO/Neo10/V4/Latest-launches-new-temp_978x900._SS600_QL85_.jpg",
                "https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/realmeGT7camera/D239173571_LaunchLatest-launches-new-temp_978x900._SS600_QL85_FMpng_.png",
                "https://m.media-amazon.com/images/G/31/img21/Wireless/vinambia/gt7tintrigue2/P236242654_Latest-launches-new-temp_978x900._SS600_QL85_FMpng_.png",
                "https://m.media-amazon.com/images/G/31/img22/WLA/2025/Newlaunch/Truke/Mega9/sale/D227440626_IN_WLA_truke_Mega9_Latest_launches_newtemp_978x900_set4_02._SS600_QL85_.jpg",
              ].map((src, idx) => (
                <img key={idx} src={src} alt={`launch-${idx}`} className="w-40 h-40 object-cover rounded shadow" />
              ))}
            </div>

            <button
              onClick={() => scroll(300)}
              className="absolute top-32 right-2 transform -translate-y-1/2 z-10 bg-white rounded-full shadow p-2"
            >
              <IoIosArrowForward size={20} />
            </button>
          </div>
          <div>
            <img src="https://m.media-amazon.com/images/G/31/img23/Wireless/CatPage/Revamp2025/TDOW/AprRevamp/Top-deals_1_01.jpg" alt="" />
            <div className='grid grid-cols-6'>
              {topDeal.map((deal,index)=>(
                <div key={index} >
                  <img src={deal} alt="" />

                </div>
              ))}
            </div>
            <img src="https://m.media-amazon.com/images/G/31/img24/Wireless/Madhav/May/AppleAI/New/D225424372_IN_WLD_Apple_-intelligence-campaign_1242x500.jpg" alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SmartphonesPage
