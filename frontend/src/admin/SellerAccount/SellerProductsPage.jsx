import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchSellerProducts } from '../../redux/slice/productSlice';

const SellerProductsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { items: products, loading, error } = useSelector(state => state.products);
  const token = useSelector(state => state.auth.token);

  useEffect(() => {
    if (token) {
      dispatch(fetchSellerProducts());
    }
  }, [dispatch, token]);

  const handleCreate = () => {
    navigate('/seller/products/create');
  };

  const handleEdit = (id) => {
    navigate(`/seller/products/edit/${id}`);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Products</h1>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Product
        </button>
      </div>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && products.length === 0 && (
        <p>No products found. Add some!</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map(product => (
          <div
            key={product._id}
            className="border rounded p-4 shadow hover:shadow-lg cursor-pointer"
            onClick={() => handleEdit(product._id)}
          >
            <img
              src={product.images[0] || '/placeholder.png'}
              alt={product.name}
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-sm mt-2 line-clamp-2">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerProductsPage;
