import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPromotion } from '../redux/slice/todaySaleSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreatePromotion = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.promotions);

  const [formData, setFormData] = useState({
    name: '',
    type: '', // Season Sale or Today Deal
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, type, startDate, endDate } = formData;
    if (!name || !type || !startDate || !endDate) {
      toast.error('Please fill all fields');
      return;
    }

    try {
      await dispatch(createPromotion(formData)).unwrap();
      toast.success('Promotion created successfully');
      navigate('/admin/promotions');
    } catch (error) {
        toast.error(error.response?.data?.message || "Failed to create promotion");
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Promotion</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Promotion Name" value={formData.name} onChange={handleChange} className="w-full border p-2 rounded" />
        
        <select name="type" value={formData.type} onChange={handleChange} className="w-full border p-2 rounded">
          <option value="">Select Type</option>
          <option value="Season Sale">Season Sale</option>
          <option value="Today Deal">Today Deal</option>
        </select>

        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full border p-2 rounded" />
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} className="w-full border p-2 rounded" />

        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Creating...' : 'Create Promotion'}
        </button>
      </form>
    </div>
  );
};

export default CreatePromotion;
