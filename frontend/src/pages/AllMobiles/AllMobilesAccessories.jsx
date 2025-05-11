// src/components/AllMobilesAccessories.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, createCategory } from '../../redux/slice/categorySlice';
import { fetchBrands, createBrand } from '../../redux/slice/brandSlice';
import { fetchProductsByCategory } from '../../redux/slice/productSlice';

const AllMobilesAccessories = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { brands } = useSelector((state) => state.brand);
  const { products, loading, error } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    const saltCategory = categories.find((cat) => cat.name.toLowerCase() === 'salt');
    if (!saltCategory) {
      dispatch(createCategory({ name: 'Salt' }));
      return;
    }

    const kitchenSubcategory = categories.find((cat) => cat.name === 'Kitchen' && cat.parent === saltCategory._id);
    if (!kitchenSubcategory) {
      dispatch(createCategory({ name: 'Kitchen', parent: saltCategory._id }));
      return;
    }

    const tataBrand = brands.find((brand) => brand.name === 'Tata');
    if (!tataBrand) {
      dispatch(createBrand({ name: 'Tata', categories: [saltCategory._id] }));
    }
  }, [categories, brands, dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedBrand(null);
    dispatch(fetchProductsByCategory(category._id));
  };

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setSelectedCategory(null);
    // Implement brand-based product fetching if needed
  };

  const getCategoryNameById = (_id) => {
    const category = categories.find((cat) => cat._id === id);
    return category ? category.name : 'Unknown';
  };

  return (
    <div className="flex gap-6">
      {/* Left Panel */}
      <div className="w-1/3 border-r pr-4">
        <h2 className="text-xl font-bold mb-2">Categories</h2>
        <ul className="mb-4 list-disc pl-6">
          {categories.map((cat) => (
            <li
              key={cat._id}
              onClick={() => handleCategoryClick(cat)}
              className="cursor-pointer hover:text-blue-600"
            >
              {cat.name}
              {cat.parent && (
                <span className="text-sm text-gray-500">
                  (Sub of {getCategoryNameById(cat.parent)})
                </span>
              )}
            </li>
          ))}
        </ul>
   
        <h2 className="text-xl font-bold mb-2">Brands</h2>
        <ul className="list-disc pl-6">
          {brands.map((brand) => (
            <li
              key={brand._id}
              onClick={() => handleBrandClick(brand)}
              className="cursor-pointer hover:text-green-600"
            >
              {brand.name}
              
            </li>
          ))}
        </ul>
      </div>

      {/* Right Panel */}
      <div className="w-2/3">
        {selectedCategory && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Products in: {selectedCategory.name}
            </h3>
            {loading && <p>Loading products...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {Array.isArray(products) && products.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {products.map((product) => (
      <div
        key={product._id}
        className="border rounded-xl p-4 shadow hover:shadow-md transition"
      >
        <img
         src={product?.images?.[0] || '/placeholder.png'}
          alt={product.name}
          className="h-40 w-full object-cover mb-2 rounded"
        />
        <h4 className="text-lg font-semibold">{product.name}</h4>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-bold mt-2">₹{product.price}</p>
      </div>
    ))}
  </div>
) : (
  <p className="text-gray-500">No products found or still loading.</p>
)}

          </div>
        )}

        {selectedBrand && (
          <div>
            <h3 className="text-2xl font-semibold mb-2">Brand: {selectedBrand.name}</h3>
            <p>ID: {selectedBrand._id}</p>
            <p>
              Linked Categories:{' '}
              {selectedBrand.categories
                .map((cid) => getCategoryNameById(cid))
                .join(', ')}
            </p>
            <p className="mt-2 text-gray-500">You can add brand-based product fetching here...</p>
          </div>
        )}

       
 


        {!selectedCategory && !selectedBrand && (
          <p className="text-gray-400 text-lg">Click on a category or brand to see details</p>
        )}
      </div>
    </div>
  );
};

export default AllMobilesAccessories;
