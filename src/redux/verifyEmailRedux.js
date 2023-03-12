/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../utils/AxiosInstance';

export const VerifyEmail = createAsyncThunk(
  'verification/email',
  async ({ data, setData }, { rejectWithValue }) => {
    const { email, verificationCode, submitted } = data;

    if (email === '') {
      return rejectWithValue('Please fill your email before submitting');
    }
    try {
      const response = await AxiosInstance.post('/api/auth/verification', {
        email,
        verificationCode,
        submitted
      });
      setData((prev) => ({
        ...prev,
        submitted: true
      }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const checkCode = createAsyncThunk(
  'verification/code',
  async ({ data, setData }, { rejectWithValue }) => {
    const { email, verificationCode, submitted } = data;

    if (verificationCode === '') {
      return rejectWithValue(
        'Please fill in the confirmation code sent to your email'
      );
    }
    try {
      const response = await AxiosInstance.post('/api/auth/verification', {
        email,
        verificationCode,
        submitted
      });
      setData((prev) => ({
        ...prev,
        verifiedCode: true
      }));

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const resetPassApi = createAsyncThunk(
  'newPassword',
  async ({ data, setData }, { rejectWithValue }) => {
    const { email, password, verifiedCode } = data;
    if (password === '') {
      return rejectWithValue('Please fill your new password before submitting');
    }

    try {
      const response = await AxiosInstance.post('/api/auth/resetPassword', {
        email,
        password,
        verifiedCode
      });
      setData((prev) => ({
        ...prev,
        redirect: true
      }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  registered: false,
  loading: false,
  hasError: false,
  message: ''
};

const resetPassSlice = createSlice({
  name: 'resetPass',
  initialState,
  reducers: {
    resetState: (state) => {
      state.registered = false;
      state.loading = false;
      state.hasError = false;
      state.message = null;
    },
    verifyFailure: (state, action) => {
      state.message = action.payload;
      state.hasError = false;
    }
  },
  extraReducers: {
    [VerifyEmail.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [VerifyEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.message = action.payload;
    },
    [VerifyEmail.rejected]: (state, action) => {
      state.message = action.payload;
      state.hasError = true;
    },
    [checkCode.pending]: (state) => {
      state.loading = true;
    },
    [checkCode.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.hasError = false;
    },
    [checkCode.rejected]: (state, action) => {
      state.message = action.payload;
      state.hasError = true;
    },
    [resetPassApi.pending]: (state) => {
      state.loading = true;
      state.hasError = false;
    },
    [resetPassApi.fulfilled]: (state, action) => {
      state.message = action.payload;
      state.loading = false;
      state.hasError = false;
      state.registered = true;
    },
    [resetPassApi.rejected]: (state, action) => {
      state.message = action.payload;
      state.hasError = true;
    }
  }
});

export const { resetState, verifyFailure } = resetPassSlice.actions;

export default resetPassSlice.reducer;
