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
        "Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
        "Mobile brands": [
        { label: "Mi", url: "/brands/mi" },
        { label: "OnePlus", url: "/brands/oneplus" },
        { label: "Samsung", url: "/brands/samsung" },
        { label: "Apple", url: "/brands/apple" },
        { label: "Nokia", url: "/brands/nokia" },
        { label: "Vivo", url: "/brands/vivo" },
      ],
         "Accessories brand": [
        { label: "Boat", url: "/brands/boat" },
        { label: "Syska", url: "/brands/syska" },
        { label: "Spigen", url: "/brands/spigen" },
        { label: "Lenovo", url: "/brands/lenovo" },
        { label: "Ambrane", url: "/brands/ambrane" },
      ]
       

    },
    images:[
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wireless/CEEX/OnePlus6/IN_WLME_OnePlus7Pro_Miscellaneous_472x674.jpg",title:"Moblies",item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_Mobiles_access.jpg",title:"Moblies Accessories",item:"see more"},
    ]
   },
   
   "Laptops & Accessories":{
    columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Laptops/Megamenu/D9130854_A-CEPC_PC_Laptop_Laptop_for_every_need_Slices_473x623.jpg",title:"choose the rigth laptop",item:"shop by need"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_laptops_cards.jpg",title:"High capacity memory cards",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_laptops_harddrives.jpg",title:"High capacity hard drives",item:"see more"}

    ]
   },
   "TV & Home Entertainment":{
columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_smart.jpg",title:"Smart Tv Store ",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_buying_guide.jpg",title:"TV Buying Guide ",item:"learn more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_tv_hometheatre.jpg",title:"Home entertainment store",item:"see more"},
    ]
   },
   "Audio":{
columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Megamanu/megamenu_sony_473x623.jpg",title:"Premium Audio Store" ,item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Audio/Megamanu/megamenu_473x623.jpg",title:"Alexa Built-in Devices Store" ,item:"see more"},
        {src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_audio_speaker.jpg",title:"Wireless Audio Store" ,item:"see more"},

    ]
   },
   "Cameras":{
columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_cameras_dslr.jpg",title:"Digital SLRs" ,item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_cameras_access.jpg",title:"Camera accessories" ,item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_cameras_security.jpg",title:"Surveillance & Security" ,item:"see more"},
    ]
   },
  
    "Computer Peripherals":{columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_PCperipherals_gamezone.jpg",title:"GameZone",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_PCperipherals_routers.jpg",title:"Routers under Rs 999",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img19/Printers/V101208515_IN_PC_Printers_Mega_menu_graphics_473x623.jpg",title:"Bestselling Ink Tank printers",item:"see more"},
    ]},
  "Smart Technology":{columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_smarthome_beginners.jpg",title:"Alexa Smart Home",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/Revamp_Dec26th_18/smart_watches_472x674.jpg",title:"Top selling smartwatches",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Wearables/Revamp_Dec26th_18/activity_trackers_472x674.jpg",title:"Top 10 activity trackers",item:"see more"},
    ]},
  "Musical Instruments":{columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_MI_beginners.jpg",title:"Beginner's store",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_MI_soundrecording.jpg",title:"Sound and recording",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_MI_buyingguide.jpg",title:"Musical Instruments Buying guide",item:"see more"},
    ]},
  "Office & Stationery":{columns:{
"Mobiles": [
        { label: "Mobile accessories", url: "/mobiles/accessories" },
        { label: "Cases & Covers", url: "/mobiles/cases-covers" },
        { label: "Screen guards", url: "/mobiles/screen-guards" },
        { label: "Power Banks", url: "/mobiles/power-banks" },
        { label: "Headsets", url: "/mobiles/headsets" },
        { label: "Data Cables", url: "/mobiles/data-cables" },
      ],
    },
    images:[
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_office_Artcraft.jpg",title:"Art and Craft store",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_office_officesupplies.jpg",title:"Office supplies ",item:"see more"},
{src:"https://images-eu.ssl-images-amazon.com/images/G/31/img18/Electronics/Megamenu/CEPC_Megasubnav_office_stationery.jpg",title:"Everyday Stationery supplies",item:"see more"},
    ]}



   

}
const MegaMenuelectronics = () => {
    const [hoveredTab, setHoveredTab] = useState(null);
  return (
    <div className=" z-50">
      <div className="flex flex-wrap justify-between items-center text-sm py-3  border-b px-4 md:px-6 bg-white">
        <h1 className="text-xl md:text-lg font-semibold mb-2 md:mb-0">Electronics</h1>
        {electronicsTap.map((tab) => (
          <div
            key={tab}
            className="relative group cursor-pointer pb-1"
            onMouseEnter={() => setHoveredTab(tab)}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <p className={`${hoveredTab === tab ? "border-b-2 border-orange-500" : ""}`}>
              {tab}
            </p>
            {hoveredTab === tab && (
              <span className="absolute left-1/2 transform -translate-x-1/2 top-full">
                <IoIosArrowUp size={24} className="text-gray-300  bg-white" />
              </span>
            )}
          </div>
        ))}
      </div>

      {hoveredTab && megaMenuElectronicsData[hoveredTab] && (
        <div
          onMouseEnter={() => setHoveredTab(hoveredTab)}
          onMouseLeave={() => setHoveredTab(null)}
          className="absolute left-0 w-full bg-white shadow-lg border-t px-4 md:px-10 py-6"
        >
          <div className="grid grid-cols-6 gap-6">
            {(() => {
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
                      <ul className="text-gray-700 text-sm flex flex-col flex-wrap h-32">
                        {items.map((item, index) => {
                          const label = typeof item === 'string' ? item : item.label;
                          const url = typeof item === 'string' ? "#" : item.url;
                          return (
                            <li key={index} className="text-xs hover:underline">
                              <a href={url} className="block w-full hover:text-orange-500">
                                {label}
                              </a>
                            </li>
                          );
                        })}
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