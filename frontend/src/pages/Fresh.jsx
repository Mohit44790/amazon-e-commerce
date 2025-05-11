import React, { use, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { beauty, grocery, suparSaver } from "../Data/freshProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchGroceries } from "../redux/slice/grocerySlice";

const categories = [
  "Fresh",
  "Past Purchases",
  "Alexa lists",
  "Deals",
  "Fruits & vegetables",
  "Atta, rice and grains",
  "Oil and ghee",
  "Milk and dairy",
  "Snacks & biscuits",
  "Eggs, meat & fish",
  "Bath & body",
  "Laundry detergents",
  "Baby Care",
];

const Fresh = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const scrollRef = useRef();
  const {groceries} = useSelector((state) => state.grocery);


  const handleScroll = (direction) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  
 
  useEffect(() => {
    if (groceries) {
      dispatch(fetchGroceries());
    }
    // Handle side effects here
  }, [groceries, dispatch]);



  return (
    <>
      <div className="border-t-8 border-green-500">
        <nav className="flex flex-wrap py-2  justify-between mx-4 gap-2 text-sm border-b">
          {categories.map((cat, i) => (
            <button key={i} className="text-gray-900  py-1 rounded hover:text-green-200">
              {cat}
            </button>
          ))}
        </nav>
      </div>

      <div className="mx-4 mt-2 space-y-2">
        <img src="https://m.media-amazon.com/images/G/31/img24/Fresh/April/Pc_6.jpg" alt="fresh" className="w-full" />
        <img src="https://m.media-amazon.com/images/G/31/img24/Fresh/March/Stripes_PC_Flat300_sign-in_1.jpg" alt="stripe" className="w-full" />
      </div>

      <div className="bg-[#eef7cd] mx-4 mt-6 p-4 rounded-lg shadow">
        <img src="https://m.media-amazon.com/images/G/31/img18/Fresh/Mar25/Deal_zone_PC.jpg" alt="Deal Zone" className="w-full mb-2" />
        {/* Supersaver */}
           <div className="bg-white rounded-lg py-2 mx-2">
        <div className="flex justify-between items-center mx-4 border-b pb-2 mb-4">
          <h1 className="text-2xl font-semibold">Supersaver</h1>
          <p className="text-sm text-blue-600 cursor-pointer hover:underline">See all</p>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            ←
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {suparSaver.map((item, id) => (
              <div
                key={id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-48 min-w-[200px] cursor-pointer bg-white rounded shadow hover:shadow-lg transition-all p-2 scroll-snap-align-start"
              >
                <img src={item.image[0]} alt={item.name} className="w-full h-40 object-contain mb-2" />
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-green-600 font-semibold">{item.discount} OFF</span>
                  <span>⭐ {item.ratting}</span>
                </div>
                <p className="text-lg font-bold text-black mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            →
          </button>
        </div>
        </div>
        {/* Deals on top brands */}
           <div className="bg-white rounded-lg py-2 mt-4 mx-2">
        <div className="flex justify-between items-center mx-4 border-b pb-2 mb-4">
          <h1 className="text-2xl font-semibold">Deals on top brands</h1>
          <p className="text-sm text-blue-600 cursor-pointer hover:underline">See all</p>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            ←
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {suparSaver.map((item, id) => (
              <div
                key={id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-48 min-w-[200px] cursor-pointer bg-white rounded shadow hover:shadow-lg transition-all p-2 scroll-snap-align-start"
              >
                <img src={item.image[0]} alt={item.name} className="w-full h-40 object-contain mb-2" />
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-green-600 font-semibold">{item.discount} OFF</span>
                  <span>⭐ {item.ratting}</span>
                </div>
                <p className="text-lg font-bold text-black mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            →
          </button>
        </div>
        </div>

        {/* Combo packs */}
           <div className="bg-white rounded-lg py-2 mt-4 mx-2">
        <div className="flex justify-between items-center mx-4 border-b pb-2 mb-4">
          <h1 className="text-2xl font-semibold">Combo packs</h1>
          <p className="text-sm text-blue-600 cursor-pointer hover:underline">See all</p>
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            ←
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {suparSaver.map((item, id) => (
              <div
                key={id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-48 min-w-[200px] cursor-pointer bg-white rounded shadow hover:shadow-lg transition-all p-2 scroll-snap-align-start"
              >
                <img src={item.image[0]} alt={item.name} className="w-full h-40 object-contain mb-2" />
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-green-600 font-semibold">{item.discount} OFF</span>
                  <span>⭐ {item.ratting}</span>
                </div>
                <p className="text-lg font-bold text-black mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            →
          </button>
        </div>
        </div>
      </div>

      <div className="mx-4">
  <img
    src="https://m.media-amazon.com/images/G/31/img18/Fresh/SBCTILES/UPDATED/Groceries__food_pc.jpg"
    alt="Groceries Banner"
    className="w-full h-auto object-cover mb-4"
  />
  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
    {grocery.map((item, id) => (
      <div key={id} className="w-full mx-2">
        <img
          src={item.image}
          alt={`grocery-${id}`}
          className="w-full h-auto object-contain rounded  hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
  {/* beauty */}
  <div className="mx-4">
    <img src="https://m.media-amazon.com/images/G/31/img18/Fresh/SBCTILES/UPDATED/Beauty__personal_care_pc.jpg" alt="beauty"
    className="w-full h-auto object-cover mb-4"
    />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {beauty.map((item,id)=>(
        <div key={id} className="w-full">
          <img src={item.image} alt={`beauty-${id}`}
          className="w-full h-auto object-contain rounded  hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}

     </div>
  </div>
</div>
{/* season special  */}
 
<div>
<div className="bg-blue-200 rounded-lg py-2 mt-4 mx-2">
        <div className="flex justify-between items-center mx-1 border-b pb-2 mb-4">
          <img src="https://m.media-amazon.com/images/G/31/img18/Fresh/Feb25/Seasons_special_PC_copy.jpg" alt="season" />
         
        </div>

        <div className="relative">
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            ←
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-4 scrollbar-hide px-8"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {suparSaver.map((item, id) => (
              <div
                key={id}
                onClick={() => navigate(`/product/${item.id}`)}
                className="w-48 min-w-[200px] cursor-pointer bg-white rounded shadow hover:shadow-lg transition-all p-2 scroll-snap-align-start"
              >
                <img src={item.image[0]} alt={item.name} className="w-full h-40 object-contain mb-2" />
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-green-600 font-semibold">{item.discount} OFF</span>
                  <span>⭐ {item.ratting}</span>
                </div>
                <p className="text-lg font-bold text-black mt-1">₹{item.price}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-0 z-10 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 rounded-full p-2"
          >
            →
          </button>
        </div>
        </div>
</div>


{/* last  */}
<div>
  <img src="https://m.media-amazon.com/images/G/31/img18/Fresh/Oct20/UNREC/1500x150_strip.jpg" alt="delivery" />
</div>
<div className="flex flex-wrap gap-4 mx-4 mt-4">
  {groceries.map((item, id) => (
    <div key={id} onClick={() => navigate(`/grocery/${item._id}`)} className="">
      <img src={item.images} alt={item.name} className="w-28" />
      <p className="font-medium">{item.name}</p>
      <p className="text-sm text-gray-600">{item.description}</p> 
      <div className="flex justify-between text-sm mt-1">
        <span className="text-green-600 font-semibold">{item.discount} OFF</span>
        <span>⭐ {item.rating}</span>
      </div>
      <p className="text-lg font-bold text-black mt-1">₹{item.price}</p>
  </div>
))}
</div>

    </>
  );
};

export default Fresh;


