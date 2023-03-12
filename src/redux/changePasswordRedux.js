/* eslint-disable no-param-reassign */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../utils/AxiosInstance';

export const setNewPassword = createAsyncThunk(
  'setPassword',
  async (_, { getState, rejectWithValue }) => {
    const {
      changePassword: { password1, password2, password3 },
      user: { currentUser }
    } = getState();
    try {
      if (password2 === password3) {
        const response = await AxiosInstance.post('/api/auth/changepassword', {
          email: currentUser.email,
          newPassword: password2,
          oldPassword: password1
        });
        return response.data;
      }
      return rejectWithValue('Your new passwords dont match');
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initialState = {
  password1: '',
  password2: '',
  password3: '',
  showPassword1: false,
  showPassword2: false,
  showPassword3: false,
  confirmedPass: false,
  passwordMarched: false,
  submitted: false,
  loading: false,
  hasError: false,
  message: ''
};

const changePassswordSlice = createSlice({
  name: 'changePassword',
  initialState,
  reducers: {
    inputPassword1: (state, action) => {
      state.password1 = action.payload;
    },
    inputPassword2: (state, action) => {
      state.password2 = action.payload;
    },
    inputPassword3: (state, action) => {
      state.password3 = action.payload;
    },
    viewPassword1: (state) => {
      state.showPassword1 = !state.showPassword1;
    },
    viewPassword2: (state) => {
      state.showPassword2 = !state.showPassword2;
    },
    viewPassword3: (state) => {
      state.showPassword3 = !state.showPassword3;
    },
    resetState: (state) => {
      state.password1 = '';
      state.password2 = '';
      state.password3 = '';
      state.showPassword1 = false;
      state.showPassword2 = false;
      state.showPassword3 = false;
      state.confirmedPass = false;
      state.passwordMarched = false;
      state.submitted = false;
      state.loading = false;
      state.hasError = false;
      state.message = '';
    }
  },
  extraReducers: {
    [setNewPassword.pending]: (state) => {
      state.loading = true;
      state.submitted = true;
      state.confirmedPass = false;
      state.passwordMarched = false;
    },
    [setNewPassword.fulfilled]: (state, action) => {
      state.loading = false;
      state.hasError = false;
      state.message = action.payload;
      state.confirmedPass = false;
      state.passwordMarched = false;
      state.password1 = '';
      state.password2 = '';
      state.password3 = '';
      state.showPassword1 = false;
      state.showPassword2 = false;
      state.showPassword3 = false;
      state.submitted = false;
    },
    [setNewPassword.rejected]: (state, action) => {
      if (action.payload === 'Your new passwords dont match') {
        state.passwordMarched = true;
      } else {
        state.passwordMarched = false;
      }
      if (action.payload === 'Your current password is wrong.') {
        state.confirmedPass = true;
      } else {
        state.confirmedPass = false;
      }
      state.message = action.payload;
      state.hasError = true;
    }
  }
});

export const {
  resetState,
  viewPassword1,
  viewPassword2,
  viewPassword3,
  inputPassword1,
  inputPassword2,
  inputPassword3
} = changePassswordSlice.actions;

export default changePassswordSlice.reducer;
