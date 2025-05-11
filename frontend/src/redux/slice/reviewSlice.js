import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { USER_API_END_POINT } from '../constants/userConstants';

// Fetch Reviews for a Product
export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (productId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${USER_API_END_POINT}/reviews/${productId}`);
      return response.data; // Return data from the API
    } catch (error) {
      return rejectWithValue(error.response.data); // Return error message
    }
  }
);

// Add a Review
export const addReview = createAsyncThunk(
    'reviews/addReview',
    async (reviewData, { getState, rejectWithValue }) => {
      const token = getState().auth.token;
  
      try {
        const response = await axios.post(
          `${USER_API_END_POINT}/reviews/create`,
          reviewData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        return response.data.review; // return the created/updated review
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  

// Delete a Review
export const deleteReview = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId, { getState, rejectWithValue }) => {
      const token = getState().auth.token;
  
      try {
        await axios.delete(`${USER_API_END_POINT}/reviews/${reviewId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // 👈 include token here
          },
        });
        return reviewId;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true; // Set loading to true while fetching reviews
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload; // Store fetched reviews in state
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message; // Handle error on failure
      })
      .addCase(addReview.fulfilled, (state, action) => {
        const updatedReview = action.payload;
        const existingIndex = state.reviews.findIndex(
          (r) => r._id === updatedReview._id
        );
      
        if (existingIndex !== -1) {
          state.reviews[existingIndex] = updatedReview;
        } else {
          state.reviews.push(updatedReview);
        }
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((review) => review._id !== action.payload); // Remove deleted review from state
      });
  },
});

export default reviewSlice.reducer;
