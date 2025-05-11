import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

const API = '/api/products';

// Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/products`);
      return res.data.products;
    } catch (err) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  }
);

export const getFilteredProducts = createAsyncThunk(
  'products/getFilteredProducts',
  async (filters, { rejectWithValue }) => {
    try {
      // Convert filters to query string with proper encoding
      const params = new URLSearchParams();

      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => params.append(key, v));
        } else if (value !== undefined && value !== null && value !== '') {
          params.append(key, value);
        }
      });

      const response = await axios.get(`${USER_API_END_POINT}/products/filter?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error("Fetch filtered products failed:", error);
      return rejectWithValue(
        error.response?.data?.message || error.response?.data || error.message || "Something went wrong"
      );
    }
  }
);





export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/products/${id}`);
      return res.data.product;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// Fetch products by category slug
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchByCategory',
  async (categorySlug, thunkAPI) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/products/category/${categorySlug}`);
      return response.data.products;  // Make sure the API returns a 'products' key
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/create',
  async (formData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;

      const res = await axios.post(
        `${USER_API_END_POINT}/products/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      return res.data.product;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);



export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, formData }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token; // Make sure 'auth.token' is correct
      if (!token) {
        return rejectWithValue('No token found');
      }

      // Sending PUT request with the token in the Authorization header
      const res = await axios.put(
        `${USER_API_END_POINT}/products/${id}`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );
      console.log("API Response:", res.data);  // Log the response for debugging
      return res.data.product;
    } catch (err) {
      console.error("Error updating product:", err);
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);



export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id, { rejectWithValue, getState }) => {
    try {
      // Retrieve the token from Redux state (or from localStorage if needed)
      const token = getState().auth.token; // Replace 'auth.token' with the correct state path
      if (!token) {
        return rejectWithValue('No token found');
      }

      await axios.delete(`${USER_API_END_POINT}/products/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      return id;
    } catch (err) {
      return rejectWithValue(err.response.data.message || err.message);
    }
  }
);


// Slice
const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    single: null,
    filteredProducts: [],
  product: null,
  loading: false,
  error: null,
  success: false,
  },
  reducers: {
    resetProductState: (state) => {
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getFilteredProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.items = [];
      })
      .addCase(getFilteredProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ✅ Now this is just the product array
      })
      
      .addCase(getFilteredProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Something went wrong';
      })
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;  // Update with the products from the category
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      //fetch product id
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.single = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.single = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.map((product) =>
          product._id === action.payload._id ? action.payload : product
        );
      })

      // Delete
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((product) => product._id !== action.payload);
      });
  },
});

export const { resetProductState } = productSlice.actions;
export default productSlice.reducer;
