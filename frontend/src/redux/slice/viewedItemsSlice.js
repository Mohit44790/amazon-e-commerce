// redux/slice/viewedItemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const viewedItemsSlice = createSlice({
  name: 'viewedItems',
  initialState: [],
  reducers: {
    addViewedItem: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload); // Add product ID if not already viewed
      }
    },
    clearViewedItems: () => [],
  },
});

export const { addViewedItem, clearViewedItems } = viewedItemsSlice.actions;
export default viewedItemsSlice.reducer;
