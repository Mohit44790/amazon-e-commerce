import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createGrocery, updateGrocery } from '../redux/slice/grocerySlice';

const initialState = {
  name: '',
  price: '',
  discount: 0,
  size: '',
  unit: '',
  category: '',
  brand: '',
  quantity: '',
  expiryDate: '',
  manufactureDate: '',
  isVeg: false,
  isNonVeg: false,
  isGlutenFree: false,
  isSugarFree: false,
  isDairyFree: false,
  isNutFree: false,
  isOrganic: false,
  description: '',
  stock: '',
};

const GroceryForm = ({ existing, onSuccess }) => {
  const [form, setForm] = useState(initialState);
  const [images, setImages] = useState([]);
  const [previewImgs, setPreviewImgs] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (existing) {
      setForm({ ...initialState, ...existing }); // Ensure default fields are populated
      if (existing.images) setPreviewImgs(existing.images);
    }
  }, [existing]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImgs(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));
    images.forEach((img) => formData.append('images', img));

    if (existing?._id) {
      // Update mode
      await dispatch(updateGrocery({ id: existing._id, formData }));
    } else {
      // Create mode
      await dispatch(createGrocery(formData));
    }

    setForm(initialState);
    setImages([]);
    setPreviewImgs([]);
    onSuccess?.();
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-md space-y-6 border"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">
        {existing ? 'Update' : 'Create'} Grocery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          ['name', 'Name'],
          ['price', 'Price', 'number'],
           
          ['discount', 'Discount', 'number'],
          ['size', 'Size'],
          ['unit', 'Unit'],
          ['quantity', 'Quantity', 'number'],
          ['stock', 'Stock', 'number'],
          ['expiryDate', 'Expiry Date', 'date'],
          ['manufactureDate', 'Manufacture Date', 'date'],
        ].map(([key, label, type = 'text']) => (
          <input
            key={key}
            name={key}
            type={type}
            value={form[key] || ''}
            onChange={handleChange}
            placeholder={label}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-400"
            required
          />
        ))}
      </div>

      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full px-4 py-2 border rounded-md h-24 focus:ring focus:ring-blue-400"
        required
      />
      

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          'isVeg',
          'isNonVeg',
          'isGlutenFree',
          'isSugarFree',
          'isDairyFree',
          'isNutFree',
          'isOrganic',
        ].map((flag) => (
          <label key={flag} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={flag}
              checked={form[flag]}
              onChange={handleChange}
            />
            <span className="capitalize">
              {flag.replace('is', '').replace(/([A-Z])/g, ' $1')}
            </span>
          </label>
        ))}
      </div>

      {/* Image Upload */}
      <div className="space-y-2">
        <label className="font-semibold">Images</label>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} />
        {previewImgs.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {previewImgs.map((src, i) => (
              <img key={i} src={src} alt="Preview" className="w-24 h-24 object-cover rounded" />
            ))}
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Submitting...' : existing ? 'Update Grocery' : 'Create Grocery'}
      </button>
    </form>
  );
};

export default GroceryForm;
