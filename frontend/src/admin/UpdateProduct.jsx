import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchProductById, updateProduct } from '../redux/slice/productSlice';
import { fetchCategories } from '../redux/slice/categorySlice';
import { fetchBrands } from '../redux/slice/brandSlice';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { single } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.category);
  const { brands } = useSelector((state) => state.brand);

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    discount: '',
    stock: '',
    category: '',
    brand: '',
    colors: '',
    sizes: '',
    isFeatured: false,
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchCategories());
    dispatch(fetchBrands());
  }, [dispatch, id]);

  useEffect(() => {
    if (single) {
      setFormData({
        ...formData,
        name: single.name || '',
        price: single.price || '',
        description: single.description || '',
        discount: single.discount || '',
        stock: single.stock || '',
        category: single.category?._id || '',
        brand: single.brand?._id || '',
        colors: Array.isArray(single.colors) ? single.colors.join(',') : '',
        sizes: Array.isArray(single.sizes) ? single.sizes.join(',') : '',
        isFeatured: single.isFeatured || false,
      });
      setExistingImages(single.images || []);
    }
  }, [single]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    const fieldsToSend = { ...formData };

    if (fieldsToSend.colors) {
      fieldsToSend.colors.split(',').forEach((color) => data.append('colors[]', color.trim()));
      delete fieldsToSend.colors;
    }

    if (fieldsToSend.sizes) {
      fieldsToSend.sizes.split(',').forEach((size) => data.append('sizes[]', size.trim()));
      delete fieldsToSend.sizes;
    }

    Object.entries(fieldsToSend).forEach(([key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        data.append(key, value);
      }
    });

    images.forEach((img) => data.append('images', img));

    try {
      await dispatch(updateProduct({ id, formData: data })).unwrap();
      toast.success('Product updated successfully');
      navigate('/admin/products');
    } catch (err) {
      toast.error(`Update failed: ${err.message}`);
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {['name', 'price', 'description', 'discount', 'stock', 'colors', 'sizes'].map((field) => (
          <input
            key={field}
            type="text"
            name={field}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 border rounded"
          />
        ))}

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Category</option>
          {categories?.map((cat) => (
            <option key={cat._id} value={cat._id}>
              {cat.name}
            </option>
          ))}
        </select>

        <select
          name="brand"
          value={formData.brand}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Brand</option>
          {brands?.map((brand) => (
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

        {/* Show Existing Images */}
        {existingImages.length > 0 && (
          <div className="flex space-x-2 overflow-x-auto">
            {existingImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Existing ${index}`}
                className="w-20 h-20 object-cover border rounded"
              />
            ))}
          </div>
        )}

        {/* Upload New Images */}
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages([...e.target.files])}
        />

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
