// src/redux/suggestionSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { USER_API_END_POINT } from "../constants/userConstants";

// Thunks
export const fetchSearchResults = createAsyncThunk(
  "suggestion/fetchSearchResults",
  async (keyword, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        `${USER_API_END_POINT}/suggestions/search`,
        { keyword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const fetchUserSuggestions = createAsyncThunk(
  "suggestion/fetchUserSuggestions",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.get(
        `${USER_API_END_POINT}/suggestions/my-suggestions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

export const fetchLiveSuggestions = createAsyncThunk(
  "suggestion/fetchLiveSuggestions",
  async (keyword, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${USER_API_END_POINT}/suggestions/live?keyword=${keyword}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || { message: error.message });
    }
  }
);

// Initial State
const initialState = {
  searchResults: [],
  brands: [],
  mySuggestions: [],
  loading: false,
  error: null,
};

// Slice
const suggestionSlice = createSlice({
  name: "suggestion",
  initialState,
  reducers: {
    clearSearchResults: (state) => {
      state.searchResults = [];
      state.brands = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Search Results
      .addCase(fetchSearchResults.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSearchResults.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.searchResults = payload.products || [];
        state.brands = payload.brands || [];
      })
      .addCase(fetchSearchResults.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      })

      // Fetch User Suggestions
      .addCase(fetchUserSuggestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserSuggestions.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.mySuggestions = payload.suggestedProducts || [];
      })
      .addCase(fetchUserSuggestions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload?.message;
      })

      // Fetch Live Suggestions
      .addCase(fetchLiveSuggestions.fulfilled, (state, { payload }) => {
        state.searchResults = payload.products || [];
      });
  },
});

// Exports
export const { clearSearchResults } = suggestionSlice.actions;
export default suggestionSlice.reducer;
