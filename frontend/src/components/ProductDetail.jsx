// components/ProductDetail.jsx
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from '../redux/slice/productSlice';
import { addToCart } from '../redux/slice/cartSlice';
import { toast } from 'react-toastify';
import ProductReviews from './ProductReviews';
// import ReactImageMagnify from 'react-image-magnify';
const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { single: product, loading, error } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.auth);

  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product?.images?.length > 0) {
      setSelectedImage(product.images[0]);
    }
  }, [product]);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const handleAddToCart = async (product) => {
    try {
      const itemData = {
        productId: product._id,
        name: product.name, // ✅ add this
        price: product.price,
        images: product.images[0],
        colors: product.colors,
        sizes: product.sizes,
        quantity: 1
      };
  
      await dispatch(addToCart(itemData)).unwrap();
      toast.success("Item added to cart!");
    } catch (err) {
      toast.error("Failed to add item to cart.");
    }
  };
 

  if (loading) return <p className="text-center py-4">Loading product...</p>;
  if (error) return <p className="text-red-500 text-center py-4">{error}</p>;
  if (!product) return <p className="text-center text-red-500 mt-10">Product not found</p>;

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="flex gap-2 text-sm text-gray-600 mx-4 border-b justify-between items-center py-2 overflow-x-auto">
        {[
          "Electronics", "Mobiles & Accessories", "Laptop & Accessories", "Tv & Home Entertainment",
          "Audio", "Cameras", "Computers Peripherals", "Smart Technology", "Musical Instruments", "Office & Stationary"
        ].map((cat, i) => (
          <p key={i}>{cat}</p>
        ))}
      </div>

      <div className="p-6 mx-auto bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">{product?.name}</h1>

        <div className="flex flex-col  sm:flex-row gap-8">
          {/* Thumbnails */}
          <div className="flex flex-col gap-2">
            {product.images?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => handleImageClick(img)}
                className={`w-16 h-20 object-cover border rounded cursor-pointer ${
                  selectedImage === img ? 'border-blue-500' : 'border-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex flex-col h-full items-center gap-2">
            <img
              src={selectedImage || product?.images?.[0]}
              onError={(e) => e.target.src = "/placeholder.jpg"}
              alt="Selected"
              className="w-96 h-full object-cover border rounded"
            />
          </div>
          {/* Main Image with Zoom */}
{/* <div className="flex flex-col h-full items-center gap-2 w-[400px]">
  <ReactImageMagnify
    {...{
      smallImage: {
        alt: 'Product Image',
        isFluidWidth: true,
        src: selectedImage || product?.images?.[0],
      },
      largeImage: {
        src: selectedImage || product?.images?.[0],
        width: 1200,
        height: 1800,
      },
       enlargedImageContainerStyle: {
        zIndex: 1000,
        background: '#fff',
      },
      enlargedImageContainerDimensions: {
        width: '200%',
        height: '100%',
      },
      enlargedImagePosition: 'beside',
      isHintEnabled: true,
      shouldUsePositiveSpaceLens: true,
    }}
  />
</div> */}


          {/* Product Info */}
          <div className="border p-4 rounded-md shadow bg-gray-50 space-y-2 text-sm">
            <p><strong>Description:</strong> {product?.description}</p>
            <p><strong>Brand:</strong> {product?.name}</p>
            <p><strong>Rating:</strong> {product?.rating} ⭐</p>
            <p><strong>Reviews:</strong> {product?.reviews}</p>
            <p><strong>Color:</strong> {product?.colors?.join(', ')}</p>
  <p><strong>Size:</strong> {product?.sizes?.join(', ')}</p>
  <p><strong>Discount:</strong> {product?.discount}%</p>
            <p><strong>Price:</strong> ₹{product?.price}</p>
            <p><strong>M.R.P:</strong> <span className="line-through text-gray-400">₹{product?.mrp}</span></p>
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
          <div className="border p-4 w-72 rounded-md shadow space-y-2 text-sm">
            <p className="text-xl font-bold">₹{product.price}</p>
            <p className="text-green-600 font-semibold">Fulfilled</p>
            <p>FREE delivery Friday, 18 April on your first order.</p>
            <p>Or fastest delivery Tomorrow, 17 April.</p>
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
  onClick={() => handleAddToCart(product)} // ✅ now product is passed correctly
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
      <div className='mx-4'>
      <ProductReviews productId={product._id} />

      </div>
    </>
  );
};

export default ProductDetail;
