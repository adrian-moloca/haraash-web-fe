/*  eslint no-param-reassign: ["error", { "props": false }]   */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../utils/AxiosInstance';

export const populateCart = createAsyncThunk(
  'FetchCart',
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();

    if (currentUser === null) {
      return rejectWithValue(
        'You are not authorized. You must login for access'
      );
    }
    try {
      const url = `/api/carts/find/${currentUser._id}`;
      const resp = await AxiosInstance(url);
      return resp.data.products;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteOneProduct = createAsyncThunk(
  'delete/product',
  async (item, { getState, rejectWithValue }) => {
    const {
      user: { currentUser },
      cart: { products }
    } = getState();
    if (currentUser === null) {
      return rejectWithValue(
        'You are not authorized. You must login for access'
      );
    }

    // filter out the product
    const newArr = products.filter((product) => {
      if (product._id !== item._id) {
        return product;
      }
      return undefined;
    });

    try {
      await AxiosInstance.delete(`api/carts/product/${item._id}`);
      return newArr;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addProductToCart = createAsyncThunk(
  'add/product',
  async (item, { getState, rejectWithValue }) => {
    const {
      cart,
      user: { currentUser }
    } = getState();

    // Check duplicates
    if (cart.products.some((cartProduct) => cartProduct._id === item._id)) {
      return rejectWithValue('Items already in your favourites');
    }

    try {
      await AxiosInstance.post('/api/carts', {
        product: item,
        user: currentUser._id
      });
      return item;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const deleteCart = createAsyncThunk(
  'delete/allProduct',
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();
    try {
      const resp = await AxiosInstance.delete(`/api/carts/${currentUser._id}`);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initialState = {
  products: [],
  quantity: 0,
  loading: false,
  cartFetched: false,
  hasError: false
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state) => {
      state.products = [];
      state.quantity = 0;
    },
    populate: (state, action) => {
      state.products = action.payload;
      state.quantity = state.products.length;
    }
  },
  extraReducers: {
    [populateCart.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [populateCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.cartFetched = true;
      state.hasError = false;
      state.products = action.payload;
      state.quantity = state.products.length;
    },
    [populateCart.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    [deleteOneProduct.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [deleteOneProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.products = action.payload;
      state.quantity = state.products.length;
    },
    [deleteOneProduct.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    [addProductToCart.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [addProductToCart.fulfilled]: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.products.push(action.payload);
      state.quantity = state.products.length;
    },
    [addProductToCart.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    },
    [deleteCart.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [deleteCart.fulfilled]: (state) => {
      state.loading = false;
      state.hasError = false;
      state.products = [];
      state.quantity = 0;
    },
    [deleteCart.rejected]: (state) => {
      state.loading = false;
      state.hasError = true;
    }
  }
});

export const { addProduct, resetCart, removeProduct, populate } =
  cartSlice.actions;
export default cartSlice.reducer;
