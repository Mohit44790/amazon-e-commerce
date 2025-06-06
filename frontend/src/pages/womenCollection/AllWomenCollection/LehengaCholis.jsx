import React, { useState, useEffect } from 'react';
import AmazonFashionNavbar from '../../MensCollection/AmazonFashionNavbar';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { womenLehengaCholis } from '../../../Data/FashionData';

const LehengaCholis = () => {
  const navigate = useNavigate();
  const itemsPerPage = 12;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');

  // Filter items
  const filteredItems = womenLehengaCholis.filter((item) => {
    const matchesBrand = selectedBrands.length ? selectedBrands.includes(item.brand) : true;
    const matchesColor = selectedColor ? item.colors?.toLowerCase().includes(selectedColor.toLowerCase()) : true;
    const matchesSize = selectedSize ? item.sizes?.includes(selectedSize) : true;
    const matchesPrice = selectedPrice
      ? (() => {
          const [min, max] = selectedPrice.split('-').map(Number);
          return item.price >= min && item.price <= max;
        })()
      : true;
    return matchesBrand && matchesColor && matchesSize && matchesPrice;
  });

  // Pagination based on filteredItems
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedLehengas = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <>
    <div className="w-full">
      <AmazonFashionNavbar />
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-56 p-4 border-r">
          <h1 className="text-sm font-semibold mb-2">Category</h1>
          <div className="space-y-2 text-sm">
            <Link to="/allAccessories" className="flex items-center text-gray-700 hover:text-black">
              <IoIosArrowBack />
              <span className="ml-1">Clothing & Accessories</span>
            </Link>
            <Link to="/clothing" className="flex items-center text-gray-700 hover:text-black">
              <IoIosArrowBack />
              <span className="ml-1">Women</span>
            </Link>
            <Link to="/women/ethnic-wear" className="flex items-center text-gray-700 hover:text-black">
              <IoIosArrowBack />
              <span className="ml-1">Ethnic Wear</span>
            </Link>
          </div>
          <h2 className="text-sm font-bold mt-4">Lehenga Cholis</h2>

          {/* Filters */}
          <div className="space-y-3 mt-4">
            {/* Brand Filter */}
            <div>
              <h2 className="font-semibold text-sm mb-1">Brand</h2>
              {[...new Set(womenLehengaCholis.map(i => i.brand))].map((brand, idx) => (
                <label key={idx} className="flex items-center text-sm space-x-2 mb-1">
                  <input
                    type="checkbox"
                    value={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={(e) => {
                      const isChecked = e.target.checked;
                      setSelectedBrands(prev =>
                        isChecked ? [...prev, brand] : prev.filter(b => b !== brand)
                      );
                      setCurrentPage(1); // Reset page on filter change
                    }}
                  />
                  <span>{brand}</span>
                </label>
              ))}
            </div>

            {/* Color Filter */}
            <div>
              <h2 className="font-semibold text-sm mb-1">Color</h2>
              <div className="flex flex-wrap gap-2">
                {[...new Set(womenLehengaCholis.flatMap(i => i.colors?.split(',').map(c => c.trim()) || []))].map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedColor(color === selectedColor ? '' : color);
                      setCurrentPage(1);
                    }}
                    className={`w-6 h-6 rounded-full border border-gray-400 transition ${
                      selectedColor === color ? 'ring-2 ring-black scale-110' : ''
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Filter */}
            <div>
              <h2 className="font-semibold text-sm mb-1">Size</h2>
              <div className="flex flex-wrap gap-2">
                {[...new Set(womenLehengaCholis.flatMap(i => i.sizes || []))].map((size, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedSize(size === selectedSize ? '' : size);
                      setCurrentPage(1);
                    }}
                    className={`border px-2 py-1 text-xs rounded ${
                      selectedSize === size ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div>
              <h2 className="font-semibold text-sm mb-1">Price</h2>
              {[
                { label: 'Under ₹999', value: '0-999' },
                { label: '₹1000 - ₹1999', value: '1000-1999' },
                { label: '₹2000 - ₹2999', value: '2000-2999' },
                { label: '₹3000 & Above', value: '3000-99999' }
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => {
                    setSelectedPrice(value === selectedPrice ? '' : value);
                    setCurrentPage(1);
                  }}
                  className={`block w-full text-left text-sm px-2 py-1 rounded border ${
                    selectedPrice === value ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                className="mt-4 text-sm text-red-500 underline"
                onClick={() => {
                  setSelectedBrands([]);
                  setSelectedColor('');
                  setSelectedSize('');
                  setSelectedPrice('');
                  setCurrentPage(1);
                }}
              >
                Reset Filters
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 overflow-x-hidden">
          {/* Banner */}
          <section className="mx-4 mt-4">
            <img
              src="https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/mob2._CB568761755_.png"
              alt="Main Banner"
              className="w-full object-cover rounded-md"
            />
          </section>

          {/* Brand Focus */}
          <section className="mx-4 mt-6">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Brand_in_focus_PC._CB553737515_.jpg"
              alt="Brand In Focus"
              className="w-full"
            />

            <div className="flex overflow-x-auto gap-4 py-4 scrollbar-hide bg-orange-100 px-2 rounded-md">
              {['libas', 'janasya', 'biba', 'aurelia', 'w', 'anubutee'].map((brand, idx) => (
                <img
                  key={idx}
                  src={`https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/${brand}_400x200._CB568761547_.png`}
                  alt={brand}
                  className="w-44 flex-shrink-0 rounded-md hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </section>

          {/* Top Styles */}
          <section className="mx-4 mt-6">
            <img
              src="https://m.media-amazon.com/images/G/31/img21/MA2023/HOTW/HEADERS2024/Top_styles_pc._CB553737515_.jpg"
              alt="Top Styles"
              className="w-full"
            />
            <div className="flex overflow-x-auto gap-4 mt-4 scrollbar-hide">
              {['cere-le', 'net', 'casual', 'silk'].map((style, idx) => (
                <img
                  key={idx}
                  src={`https://m.media-amazon.com/images/G/31/img23/WA/2024/july/HOTW/${style}_981x1220.png`}
                  alt={style}
                  className="w-64 flex-shrink-0 rounded-md hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </section>

         {/* Product Grid */}
          <section className="mx-4 mt-6">
            <h2 className="text-lg font-semibold border py-4 px-6 rounded-lg bg-white mb-4">
              Showing {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, filteredItems.length)} of {filteredItems.length} results for Lehenga Cholis
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {paginatedLehengas.map((lehenga, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/offline-product/${lehenga.id}`)}
                  className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-gradient-to-tr from-slate-400 via-white  to-slate-300 flex justify-center">
                    <img
                      src={lehenga.image}
                      alt={lehenga.brand}
                      className="w-48 h-56 object-contain mix-blend-darken"
                    />
                  </div>
                  <div className="p-2">
                    <p className="font-medium text-sm">{lehenga.brand}</p>
                    <p className="text-sm text-gray-600">{lehenga.description.slice(0, 60)}...</p>
                    <div className="flex items-center space-x-2 ">
                      <p className="text-lg font-bold text-black">₹{lehenga.price}</p>
                      <p className="line-through text-gray-500 text-sm">₹{lehenga.MRP}</p>
                      <p className="text-green-600 text-sm">{lehenga.discount}% Off</p>
                    </div>
                    {lehenga.colors && (
                      <div className="mt-1">
                        <p className="text-sm text-gray-700 font-semibold">Color:</p>
                        <div className="flex gap-2 mt-1">
                          {lehenga.colors.split(',').map((color, i) => (
                            <div
                              key={i}
                              className="w-5 h-5 rounded-full border border-gray-300"
                              style={{ backgroundColor: color.trim().toLowerCase() }}
                              title={color}
                            ></div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-sm text-gray-700">Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </section>
        </main>
      </div>
       
    </div>
    <div className=" mx-8 px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 ">Lehenga Cholis: A Timeless Tradition of Elegance</h1>
      <p className="mb-6">
        Lehenga Cholis are a traditional Indian outfit that blend beauty and elegance in a truly timeless fashion.
        Whether attending a wedding, festive celebration, or a special occasion, a well-designed lehenga choli adds
        a regal touch to your appearance. With their exquisite craftsmanship and modern appeal, they offer a seamless
        fusion of traditional style and contemporary trends. From intricate embroidery to luxurious fabrics and vibrant
        colors, lehenga cholis are the go-to choice for women who want to make a bold, graceful fashion statement.
      </p>

      <h2 className="text-2xl font-semibold mb-4">Why Choose Lehenga Cholis?</h2>
      <p className="mb-4">
        Lehenga cholis have been a staple of Indian fashion for generations, known for their versatility, comfort,
        and cultural richness. Here's why they remain a popular choice:
      </p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Versatile Style:</strong> Perfect for weddings, festivals, and formal celebrations.</li>
        <li><strong>Comfort and Fit:</strong> The combination of a fitted blouse and flowing skirt ensures elegance and ease.</li>
        <li><strong>Timeless Appeal:</strong> Intricate embroidery and embellishments give them a royal feel.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Popular Styles of Lehenga Cholis</h2>
      <p className="mb-4">There is a wide variety of lehenga choli styles suited for every taste and occasion:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Traditional Lehenga Cholis:</strong> Richly embroidered, ideal for weddings and formal events.</li>
        <li><strong>Floral Print Lehenga Cholis:</strong> Light and breezy, perfect for spring and summer events.</li>
        <li><strong>Contemporary Lehenga Cholis:</strong> Sleek designs in velvet, satin, or silk for upscale gatherings.</li>
        <li><strong>Dazzling Lehenga Cholis:</strong> Embellished with sequins and mirrors for festive occasions.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">How to Choose the Right Lehenga Choli</h2>
      <p className="mb-4">Consider the following when choosing a lehenga choli:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li><strong>Know Your Body Type:</strong> Petite women benefit from lighter fabrics; high-waisted skirts flatter fuller figures.</li>
        <li><strong>Consider the Occasion:</strong> Floral lehengas for day events, dazzling ones for evening celebrations.</li>
        <li><strong>Fabrics Matter:</strong> Cotton and georgette for summer; silk and velvet for winter.</li>
        <li><strong>Workmanship:</strong> Choose intricate designs, fine embroidery, and quality embellishments.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">Styling Tips for Lehenga Cholis</h2>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>Pair with a matching or contrasting dupatta to complete the look.</li>
        <li>Accessorize with statement jewelry like large earrings and chunky necklaces.</li>
        <li>Choose pastel floral prints for a soft look or bold contrasts for impact.</li>
        <li>Use traditional accessories like bangles, a maang tikka, and juttis for an ethnic touch.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4">FAQs on Lehenga Cholis</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-bold">What are the essential elements of a lehenga choli?</h3>
          <p>The lehenga choli includes the fitted choli (blouse), the flared skirt (lehenga), and a dupatta.</p>
        </div>

        <div>
          <h3 className="font-bold">Can I wear a lehenga choli for events other than weddings?</h3>
          <p>Yes, lehenga cholis are great for festivals, family events, and formal occasions.</p>
        </div>

        <div>
          <h3 className="font-bold">How can I style my lehenga choli for a modern look?</h3>
          <p>Use contemporary jewelry, experiment with blouse designs, and go for sleek hairstyles.</p>
        </div>

        <div>
          <h3 className="font-bold">What type of lehenga choli is best for a summer wedding?</h3>
          <p>Floral print lehenga cholis in breathable fabrics are perfect for summer and outdoor weddings.</p>
        </div>

        <div>
          <h3 className="font-bold">Are dazzling lehengas suitable for all body types?</h3>
          <p>Yes. High-waisted skirts flatter fuller bodies, while light styles suit petite frames.</p>
        </div>
      </div>
    </div>
     </>
  );
};

export default LehengaCholis;
