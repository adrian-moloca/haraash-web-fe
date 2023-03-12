/*  eslint no-param-reassign: ["error", { "props": false }]   */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AxiosInstance from '../utils/AxiosInstance';

export const fetchProducts = createAsyncThunk(
  'products/fetch',
  async (_, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();
    try {
      const resp = await AxiosInstance.post('/api/products/user', {
        userId: currentUser._id
      });
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// DELETE PRODUCT
export const deleteProduct = async (id) => {
  await AxiosInstance.delete(`/api/products/${id}`);
};

export const addProduct = createAsyncThunk(
  'products/add',
  async ({ form, update }, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();
    try {
      const data = { ...form, user: currentUser._id };
      const resp = update
        ? await AxiosInstance.put(`/api/products/${data._id}`, data)
        : await AxiosInstance.post('/api/products', data);
      return resp.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initialState = {
  myproducts: '',
  hasError: false,
  loading: false,
  message: ''
};

const newProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    myproductlist: (state, action) => {
      state.myproducts = action.payload;
    }
  },
  extraReducers: {
    [fetchProducts.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [fetchProducts.fulfilled]: (state, action) => {
      state.loading = true;
      state.hasError = false;
      state.myproducts = action.payload;
    },
    [fetchProducts.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.message = action.payload;
    },
    [addProduct.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [addProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.myproducts = action.payload;
    },
    [addProduct.rejected]: (state, action) => {
      state.loading = false;
      state.hasError = true;
      state.message = action.payload;
    }
  }
});

export const { myproductlist } = newProductSlice.actions;
export default newProductSlice.reducer;
