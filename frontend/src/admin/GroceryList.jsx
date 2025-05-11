import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroceries, deleteGrocery, updateGrocery } from '../redux/slice/grocerySlice';
import GroceryForm from './GroceryForm';

const GroceryList = () => {
  const dispatch = useDispatch();
  const { groceries, loading } = useSelector((state) => state.grocery);
  const [editing, setEditing] = useState(null);
  const formRef = useRef();

  useEffect(() => {
    dispatch(fetchGroceries());
  }, [dispatch]);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      dispatch(deleteGrocery(id));
    }
  };

  const handleEdit = (grocery) => {
    setEditing(grocery);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <h2 className="text-3xl font-bold text-gray-800">🛒 Grocery Admin Panel</h2>

      <div ref={formRef}>
        <GroceryForm
          existing={editing}
          onSuccess={() => {
            setEditing(null);
            dispatch(fetchGroceries());
          }}
        />
      </div>

      {loading && <p className="text-blue-600 animate-pulse">Loading groceries...</p>}

     <div className="overflow-x-auto mt-6">
  <table className="min-w-full bg-white border rounded-lg shadow">
    <thead>
      <tr className="bg-gray-100 text-gray-700 text-sm">
        <th className="p-3 text-left border-b">S.No.</th>
        <th className="p-3 text-left border-b">Image</th>
        <th className="p-3 text-left border-b">Name</th>
        <th className="p-3 text-left border-b">Description</th>
        <th className="p-3 text-left border-b">stock</th>
        <th className="p-3 text-left border-b">Price</th>
        <th className="p-3 text-left border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      {groceries.map((g, index) => (
        <tr key={g._id} className="hover:bg-gray-50 text-sm">
          <td className="p-3 border-b">{index + 1}</td>

          <td className="p-3 border-b">
            {g.images?.[0] ? (
              <img
                src={g.images[0]}
                alt={g.name}
                className="w-14 h-14 object-cover rounded border"
              />
            ) : (
              <span className="text-gray-400 italic">No image</span>
            )}
          </td>

          <td className="p-3 border-b font-medium">{g.name}</td>
          <td className="p-3 border-b text-gray-600">{g.description}</td>
          <td className="p-3 border-b text-gray-600">{g.stock}</td>
          <td className="p-3 border-b text-green-700 font-semibold">₹{g.price}</td>

          <td className="p-3 border-b flex gap-2">
            <button
              onClick={() => handleEdit(g)}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 text-xs"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(g._id)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-xs"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default GroceryList;
