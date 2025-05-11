import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

export const fetchCart = createAsyncThunk('cart/fetch', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const res = await axios.get(`${USER_API_END_POINT}/user/cart`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return res.data.cart;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const addToCart = createAsyncThunk('cart/addToCart', async (itemData, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const res = await axios.post(`${USER_API_END_POINT}/user/cart/add`, itemData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return res.data.cart;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const removeFromCart = createAsyncThunk('cart/removeFromCart', async (productId, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const res = await axios.delete(`${USER_API_END_POINT}/user/cart/remove/${productId}`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return res.data.cart;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

export const emptyCart = createAsyncThunk('cart/emptyCart', async (_, { getState, rejectWithValue }) => {
  try {
    const token = getState().auth.token;
    const res = await axios.delete(`${USER_API_END_POINT}/user/cart/empty`, {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    });
    return res.data.cart;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || err.message);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    cartCount: 0,
    loading: false,
    error: null,
    isCartOpen: false,
  },
  reducers: {
    resetCartState: (state) => {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.product !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item) item.quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(item => item._id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    clearCart(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = Array.isArray(action.payload) ? action.payload : [];
        state.loading = false;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.items = Array.isArray(action.payload) ? action.payload : [];
      })
      .addCase(emptyCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export const { resetCartState, toggleCart, increaseQuantity, decreaseQuantity,clearCart, } = cartSlice.actions;
export default cartSlice.reducer;
