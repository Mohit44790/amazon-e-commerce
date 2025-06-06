import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router';
import AmazonFasionNavbar from '../MensCollection/AmazonFashionNavbar';
import { BestDresses, CELEBAPPROVED, ETHNICWEAR, INDIEBRAND, Mostcovered, MostLovedStyles, TredingTops, westerwear, womenFashion } from '../../Data/AllTypesAcccessories';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from "lodash";
import { getFilteredProducts } from '../../redux/slice/productSlice';
const WomenClothes = () => {
  // const scrollRef = useRef();
  const dispatch = useDispatch();
const navigate = useNavigate()
  const fashionRef = useRef();
const celebRef = useRef();
const trendingRef = useRef();
const dressesRef = useRef();
 const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  //offline category filter
  // const [category, setCategory] = useState('All');

  // const filteredItems =
  //   category === 'All'
  //     ? MostLovedStyles
  //     : MostLovedStyles.filter(item => item.category === category);

  // const categories = [ "kurta&Set", "tops&tees", "Saree", "Dresses", "activewears"];

  const [category, setCategory] = useState('All');
  const [color, setColor] = useState('All');

  const categories = ["All", "kurta&Set", "tops&tees", "Saree", "Dresses", "activewears"];
  const allColors = Array.from(
    new Set(
      MostLovedStyles.flatMap(item => item.colors.split(',').map(c => c.trim()))
    )
  );
  const colors = ["All", ...allColors];

  const filteredItems = MostLovedStyles.filter(item => {
    const matchCategory = category === 'All' || item.category === category;
    const matchColor = color === 'All' || item.colors.includes(color);
    return matchCategory && matchColor;
  });

//online filter
  const [filters, setFilters] = useState({
    main: "",
    parent: "",
    category: "women-fashion,women-clothes",
    brand: "",
    minPrice: "",
    maxPrice: "",
    colors: "",
    sizes: "",
  });

    const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value.trim() }); // Trim the value
  };
  
    const debouncedDispatch = debounce(() => {
      dispatch(getFilteredProducts(filters));
    }, 500);
  
    useEffect(() => {
      debouncedDispatch();
      return () => debouncedDispatch.cancel();
    }, [filters]);
  
    const brands = ['All', ...new Set(products.map((product) => product.brand?.name).filter(Boolean))];
  
    const filteredProducts = products.filter((product) => {
      if (selectedBrand && selectedBrand !== 'All' && product.brand?.name !== selectedBrand) return false;
      return true;
    });

  // single scroll function

  // const scroll = (direction) => {
  //   if (scrollRef.current) {
  //     const scrollAmount = scrollRef.current.offsetWidth / 2;
  //     scrollRef.current.scrollBy({
  //       left: direction === 'left' ? -scrollAmount : scrollAmount,
  //       behavior: 'smooth',
  //     });
  //   }
  // };

  //multiple scroll function
  const handleScroll = (ref, direction) => {
  if (ref.current) {
    const scrollAmount = ref.current.offsetWidth / 2;
    ref.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }
};

  return (
    <div className=''>
      <AmazonFasionNavbar />

      <div className="flex  flex-col  lg:flex-row">
        {/* Left Sidebar */}
        <div className=" border-r w-72 px-4 py-2">
          <p className="text-sm font-semibold mb-1">Category</p>
          <Link to="/allAccessories" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Clothing & Accessories</span>
          </Link>

          <p className="text-sm font-semibold mb-2">Women</p>
<ul className="text-sm space-y-1 mb-4">
  {[
    'Ethnic Wear', 'Western Wear', 'Sportswear', 'Lingerie',
    'Sleep & Lounge Wear', 'Accessories', 'Swim & Beachwear',
    'Maternity', 'Sunglasses & Spectacle Frames', 'Lingerie & Nightwear', 'Overalls'
  ].map((item, i) => {
    const route = `/women/${item.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`;
    return (
      <li key={i}>
        <Link to={route} className="hover:text-red-600">{item}</Link>
      </li>
    );
  })}
</ul>


          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Amazon Prime</h1>
            <label><input type="checkbox" className="mr-2" />Prime</label>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Delivery Day</h1>
            <label><input type="checkbox" className="mr-2" />Get It by Tomorrow</label>
          </div>

           <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Brands</h1>
            {/* <input type="text" name="brand" onChange={handleChange} className="border p-1 w-full text-xs" placeholder="Search brand" /> */}
            <div className="mt-2 space-y-1">
              {brands.map((brand, index) => (
                <label key={index} className="flex items-center text-xs">
                  <input
                    type="checkbox"
                    name="brands"
                    value={brand}
                    checked={selectedBrand === brand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="mr-2"
                  />
                  {brand}
                </label>
              ))}
            </div>
          </div>

          <div className="mb-4">
           
            <h1 className="font-bold text-sm mb-1">Price</h1>
            <div className="flex gap-2">
              <input type="number" name="minPrice" placeholder="Min" onChange={handleChange} className="border p-1 w-1/2 text-xs" />
              <input type="number" name="maxPrice" placeholder="Max" onChange={handleChange} className="border p-1 w-1/2 text-xs" />
            </div>
          
            <ul className="text-sm space-y-1">
              {['Under ₹300', '₹300 - ₹500', '₹500 - ₹1,000', '₹1,000 - ₹1,500', 'Over ₹1,500'].map((price, i) => (
                <Link to="#" key={i}><li>{price}</li></Link>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Customer Reviews</h1>
            <p><span className='text-yellow-500 text-2xl'>★★★★☆</span> & up</p>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Deals & Discounts</h1>
            <Link to="#"><p>All Discounts</p></Link>
            <Link to="#"><p>Today's Deals</p></Link>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Amazon Fashion</h1>
            {['Top Brands', 'Made for Amazon', 'Premium Brands'].map((label, i) => (
              <p key={i}><input type="checkbox" className="mr-2" />{label}</p>
            ))}
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Women's Clothing Size</h1>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['5XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', 'Free'].map((size, i) => (
                <Link key={i}><p className="border rounded-lg text-center py-1">{size}</p></Link>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Color</h1>
            <div className="grid grid-cols-4  text-xs">
  {[
    'red',
    'blue',
    'green',
    'lime',
    'magenta',
    'white',
    'gray',
    'yellow',
    'pink',
    'orange',
    'silver',
    'purple',
    'brown',
    'black',
  ].map((color) => (
    <button
      key={color}
      name="colors"
      value={color}
      onClick={handleChange}
      className={`border  text-center py-1 text-white ${
        color === 'white' || color === 'silver' ? 'text-black' : ''
      }`}
      style={{ backgroundColor: color }}
    >
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  ))}
</div>

          </div>
          
        </div>
{/* Right scrollable content */}
<div className='bg-gray-200 w-full'>

  {/* women fashion banner  */}
<div className="relative bg-white mx-4  mt-4 ">
          <button
            className="absolute left-0 top-20 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(fashionRef,'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={fashionRef}>
            {womenFashion.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
              <Link to={cat.path}> <img src={cat.img} alt={cat.label} className="w-28 h-28 sm:w-32 sm:h-32 mx-auto object-contain" /></Link> 
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-20 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('right')}
            onClick={() => handleScroll(fashionRef,'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>

        {/* poster  */}
        <div className='mx-4 mt-2'>

        <img src="https://m.media-amazon.com/images/G/31/img2020/fashion/WomensApparel2024/AmazonKarigar_1500x460._CB796150745_.jpg" alt="womenposter" />
        </div>

{/* WESTERN WEAR MUST-HAVES */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>WESTERN WEAR MUST-HAVES</h1>
  <div className='flex gap-2 mx-4 '>
  {westerwear.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
{/* ETHNIC WEAR MUST-HAVES */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>ETHNIC WEAR MUST-HAVES</h1>
  <div className='flex gap-2 mx-4 '>
  {ETHNICWEAR.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
{/* Most-Coveted Brands */}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>Most-Coveted Brands</h1>
  <div className='flex gap-2 mx-4 '>
  {Mostcovered.map((wear,index)=>(
            <div key={index}>
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>
          
        </div>
        {/* CELEB-APPROVED BRANDS ✅ */}
        <div className="relative bg-white mx-4  mt-4 ">
          <h1 className='mx-4 font-bold py-1'>CELEB-APPROVED BRANDS ✅</h1>
          <button
            className="absolute left-0 top-36 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('left')}
            onClick={() => handleScroll(celebRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={celebRef}>
            {CELEBAPPROVED.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-80 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-36 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('right')}
            onClick={() => handleScroll(celebRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
        {/* INDIE-BRAND FAVES 🙏*/}
<div className='bg-white  mx-4 mt-2'>

  <h1 className='text-xl font-bold py-2 px-4'>INDIE-BRAND FAVES 🙏 ✅</h1>
  <div className='grid grid-cols-6 gap-10 mx-8  '>
  {INDIEBRAND.map((wear,index)=>(
            <div key={index} >
              <img src={wear.image} alt={wear.name} />
            
            </div>
          ))}
  </div>

   {/* #TRENDING TOPS & TEES 👚 */}
<div className="relative bg-yellow-400 mx-4  mt-4 ">
  <h1>#TRENDING TOPS & TEES 👚</h1>
          <button
            className="absolute left-0 top-24 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            // onClick={() => scroll('left')}
            onClick={() => handleScroll(trendingRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar flex gap-4 py-4" ref={trendingRef}>
            {TredingTops.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-32 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-24 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(trendingRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
   {/* BEST OF DRESSES & JUMPSUITS 👗 */}
<div className="relative bg-pink-200 mx-4   mt-4 ">
  <h1>BEST OF DRESSES & JUMPSUITS 👗</h1>
          <button
            className="absolute left-0 top-28 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(dressesRef, 'left')}
          >
            <IoIosArrowBack size={20} className="md:size-6" />
          </button>

          <div className="overflow-x-auto  no-scrollbar  flex gap-4 py-10" ref={dressesRef}>
            {BestDresses.map((cat, index) => (
              <div key={index} className="text-center flex-shrink-0">
                <img src={cat.image} alt={cat.label} className=" w-32 mx-auto object-contain" />
                <p className="mt-2 text-sm">{cat.label}</p>
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 top-28 -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-1 md:p-2 rounded-full"
            onClick={() => handleScroll(dressesRef, 'right')}
          >
            <IoIosArrowForward size={20} className="md:size-6" />
          </button>
        </div>
          
        </div>

        {/* MOst-Loved style  */}
       
        <div className='bg-white'>
      <h1 className='text-2xl font-bold py-2 mx-6'>Most-Loved Styles</h1>
        {/* Color Filter */}
      <div className='space-x-2 px-6 mb-4'>
        Color Select
        {colors.map((col) => (
          <button
            key={col}
            onClick={() => setColor(col)}
            
            className={`px-3 py-1 border rounded ${
              color === col ? 'bg-red-500 text-white' : 'bg-gray-100'
            }`}
          >
            {col}
          </button>
        ))}
      </div>

      <div className='space-x-2 px-6 mb-4'>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-3 py-1 border rounded ${
              category === cat ? 'bg-red-400 text-white' : 'bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
          <div>
            <div className='grid grid-cols-2'>
              {filteredItems.map((items)=>(
               <div key={items.id} onClick={() => navigate(`/offline-product/${items.id}`)} className="border shadow-sm overflow-hidden">
                  <div className='bg-gradient-to-tr to-gray-300 via-white   from-gray-400 flex items-center justify-center'>
                    <img src={items.image}  alt={items.name} className='mix-blend-darken cursor-pointer h-48' />
                  </div>
                  <div className="p-2">
              <p className="font-medium text-sm mb-1">{items.brand}</p>
              <p className="text-sm">{items.description.slice(0,70)}...</p>
              <div className="flex items-center space-x-2 mb-1">
                <p className="text-lg font-semibold text-black">₹{items.price}</p>
                <p className="line-through text-gray-500 text-sm">₹{items.MRP}</p>
                <p className="text-green-600 text-sm">{items.discount}% Off</p>
                 
                    
              </div>
              {/* Rating */}
  <div className="flex items-center space-x-1 mb-1">
    {Array.from({ length: 5 }).map((_, i) => {
      const fullStar = i + 1 <= Math.floor(items.rating);
      const halfStar = i + 1 > Math.floor(items.rating) && i < items.rating;
      return <span key={i} className='text-yellow-500 text-2xl'>{fullStar ? '★' : halfStar ? '☆' : '⯨'}</span>;
    })}
    <span className="text-sm text-gray-500 ml-1">({items.rating.toFixed(1)})</span>
  </div>
              <p className="text-sm text-gray-700 mb-1">Select Color:</p>
              <div className="flex flex-wrap gap-1">
        {items.colors.split(',').map((color, index) => (
          <div
            key={index}
            title={color.trim()}
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: color.trim().toLowerCase() }}
          ></div>
        ))}
      </div>
                 </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>
        
        {/* Product Display */}
                {/* Product Display */}
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
  {loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    filteredProducts.map((product) => (
      <Link to={`/product/${product._id}`} key={product._id}>
        <div className="border p-2 bg-white  rounded hover:shadow-md transition duration-200">
          
          <div className='bg-gradient-to-tr to-gray-300 via-white   from-gray-400 flex items-center justify-center'>
                    <img src={product?.images[0]} alt={product.title} className='mix-blend-darken h-48' />
                  </div>
          <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
          <p className="text-xs text-gray-500">{product?.brand?.name}</p>
          <p className="text-sm font-bold text-red-600">₹{product.price}</p>
          <p className="text-sm">{product.description?.substring(0, 32)}...</p>
         <div className="flex items-center gap-1 mt-1">
          {/* color  */}
  {Array.isArray(product.colors)
    ? product.colors.map((color, idx) => (
        <div
          key={idx}
          title={color}
          className="w-4 h-4 rounded-full border"
          style={{
            backgroundColor: color,
            borderColor: color === 'white' || color === '#ffffff' ? '#ccc' : color,
          }}
        ></div>
      ))
    : typeof product.colors === "string"
    ? product.colors.split(",").map((color, idx) => (
        <div
          key={idx}
          title={color.trim()}
          className="w-4 h-4 rounded-full border"
          style={{
            backgroundColor: color.trim(),
            borderColor: color.trim() === 'white' ? '#ccc' : color.trim(),
          }}
        ></div>
      ))
    : null}
</div>

        </div>
      </Link>
    ))
  )}
</div>

        

        </div>
      </div>
       
       
    </div>
  );
};

export default WomenClothes;
