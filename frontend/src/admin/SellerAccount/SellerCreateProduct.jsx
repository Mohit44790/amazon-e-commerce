import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SellercreateProduct } from '../../redux/slice/productSlice';
import { toast } from 'react-toastify';

import { fetchCategories } from '../../redux/slice/categorySlice';
import { fetchBrands } from '../../redux/slice/brandSlice';

const SellerCreateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { categories, loading, error } = useSelector((state) => state.category);
     
 const { brands, loading: brandLoading, error: brandError } = useSelector((state) => state.brand);

    useEffect(() => {
        dispatch(fetchCategories());
        dispatch(fetchBrands());
      }, [dispatch]);
      
      useEffect(() => {
        if (error) toast.error(error);
        if (brandError) toast.error(brandError);
      }, [error, brandError]);

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


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validate required fields
    const {
      name,
      price,
      description,  
      category,
      brand,
      stock,
    } = formData;
  
    if (!name || !price || !description || !category || !brand || !stock) {
      toast.error('Please fill in all required fields');
      return;
    }
  
    if (images.length === 0) {
      toast.error('Please upload at least one image');
      return;
    }
  
    const data = new FormData();
  
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        if (typeof value === 'boolean') {
          data.append(key, value);
        } else if (key === 'colors') {
          value.split(',').forEach((color) => {
            if (color.trim()) data.append('colors[]', color.trim());
          });
        } else if (key === 'sizes') {
          value.split(',').forEach((size) => {
            if (size.trim()) data.append('sizes[]', size.trim());
          });
        } else {
          data.append(key, value);
        }
      }
    });
  
    images.forEach((image) => {
      data.append('images', image);
    });
  
    dispatch(SellercreateProduct(data))
      .unwrap()
      .then(() => {
        toast.success('Product created successfully');
        navigate('/admin/products'); // Optional: uncomment if needed
      })
      .catch((err) => {
        toast.error(`Product creation failed: ${err}`);
      });
  };
  

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create Seller Product</h2>
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
          />
        ))}

        {/* Category Dropdown */}
        <select
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="w-full p-2 border rounded"
>
  <option value="">Select Category</option>
  {(categories || []).map((cat) => (
  <option key={cat._id} value={cat._id}>
    {cat.name}
  </option>
))}
</select>

        {/* Brand Dropdown */}
        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Brand</option>
          {(brands || []).map((brand) => (
  <option key={brand._id} value={brand._id}>
    {brand.name}
  </option>
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
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default SellerCreateProduct;
