import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

// Thunks
export const fetchAddresses = createAsyncThunk(
  'address/fetchAddresses',
  async (_, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.get(`${USER_API_END_POINT}/user/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data.addresses;
    } catch (err) {
      return rejectWithValue("Failed to fetch addresses");
    }
  }
);

export const addAddress = createAsyncThunk(
  'address/addAddress',
  async (address, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.post(`${USER_API_END_POINT}/user/address/add`, address, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to add address");
    }
  }
);

export const updateAddress = createAsyncThunk(
  'address/updateAddress',
  async ({ index, address }, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.put(`${USER_API_END_POINT}/user/address/update`, { index, address }, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to update address");
    }
  }
);

export const deleteAddress = createAsyncThunk(
  'address/deleteAddress',
  async (index, { getState, rejectWithValue }) => {
    try {
      const { token } = getState().auth;
      const response = await axios.delete(`${USER_API_END_POINT}/user/address/delete`, {
        data: { index },
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (err) {
      return rejectWithValue("Failed to delete address");
    }
  }
);

const addressSlice = createSlice({
  name: 'address',
  initialState: {
    addresses: [],
    loading: false,
    error: null,
  },
  reducers: {
    setDefaultAddress: (state, action) => {
      const index = action.payload;
      const [defaultAddr] = state.addresses.splice(index, 1);
      state.addresses.unshift(defaultAddr); // Put default at position 0
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addAddress.fulfilled, (state, action) => {
        state.addresses = action.payload;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        state.addresses = action.payload;
      })
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addresses = action.payload;
      });
  },
});

export const { setDefaultAddress } = addressSlice.actions;
export default addressSlice.reducer;
