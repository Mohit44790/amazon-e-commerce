// src/redux/brandSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // Axios instance that includes token
import { USER_API_END_POINT } from '../constants/userConstants';

// Get all brands
export const fetchBrands = createAsyncThunk(
  'brand/fetchBrands',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/brand/get`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Failed to fetch brands');
    }
  }
);

// Create a new brand
export const createBrand = createAsyncThunk(
  'brand/create',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      const res = await axios.post(
        `http://localhost:8000/api/brand`,
        formData,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data.brand;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

export const fetchBrandsByCategory = createAsyncThunk('brand/fetchByCategory', async (subcategoryId) => {
  const response = await axios.get(`${USER_API_END_POINT}/brand/category/${subcategoryId}`);
  return response.data;
});
// Update brand
export const updateBrand = createAsyncThunk(
  'brand/updateBrand',
  async ({ id, formData }, { rejectWithValue,getState }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.put(`${USER_API_END_POINT}/brand/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

// Delete brand
export const deleteBrand = createAsyncThunk(
  'brand/deleteBrand',
  async (id, { rejectWithValue ,getState}) => {
    try {
      const token = getState().auth.token;
      const res = await axios.delete(`${USER_API_END_POINT}/brand/${id}`,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response.data.message);
    }
  }
);

const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchBrands.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    })
    .addCase(fetchBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(fetchBrandsByCategory.pending, (state) => { state.loading = true; })
    .addCase(fetchBrandsByCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    })
    .addCase(fetchBrandsByCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

      .addCase(createBrand.fulfilled, (state, action) => {
        state.brands.unshift(action.payload);
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(updateBrand.fulfilled, (state, action) => {
        const index = state.brands.findIndex(b => b._id === action.payload._id);
        if (index !== -1) state.brands[index] = action.payload;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteBrand.fulfilled, (state, action) => {
        const deletedId = action.payload?.brand?._id || action.payload?._id;
        if (deletedId) {
          state.brands = state.brands.filter(b => b._id !== deletedId);
        }
      })
      
      .addCase(deleteBrand.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default brandSlice.reducer;
