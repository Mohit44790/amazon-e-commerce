import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const AdminUserList = () => {
  const [users, setUsers] = useState([]);
  const { user, token } = useSelector((state) => state.auth);

  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/user/admin/all-users', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      console.log('Fetched users:', res.data);
    //   {console.log("Users in render:", users)}
      setUsers(res.data.users);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || 'Failed to fetch users');
    }
  };

  useEffect(() => {
    if (token) {
      fetchUsers();
    }
  }, [token]);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8000/api/user/admin/delete-user/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      toast.success('User deleted');
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to delete user');
    }
  };

  const handleBlockToggle = async (userId, isBlocked) => {
    try {
      const endpoint = isBlocked
        ? `http://localhost:8000/api/user/admin/unblock/${userId}`
        : `http://localhost:8000/api/user/admin/block/${userId}`;

      await axios.put(endpoint, {}, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      toast.success(`User ${isBlocked ? 'unblocked' : 'blocked'} successfully`);
      fetchUsers();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to update block status');
    }
  };

  const handleRoleChange = async (id, newRole) => {
  try {
    await axios.put(
      `http://localhost:8000/api/user/admin/update-role/${id}`,
      { role: newRole },
      {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      }
    );
    toast.success(`Role updated to ${newRole}`);
    fetchUsers();
  } catch (error) {
    toast.error(error.response?.data?.message || 'Failed to update role');
  }
};


  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-bold mb-4">User Management</h2>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr
              key={user._id || user.id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3">{user.isBlocked ? 'Blocked' : 'Active'}</td>
                <td className="p-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700 text-sm"
                  >
                    Delete
                  </button>
                  <button
    onClick={() => handleBlockToggle(user._id, user.isBlocked)}
    className={`${
      user.isBlocked ? 'bg-green-600' : 'bg-yellow-500'
    } text-white px-3 py-1 rounded hover:opacity-90 text-sm`}
  >
    {user.isBlocked ? 'Unblock' : 'Block'}
  </button>
                   {/* Admin/User Toggle */}
  <button
    onClick={() =>
      handleRoleChange(user._id, user.role === 'admin' ? 'user' : 'admin')
    }
    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
  >
    {user.role === 'admin' ? 'Make User' : 'Make Admin'}
  </button>

  {/* Seller Toggle */}
  <button
    onClick={() =>
      handleRoleChange(user._id, user.role === 'seller' ? 'user' : 'seller')
    }
    className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
  >
    {user.role === 'seller' ? 'Remove Seller' : 'Make Seller'}
  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No users found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUserList;
