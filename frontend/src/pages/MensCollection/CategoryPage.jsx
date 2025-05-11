import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'; // To get categorySlug from URL
import { useDispatch, useSelector } from 'react-redux';
import {  fetchProductsByCategory } from '../../redux/slice/productSlice';

const CategoryPage = () => {
  const { categorySlug } = useParams(); // Get categorySlug from the URL
  const dispatch = useDispatch();
  
  const { items: products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    if (categorySlug) {
      dispatch(fetchProductsByCategory(categorySlug)); // Fetch products for the selected category
    }
  }, [dispatch, categorySlug]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {products.length === 0 ? (
        <div>No products found for this category.</div>
      ) : (
        products.map((product) => (
          <div key={product._id} className="p-4 w-full h-full border rounded shadow">
            <img src={product.images[0]} alt={product.name} className="w-full  h-48 object-contain" />
            <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-gray-600">{product.price} ₹</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CategoryPage;
