import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, deleteCategory } from '../redux/slice/categorySlice';
import { Link } from 'react-router-dom';

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteCategory(id));
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      <Link to="/admin/categories/create" className="text-blue-500 underline mb-2 inline-block">+ Create Category</Link>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Slug</th>
              <th className="border px-4 py-2">Type</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(cat => (
              <tr key={cat._id}>
                <td className="border px-4 py-2">{cat.name}</td>
                <td className="border px-4 py-2">{cat.slug}</td>
                <td className="border px-4 py-2">{cat.type}</td>
                <td className="border px-4 py-2">
                  <Link to={`/admin/categories/edit/${cat._id}`} className="text-blue-500">Edit</Link> | 
                  <button onClick={() => handleDelete(cat._id)} className="text-red-500 ml-2">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CategoryList;
