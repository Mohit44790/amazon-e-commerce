import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

// CREATE promotion
export const createPromotion = createAsyncThunk(
  'promotions/create',
  async (promotionData, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${USER_API_END_POINT}/sales/create`,
        promotionData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// ASSIGN promotion to products
export const assignPromotionToProducts = createAsyncThunk(
  'promotions/assign',
  async ({ promotionId, productIds }, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.token;
      const res = await axios.post(
        `${USER_API_END_POINT}/sales/assign`,
        { promotionId, productIds },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// FETCH all promotions
export const fetchPromotions = createAsyncThunk(
  'promotions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/sales/all`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// FETCH products by promotion type (Season Sale or Today Deal)
export const fetchPromotionByType = createAsyncThunk(
  'promotions/fetchByType',
  async (type, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/sales/active/${encodeURIComponent(type)}`);
      return { type, data: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// FETCH all products with promotions assigned
export const fetchProductsWithPromotion = createAsyncThunk(
  'promotions/fetchAssignedProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/sales/assigned-products`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

// SLICE
const promotionSlice = createSlice({
  name: 'promotions',
  initialState: {
    loading: false,
    error: null,
    success: false,

    promotion: null,      // single created promotion
    promotions: [],       // list of all promotions
    assignedProducts: [], // products with promotion assigned

    seasonSale: [],
    todayDeal: [],
  },
  reducers: {
    resetPromotionState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
      state.promotion = null;
    },
  },
  extraReducers: (builder) => {
    builder

      // CREATE
      .addCase(createPromotion.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(createPromotion.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.promotion = action.payload;
      })
      .addCase(createPromotion.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // ASSIGN
      .addCase(assignPromotionToProducts.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(assignPromotionToProducts.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(assignPromotionToProducts.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload;
      })

      // FETCH ALL PROMOTIONS
      .addCase(fetchPromotions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPromotions.fulfilled, (state, action) => {
        state.loading = false;
        state.promotions = action.payload;
      })
      .addCase(fetchPromotions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // FETCH PRODUCTS BY TYPE
      .addCase(fetchPromotionByType.fulfilled, (state, action) => {
        const { type, data } = action.payload;
        if (type === 'Season Sale') {
          state.seasonSale = data;
        } else if (type === 'Today Deal') {
          state.todayDeal = data;
        }
      })
      .addCase(fetchPromotionByType.rejected, (state, action) => {
        state.error = action.payload;
      })

      // FETCH PRODUCTS WITH ASSIGNED PROMOTIONS
      .addCase(fetchProductsWithPromotion.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsWithPromotion.fulfilled, (state, action) => {
        state.loading = false;
        state.assignedProducts = action.payload;
      })
      .addCase(fetchProductsWithPromotion.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetPromotionState } = promotionSlice.actions;
export default promotionSlice.reducer;
