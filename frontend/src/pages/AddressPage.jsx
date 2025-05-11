import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchAddresses,
  addAddress,
  updateAddress,
  deleteAddress,
  setDefaultAddress
} from '../redux/slice/addressSlice';

const AddressPage = () => {
  const dispatch = useDispatch();
  const { addresses, loading } = useSelector((state) => state.address);

  const [form, setForm] = useState({
    fullName: '',
    phoneNumber: '',
    pincode: '',
    addressLine: '',
    landmark: '',
    city: '',
    state: ''
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, [dispatch]);

  const handleSubmit = () => {
    if (editIndex !== null) {
      dispatch(updateAddress({ index: editIndex, address: form }));
      setEditIndex(null);
    } else {
      dispatch(addAddress(form));
    }
    setForm({
      fullName: '',
      phoneNumber: '',
      pincode: '',
      addressLine: '',
      landmark: '',
      city: '',
      state: ''
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-2">Your Addresses</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <ul>
            {addresses.map((addr, idx) => (
              <li key={idx} className="border p-3 mb-3 rounded shadow-sm bg-white">
                <p>
                  <strong>{addr.fullName}</strong><br />
                  {addr.addressLine}, {addr.landmark}<br />
                  {addr.city} - {addr.pincode}, {addr.state}<br />
                  Phone: {addr.phoneNumber}
                </p>
                <div className="flex gap-2 mt-2">
                  <button
                    className="text-blue-600 underline"
                    onClick={() => {
                      setForm(addr);
                      setEditIndex(idx);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 underline"
                    onClick={() => dispatch(deleteAddress(idx))}
                  >
                    Delete
                  </button>
                  <button
                    className="text-green-600 underline"
                    onClick={() => dispatch(setDefaultAddress(idx))}
                  >
                    Set as Default
                  </button>
                  {idx === 0 && <span className="ml-2 text-sm text-gray-500">(Default)</span>}
                </div>
              </li>
            ))}
          </ul>

          <h3 className="text-lg font-medium mt-4 mb-2">
            {editIndex !== null ? 'Edit Address' : 'Add New Address'}
          </h3>

          <div className="grid grid-cols-1 gap-2">
            <input
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="phoneNumber"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="pincode"
              placeholder="Pincode"
              value={form.pincode}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="addressLine"
              placeholder="Address Line"
              value={form.addressLine}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="landmark"
              placeholder="Landmark"
              value={form.landmark}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <input
              name="state"
              placeholder="State"
              value={form.state}
              onChange={handleChange}
              className="border p-2 rounded"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white py-2 rounded mt-2"
            >
              {editIndex !== null ? 'Update Address' : 'Add Address'}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default AddressPage;
