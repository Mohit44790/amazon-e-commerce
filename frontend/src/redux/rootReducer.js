// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";
import productReducer from "./slice/productSlice";
import cartReducer from "./slice/cartSlice";
import suggestionReducer from "./slice/suggestionSlice";
import categoryReducer from "./slice/categorySlice";
import brandReducer from "./slice/brandSlice";
import orderReducer from "./slice/orderSlice";
import addressReducer from './slice/addressSlice';
import reviewReducer from './slice/reviewSlice';
import promotionReducer from './slice/todaySaleSlice';
import giftCardReducer from './slice/giftCardSlice';
import groceryReducer from './slice/grocerySlice';
import viewedItemsReducer from './slice/viewedItemsSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer,
  suggestion: suggestionReducer,
  brand: brandReducer,
  order: orderReducer,
  category: categoryReducer,
  address: addressReducer,
  reviews: reviewReducer,
  promotions: promotionReducer,
  giftCards: giftCardReducer,
  grocery: groceryReducer,
  viewedItems: viewedItemsReducer,
});

export default rootReducer;
