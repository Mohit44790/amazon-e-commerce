import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

// Base URL
// const API_URL = '/api/category';

// Get all categories
export const fetchCategories = createAsyncThunk('category/fetchAll', async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${USER_API_END_POINT}/categories/allget`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.message || "Failed to fetch categories");
  }
});

// Create category (admin)
export const createCategory = createAsyncThunk(
    'category/create',
    async (formData, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;
  
        const res = await axios.post(
          `${USER_API_END_POINT}/categories`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        return res.data.category;
      } catch (err) {
        return rejectWithValue(err.response?.data?.message || err.message);
      }
    }
  );
  
  export const fetchCategoryDetails = createAsyncThunk(
    'category/fetchCategoryDetails',
    async (slug, { rejectWithValue }) => {
      try {
        const res = await axios.get(`${USER_API_END_POINT}/categories/filters/${slug}`);
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  // Update category (admin)
  export const updateCategory = createAsyncThunk(
    'category/update',
    async ({ id, updatedData }, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;
        const res = await axios.put(`${USER_API_END_POINT}/categories/${id}`, updatedData, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          }
        });
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );
  


  export const deleteCategory = createAsyncThunk(
    'category/delete',
    async (id, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;
        await axios.delete(`${USER_API_END_POINT}/categories/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        return id;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    subcategories: [],
    subSubcategories: [],
    brands: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter(cat => cat._id !== action.payload);
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.unshift(action.payload); // add new category to the top
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchCategoryDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoryDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.mainCategory = action.payload.mainCategory;
        state.subcategories = action.payload.subcategories;
        state.subSubcategories = action.payload.subSubcategories;
        state.brands = action.payload.brands;
      })
      .addCase(fetchCategoryDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex(cat => cat._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
  },
});

export default categorySlice.reducer;
