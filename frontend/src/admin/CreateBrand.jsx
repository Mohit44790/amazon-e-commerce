// src/pages/CreateBrand.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBrand } from '../redux/slice/brandSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const CreateBrand = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return toast.error("Brand name is required");

    dispatch(createBrand({ name }))
    .unwrap()
    .then(() => toast.success('Brand created successfully'))
      .catch((err) => toast.error(err));
      navigate('/admin/product/create');
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Brand</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          placeholder="Brand Name"
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateBrand;
