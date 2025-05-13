import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io';
const electronicsTap = [
    
  "Mobiles & Accessories",
  "Laptops & Accessories",
  "TV & Home Entertainment",
  "Audio",
  "Cameras",
  "Computer Peripherals",
  "Smart Technology",
  "Musical Instruments",
  "Office & Stationery",
]

const megaMenuElectronicsData ={
   "Mobiles & Accessories":{
    columns:{
        "Mobile":["Mobiles","Case & Covers"],
        "Mobile brands":["MI","Onples"],
        "Accessories brand":[]
       

    },
    images:[
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/OnePlus6/IN_WLME_OnePlus7Pro_Miscellaneous_472x674.jpg",title:"Moblies",item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_Mobiles_access.jpg",title:"Moblies Accessories",item:"see more"},
    ]
   },
   "Laptops & Accessories":{
    columns:{

    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Laptops/Megamenu/D9130854_A-CEPC_PC_Laptop_Laptop_for_every_need_Slices_473x623.jpg",title:"choose the rigth laptop",item:"shop by need"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_laptops_cards.jpg",title:"High capacity memory cards",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_laptops_harddrives.jpg",title:"High capacity hard drives",item:"see more"}

    ]
   },
   "TV & Home Entertainment":{
columns:{

    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_smart.jpg",title:"Smart Tv Store ",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_buying_guide.jpg",title:"TV Buying Guide ",item:"learn more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_hometheatre.jpg",title:"Home entertainment store",item:"see more"},
    ]
   },
   "Audio":{
columns:{

    },
    images:[
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Megamanu/megamenu_sony_473x623.jpg",title:"Premium Audio Store" ,item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Megamanu/megamenu_473x623.jpg",title:"Alexa Built-in Devices Store" ,item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_audio_speaker.jpg",title:"Wireless Audio Store" ,item:"see more"},

    ]
   },
   "Cameras":{
columns:{

    },
    images:[

    ]
   },
  
    "Computer Peripherals":{columns:{

    },
    images:[

    ]},
  "Smart Technology":{columns:{

    },
    images:[

    ]},
  "Musical Instruments":{columns:{

    },
    images:[

    ]},
  "Office & Stationery":{columns:{

    },
    images:[

    ]}



   

}
const MegaMenuelectronics = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
  return (
    <div className='relative  z-50"'>
       <div className='flex flex-wrap justify-between items-center text-sm py-3 border-b px-4 md:px-6 bg-white'>
        <h1 className="text-xl md:text-lg font-semibold mb-2 md:mb-0">Electronics</h1>
        {electronicsTap.map((tab)=>(
            <div  key={tab}  className="relative group cursor-pointer pb-1"
              onMouseEnter={() => setHoveredTab(tab)}
              onMouseLeave={() => setHoveredTab(null)}>
            <p className={`  ${hoveredTab === tab ? "border-b-2 border-orange-500" : ""}`}>
                {tab}
              </p>
               {hoveredTab === tab && (
                              <span className="absolute left-1/2 transform -translate-x-1/2 top-full ">
                                <IoIosArrowUp size={24} className="text-gray-200 bg-white " />
                              </span>
                            )}
            </div>
        ))}
       </div>

        {/* Mega Menu */}
        {hoveredTab && megaMenuElectronicsData[hoveredTab] && (
            <div onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)} className="absolute left-0 w-full bg-white shadow-lg border-t px-4 md:px-10 py-6">
<div className="grid grid-cols-6 gap-6">
    {(()=>{
        const columns = Object.entries(megaMenuElectronicsData[hoveredTab].columns || {});
              const images = megaMenuElectronicsData[hoveredTab].images || [];
              const totalSlots = 6;

              const trimmedColumns = columns.slice(0, Math.min(columns.length, totalSlots));
              const remainingSlots = totalSlots - trimmedColumns.length;
              const trimmedImages = images.slice(0, remainingSlots);
               return (
                <>
                  {/* Text Columns */}
                  {trimmedColumns.map(([heading, items]) => (
                    <div key={heading} className="col-span-1">
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

                  {/* Image Cards */}
                  {trimmedImages.map((img, index) => (
                    <div key={index} className="col-span-1 text-center text-sm">
                      <img
                        src={img.src}
                        alt={img.title}
                        className="w-full h-56 object-cover rounded-md shadow"
                      />
                      <h5 className="mt-2 font-semibold">{img.title}</h5>
                      <p className="text-gray-600">{img.item}</p>
                    </div>
                  ))}
                </>
              );
     })()}
</div>
            </div>
        )}
    </div>
  )
}

export default MegaMenuelectronics