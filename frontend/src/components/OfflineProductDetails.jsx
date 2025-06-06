import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { suparSaver } from '../Data/freshProducts';
import { MostLovedStyles, overallsFashion } from '../Data/AllTypesAcccessories';
import { womenKurtasKurtis, womenLehengaCholis, womenSuitSalwar } from '../Data/FashionData';

const OfflineProductDetails = () => {
  const { id } = useParams();

  const allProducts = [...suparSaver, ...overallsFashion,...MostLovedStyles,...womenKurtasKurtis,...womenSuitSalwar,...womenLehengaCholis];
  const product = allProducts.find((item) => item.id.toString() === id);

  const [selectedImage, setSelectedImage] = useState(product?.image);

  if (!product) return <p className="text-center mt-8">Product not found</p>;

  const handleAddToCart = (product) => {
    // Add to cart logic
    console.log("Added to cart:", product);
  };

  return (
    <div className="w-full mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2">
            {product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                className={`w-16 h-16 object-contain border p-1 cursor-pointer ${
                  selectedImage === img ? 'ring-2 ring-yellow-500' : ''
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
             {/* <img
               
                src={product.image}
                alt={product.name}
                className={`w-16 h-16 object-contain border p-1 cursor-pointer ${
                  selectedImage === product.image ? 'ring-2 ring-gray-200' : ''
                }`}
                onClick={() => setSelectedImage(product.image)}
              /> */}
          </div>
          <img
            src={selectedImage}
            alt={product.name}
            className="w-full md:w-[400px] h-96 object-contain border"
          />
        </div>

        {/* Product Info Section */}
        <div className="border p-4 rounded-md shadow bg-gray-50 space-y-2 text-sm flex-1">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p><strong>Description:</strong> {product?.description}</p>
          <p><strong>Rating:</strong> {Array.from({ length: 5 }).map((_, i) => {
      const fullStar = i + 1 <= Math.floor(product?.rating);
      const halfStar = i + 1 > Math.floor(product?.rating) && i < product?.rating;
      return <span key={i} className='text-yellow-500 text-2xl'>{fullStar ? '★' : halfStar ? '☆' : '☆'}</span>;
    })}<span className="text-sm text-gray-500">({product?.rating.toFixed(1)})</span></p>
          <p><strong>Reviews:</strong> {product?.reviews}</p>
          <p><strong>Color:</strong> {product?.colors}</p>
          <p><strong>Size:</strong> {product?.sizes?.join(', ')}</p>
          <p><strong>Discount:</strong> {product?.discount}%</p>
          <p><strong>Price:</strong> ₹{product?.price}</p>
          <p><strong>M.R.P:</strong> <span className="line-through text-gray-400">₹{product?.MRP}</span></p>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            <li>7 days Service Centre Replacement</li>
            <li>Free Delivery</li>
            <li>1 Year Warranty</li>
            <li>Pay on Delivery</li>
          </ul>

          <div className="mt-4">
            <h2 className="text-md font-semibold mb-1">About this item</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>Ergonomic design with comfortable grip for long use</li>
              <li>6 quality buttons including DPI, forward/backward</li>
              <li>Adjustable DPI: 1400/2200/2600/4200</li>
              <li>1.8m braided cable with USB interface</li>
              <li>Breathing LED effect</li>
            </ul>
          </div>
        </div>

        {/* Buy Section */}
        <div className="border p-4 w-full md:w-72 rounded-md shadow space-y-2 text-sm">
          <p className="text-xl font-bold">₹{product.price}</p>
          <p className="text-green-600 font-semibold">Fulfilled</p>
          <p>FREE delivery,  {new Date(Date.now() ).toLocaleDateString('en-IN', {
             weekday: "long",
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })} on your first order.</p>
          <p>
  Or fastest delivery Tomorrow, {new Date(Date.now() + 86400000 ).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })}
</p>

          <p>
            Delivering to Delhi 110001 –{' '}
            <span className="text-blue-500 cursor-pointer">Update location</span>
          </p>
          <p className="text-green-700 font-medium">In stock</p>
          <p><strong>Ships from:</strong> Amazon</p>
          <p><strong>Sold by:</strong> Clicktech Retail Private Ltd</p>
          <p><strong>Payment:</strong> Secure transaction</p>
          <p><strong>Packaging:</strong> Ships in product packaging</p>
          <div className="border-t pt-2">
            <p><strong>Quantity:</strong> 1</p>
            <button
              className="w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded-full mt-2 font-semibold"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/buynow">
              <button className="w-full bg-orange-500 hover:bg-orange-600 py-2 rounded-full mt-2 font-semibold text-white">
                Buy Now
              </button>
            </Link>
          </div>
          <div className="text-blue-600 underline text-sm mt-2 cursor-pointer">
            Add gift options
          </div>
        </div>
      </div>

      {/* Other Sellers */}
      <div className="mt-6 text-sm text-gray-600">
        <strong>Other sellers on Amazon:</strong><br />
        New (2) from ₹{product.price} &nbsp; FREE Delivery on first order.
      </div>
    </div>
  );
};

export default OfflineProductDetails;
