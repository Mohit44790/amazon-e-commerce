import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { homeAndKitchen, homeBanner } from '../Data/AllTypesAcccessories';

const home = [
  "Amazon Home",
  "Kitchen & Home Appliances",
  "Large Appliances",
  "Kitchen & Dining",
  "Furniture",
  "Home Furnishing",
  "Home Decor",
  "Home Improvement",
  "Garden & Outdoor",
  "Storage & Organisation",
  "Lighting"
];

const HomeAndKitchen = () => {
  const scrollRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth / 2;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? homeBanner.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === homeBanner.length - 1 ? 0 : prevIndex + 1
    );
  };
  const bannerItem = homeBanner[currentIndex];
  const bannerLabel = bannerItem?.label || 'default';
  
  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-white shadow-sm">
        {/* Category Nav */}
        <nav className="flex px-4 py-2 flex-wrap gap-3 sm:justify-center border-b">
          {home.map((item, id) => (
            <Link
              to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
              key={id}
              className="text-sm hover:text-gray-600 transition duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Heading and Description */}
        <div className="p-4">
          <h1 className="text-orange-500 text-2xl sm:text-3xl font-semibold mb-2">
            Buy products across Home, Kitchen, Garden, Furniture, Sports and more now online at Amazon India
          </h1>
          <p className="text-sm text-gray-600">
            Browse through the wide range of Home and Kitchen products such as coolers, water bottles, mosquito nets, cycles, bedsheets, juicers, office chairs and much more online at Amazon.in
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="p-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-wrap lg:flex-col gap-4">
            <Section title="Shop by Room" items={["Living Room", "Bedroom", "Kitchen", "Garage", "Shop All"]} />
            <Section title="Featured Categories" items={[
              "Kitchen & Home appliances", "Kitchen & dining", "Home decor", "Home furnishing",
              "Furniture & mattresses", "Garden & outdoors", "Storage & Organisation", "Lighting"
            ]} />
            <Section title="Cookware & Dining" items={["Cookware", "Kitchen Storage", "Dinner Sets", "Glass ware"]} />
            <Section title="Home & Kitchen Appliances" items={["Juicer Mixer grinder", "Water Purifier", "Geysers", "Iron"]} />
            <Section title="Home" items={["Home decor", "Home furnishing", "Storage & Organisation", "Lighting"]} />
            <Section title="Furniture & Mattresses" items={["Office chairs & study desks", "Sofas & recliners", "Mattresses", "Beds"]} />
            <Section title="Home Improvement" items={["Power & Hand Tools", "Cleaning supplies", "Kitchen & Bath Fixtures", "Electrical"]} />
            <Section title="Lawn & Garden" items={["Organic Gardening", "Seeds", "Planters", "Indoor Plants"]} />
            <Section title="Large Appliances" items={["Air conditioners", "Refrigerators", "Washing Machines", "Microwave"]} />
          </div>

          {/* Right Column */}
          <div className="flex-1">
            {/* Horizontal Scrollable Categories */}
            <div className="relative w-full mt-8">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => scroll('left')}
              >
                <IoIosArrowBack size={30} />
              </button>

              <div className="overflow-x-auto scrollbar-hide flex gap-5 px-4" ref={scrollRef}>
              {homeAndKitchen.map((home, index) => {
  const label = home?.label || 'unknown';
  return (
    <Link
      to={`/category/${label.toLowerCase().replace(/\s+/g, '-')}`}
      key={index}
      className="text-center flex-shrink-0"
    >
      <img src={home.img} alt={label} className="w-32 h-32 mx-auto object-contain" />
      <p className="mt-2 text-sm">{label}</p>
    </Link>
  );
})}

              </div>

              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full"
                onClick={() => scroll('right')}
              >
                <IoIosArrowForward size={30} />
              </button>
            </div>

            {/* Banner Carousel */}
            <div className="relative w-full flex justify-center items-center mt-6">
            <Link to={`/category/${bannerLabel.toLowerCase().replace(/\s+/g, '-')}`}>
  <img
    src={bannerItem?.img}
    alt={`Banner ${currentIndex}`}
    className="rounded-md w-full sm:w-[80%] md:w-[100%] object-cover"
  />
</Link>


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

            {/* Bank Strip Images */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <img src="https://m.media-amazon.com/images/G/31/OHL/Bank/April/JandK-Bank-Strip-1500x120.png" alt="Bank1" className="w-full md:w-1/3" />
              <img src="https://m.media-amazon.com/images/G/31/OHL/Bank/April/Yes-Bank-Strip-1500x120.png" alt="Bank2" className="w-full md:w-1/3" />
              <img src="https://m.media-amazon.com/images/G/31/OHL/Bank/April/BOB-Bank-Strip-1500x120.png" alt="Bank3" className="w-full md:w-1/3" />
            </div>

            {/* Bottom Banner */}
            <div className="mt-4">
              <img
                src="https://m.media-amazon.com/images/G/31/OHL/Banner/PC1500-x-300._CB545548610_.png"
                alt="bottom banner"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Section = ({ title, items }) => (
  <div className="mb-4 w-full sm:w-1/2 lg:w-52 border-r pr-2">
    <h2 className="text-sm font-semibold mb-2 text-gray-800">{title}</h2>
    <div className="space-y-1 text-xs mx-2 text-gray-700">
      {items.map((item, index) => (
        <p key={index}>
          <Link
            to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
            className="hover:text-orange-500 transition-colors"
          >
            {item}
          </Link>
        </p>
      ))}
    </div>
  </div>
);

export default HomeAndKitchen;
