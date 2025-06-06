import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProductById, updateSellerProduct, resetProductState } from '../../redux/slice/productSlice';
import { fetchCategories } from '../../redux/slice/categorySlice';
import { fetchBrands } from '../../redux/slice/brandSlice';
import { toast } from 'react-toastify';

const SellerProductEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { single: product, loading, error } = useSelector(state => state.products);
  const { categories } = useSelector(state => state.category);
  const { brands } = useSelector(state => state.brand);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    discount: '',
    stock: '',
    category: '',
    brand: '',
    isFeatured: false,
    colors: '',
    sizes: '',
  });
  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchCategories());
    dispatch(fetchBrands());

    return () => {
      dispatch(resetProductState());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name || '',
        price: product.price || '',
        description: product.description || '',
        discount: product.discount || '',
        stock: product.stock || '',
        category: product.category || '',
        brand: product.brand || '',
        isFeatured: product.isFeatured || false,
        colors: (product.colors || []).join(','),
        sizes: (product.sizes || []).join(','),
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (typeof value === 'boolean') {
        data.append(key, value);
      } else if (key === 'colors') {
        value.split(',').forEach(color => color.trim() && data.append('colors[]', color.trim()));
      } else if (key === 'sizes') {
        value.split(',').forEach(size => size.trim() && data.append('sizes[]', size.trim()));
      } else {
        data.append(key, value);
      }
    });

    images.forEach(img => data.append('images', img));

    try {
      await dispatch(updateSellerProduct({ id, formData: data })).unwrap();
      toast.success('Product updated successfully');
      navigate('/seller/products');
    } catch (err) {
      toast.error('Failed to update product: ' + err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {product && (
        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'price', 'description', 'discount', 'stock', 'colors', 'sizes'].map((field) => (
            <input
              key={field}
              type="text"
              name={field}
              value={formData[field]}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required={['name', 'price', 'description', 'stock'].includes(field)}
            />
          ))}

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>{cat.name}</option>
            ))}
          </select>

          <select
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select Brand</option>
            {brands.map((brand) => (
              <option key={brand._id} value={brand._id}>{brand.name}</option>
            ))}
          </select>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="isFeatured"
              checked={formData.isFeatured}
              onChange={handleChange}
            />
            <label htmlFor="isFeatured">Is Featured</label>
          </div>

          <input
            type="file"
            name="images"
            multiple
            accept="image/*"
            onChange={(e) => setImages([...e.target.files])}
            className="block w-full"
          />

          {/* Show current images */}
          {product.images?.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={typeof img === 'string' ? img : img.url}
                  alt={`product-img-${index}`}
                  className="w-24 h-24 object-cover border rounded"
                />
              ))}
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Updating...' : 'Update Product'}
          </button>
        </form>
      )}
    </div>
  );
};

export default SellerProductEditPage;
