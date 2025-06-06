import React, { useEffect, useState } from "react";
import AmazonFashionNavbar from './AmazonFashionNavbar';
import { Link } from 'react-router-dom'; // Correct import
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProducts } from "../../redux/slice/productSlice";
import { debounce } from "lodash";

const TShirtsPolos = () => {
  const dispatch = useDispatch();
  const { items: products, loading, error } = useSelector((state) => state.products);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [filters, setFilters] = useState({
    main: "",
    parent: "men-fashion",
    category: "t-shirts,T-shirt",
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

  return (
    <div>
      <AmazonFashionNavbar />
      <div className='flex'>
        {/* Left Sidebar */}
        <div className='w-72 mx-4 text-sm'>
          <h1 className='font-bold text-sm'>Category</h1>
          <Link to="/allAccessories" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Clothing & Accessories</span>
          </Link>
          <Link to="/men" className="flex items-center text-sm mb-2">
            <IoIosArrowBack />
            <span className="ml-1">Men</span>
          </Link>

          <div>
            <h1 className='font-bold'>T-shirts, Polos & Shirts</h1>
            <Link to="/t-shirts"><p>T-Shirts</p></Link>
            <Link to="/shirts"><p>Shirts</p></Link>
            <Link to="/polos"><p>Polos</p></Link>
            <Link to="/tank-top"><p>Tank Tops</p></Link>
          </div>

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
          </div>

          <div className="mb-4">
            <h1 className="font-bold text-sm mb-1">Sizes</h1>
            <div className="grid grid-cols-4 gap-2 text-xs">
              {['5XS', '2XS', 'XS', 'S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL', '8XL', '9XL', 'Free'].map((size) => (
                <button
                  key={size}
                  name="sizes"
                  value={size}
                  onClick={handleChange}
                  className="border border-black text-xs rounded-lg text-center py-1"
                >
                  {size}
                </button>
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

        {/* Right Side Content */}
        <div className='w-full bg-gray-100'>
          <h1 className='font-bold text-xl mx-4 py-4'>T-shirts, Polos and Shirts</h1>

          <div className='mx-4'>
            <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Brand_in_focus_PC._CB553737515_.jpg" alt="men" />
          </div>

          <div className='flex gap-2 py-6 bg-[#f86c2b] px-4 mx-4 mt-4'>
            {[
              { link: "/alloyshirt", img: "Allen_solly_400x200" },
              { link: "/us", img: "USPA_400x200" },
              { link: "/levis", img: "levis_400x200" },
              { link: "/van", img: "Van_heusen_400x200" },
              { link: "/lee", img: "lee_400x200" },
              { link: "/wrangler", img: "wrangler_400x200" },
            ].map(({ link, img }, i) => (
              <Link key={i} to={link}>
                <img src={`https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/Brands/${img}._CB570335437_.png`} alt={img} />
              </Link>
            ))}
          </div>

          <div className='mx-4 mt-4'>
            <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Top_styles_pc._CB553737515_.jpg" alt="Topbrand" />
          </div>

          <div className='flex gap-2 py-6 bg-gray-800 px-4 mx-4 mt-4'>
            {[
              { to: "/Solidtees", src: "Solid_tees" },
              { to: "/stripedtees", src: "striped_tees_copy_1" },
              { to: "/oversizedtees", src: "oversized_tees" },
              { to: "/printedtees", src: "printed_tees" },
              { to: "/solidpolos", src: "solid_polos" },
              { to: "/Solid_shirts", src: "Solid_shirts" }
            ].map(({ to, src }, i) => (
              <Link key={i} to={to}>
                <img src={`https://m.media-amazon.com/images/G/31/img21/MA2024/HOTW/Top_Styles/${src}_981x1220._SX564_QL85_FMpng_.png`} alt={src} />
              </Link>
            ))}
          </div>

          <div className='mx-4 mt-4'>
            <img src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/best_deals_pc._CB553737515_.jpg" alt="sale" />
          </div>

          {/* Product Display */}
          <div className="grid grid-cols-4 gap-4 p-4">
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p>{error}</p>
            ) : (
              filteredProducts.map((product) => (
            <Link to={`/product/${product._id}`}>   <div key={product._id} className="border p-2 bg-white rounded">
                  <img src={product?.images[0]} alt={product.title} className="h-56 w-full object-contain" />
                  <h2 className="text-sm font-semibold mt-2">{product.title}</h2>
                  <p className="text-xs text-gray-500">{product?.brand?.name}</p>
                  <p className="text-sm font-bold">₹{product.price}</p>
                  <p className="text-sm ">{product.description?.substring(0,35)}...</p>
                  <div className="flex items-center gap-1 mt-1">

                    {/* //color showing  */}
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

                 
                </div></Link> 
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TShirtsPolos;
