import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, updateCategory } from '../redux/slice/categorySlice';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // category ID from URL
  const { categories } = useSelector(state => state.category);

  const [categoryData, setCategoryData] = useState({
    name: '',
    parent: '',
  });

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const currentCategory = categories.find(c => c._id === id);
    if (currentCategory) {
      setCategoryData({
        name: currentCategory.name,
        parent: currentCategory.parent || '',
      });
    }
  }, [categories, id]);

  const handleChange = (e) => {
    setCategoryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCategory({ id, updatedData: categoryData }))

      .unwrap()
      .then(() => {
        toast.success('Category updated successfully');
        navigate('/admin/categories/edit');
      })
      .catch((err) => toast.error(err?.message || 'Update failed'));
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">Edit Category</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label className="block font-medium">Category Name</label>
          <input
            type="text"
            name="name"
            value={categoryData.name}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>

        <div>
          <label className="block font-medium mt-4">Parent Category (optional)</label>
          <select
            name="parent"
            value={categoryData.parent}
            onChange={handleChange}
            className="border p-2 w-full"
          >
            <option value="">None (Main Category)</option>
            {categories
              .filter(cat => cat._id !== id) // prevent selecting self as parent
              .map(cat => (
                <option key={cat._id} value={cat._id}>{cat.name}</option>
              ))}
          </select>
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
          Update
        </button>
      </form>
    </div>
  );
};

export default EditCategory;
