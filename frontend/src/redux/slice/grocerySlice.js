// src/redux/slices/grocerySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

export const fetchGroceries = createAsyncThunk('grocery/fetchAll', async (_, { getState }) => {
      const token = getState().auth.token;
  const res = await axios.get(`${USER_API_END_POINT}/grocery`, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });
  return res.data;
});

export const createGrocery = createAsyncThunk('grocery/create', async (formData, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.post(`${USER_API_END_POINT}/grocery`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

export const updateGrocery = createAsyncThunk('grocery/update', async ({ id, formData }, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.put(`${USER_API_END_POINT}/grocery/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
});

export const deleteGrocery = createAsyncThunk('grocery/delete', async (id, { getState }) => {
  const token = getState().auth.token;
  await axios.delete(`${USER_API_END_POINT}/grocery/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return id;
});

const grocerySlice = createSlice({
  name: 'grocery',
  initialState: {
    groceries: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchGroceries.pending, state => { state.loading = true; })
      .addCase(fetchGroceries.fulfilled, (state, action) => {
        state.groceries = action.payload;
        state.loading = false;
      })
      .addCase(createGrocery.fulfilled, (state, action) => {
        state.groceries.push(action.payload);
      })
      .addCase(updateGrocery.fulfilled, (state, action) => {
        const idx = state.groceries.findIndex(g => g._id === action.payload._id);
        if (idx !== -1) state.groceries[idx] = action.payload;
      })
      .addCase(deleteGrocery.fulfilled, (state, action) => {
        state.groceries = state.groceries.filter(g => g._id !== action.payload);
      });
  }
});

export default grocerySlice.reducer;
