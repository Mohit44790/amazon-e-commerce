// slices/giftCardSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';


// Create a new gift card
export const createGiftCard = createAsyncThunk(
    'giftCards/createGiftCard',
    async ({ code, balance, expirationDate }, { rejectWithValue,getState }) => {
      try {
        const token = getState().auth.token;

        const response = await axios.post(`${USER_API_END_POINT}/giftcards/create`, {
          code,
          balance,
          expirationDate,
        },{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
        });
        return response.data.giftCard;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );
  
  // Assign a gift card to a user
  export const assignGiftCardToUser = createAsyncThunk(
    'giftCards/assignToUser',
    async ({ userId, giftCardId }, { rejectWithValue, getState }) => {
      try {
        const token = getState().auth.token;

        const response = await axios.post(`${USER_API_END_POINT}/giftcards/assign`, {
          userId,
          giftCardId,
        },{
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
              },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data.message);
      }
    }
  );

export const fetchGiftCards = createAsyncThunk(
  'giftCards/fetchGiftCards',
  async () => {
    const response = await axios.get(`${USER_API_END_POINT}/giftcards/cards`);
    return response.data;
  }
);

export const fetchMyGiftCards = createAsyncThunk(
    'giftCards/fetchMyGiftCards',
    async (_, { getState, rejectWithValue }) => {
      try {
        const token = getState().auth.token;
        const response = await axios.get(`${USER_API_END_POINT}/giftcards/my`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );
  

export const redeemGiftCard = createAsyncThunk(
  'giftCards/redeemGiftCard',
  async ({ code, amount }, { getState, rejectWithValue }) => {
    const token = getState().auth.token;

    try {
      const response = await axios.post(`${USER_API_END_POINT}/giftcards/redeem`, { code, amount },{
          headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const giftCardSlice = createSlice({
  name: 'giftCards',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchMyGiftCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMyGiftCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // Show only assigned cards for user
      })
      .addCase(fetchMyGiftCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchGiftCards.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGiftCards.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchGiftCards.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(redeemGiftCard.fulfilled, (state, action) => {
        const index = state.items.findIndex(giftCard => giftCard.code === action.payload.code);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(createGiftCard.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(createGiftCard.rejected, (state, action) => {
        state.error = action.payload;
      })
        .addCase(assignGiftCardToUser.fulfilled, (state, action) => {
            const { userId, giftCardId } = action.payload;
            const index = state.items.findIndex(giftCard => giftCard._id === giftCardId);
            if (index !== -1) {
                state.items[index].assignedTo = userId;
            }
        })
        .addCase(redeemGiftCard.rejected, (state, action) => {
            state.error = action.payload;
        })
        
        .addCase(assignGiftCardToUser.rejected, (state, action) => {
            state.error = action.payload;
        });

  }
});

export default giftCardSlice.reducer;
