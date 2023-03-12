/* eslint-disable camelcase */
/*  eslint no-param-reassign: ["error", { "props": false }]   */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AxiosInstance from '../utils/AxiosInstance';
import { removeEmptyProperties } from '../utils/removeEmptyProperties';
import { uploadImage } from '../cloudinary/cloudinaryUpload';
import handleCompressedUpload from '../cloudinary/imgComp';

export const login = createAsyncThunk(
  'login/user',
  async (user, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post('/api/auth/login', user);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutUser = async (dispatch, USER_LOGOUT) => {
  dispatch(USER_LOGOUT());
};

export const register = createAsyncThunk(
  'register/user',
  async ({ form, setForm, initialForm }, { rejectWithValue }) => {
    try {
      const res = await AxiosInstance.post('/api/auth/register', form);
      setForm(initialForm);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Upload image to cloudinary
export const imgUpload = createAsyncThunk(
  'uploadimg/user',
  async ({ image, setForm }, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();

    if (image) {
      try {
        const compImg = await handleCompressedUpload(image);
        const res = await uploadImage(compImg, currentUser);
        setForm((prev) => ({
          ...prev,
          img: res.data.secure_url,
          public_id: res.data.public_id
        }));
        return res.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
    return undefined;
  }
);

// Update user
export const updateUser = createAsyncThunk(
  'update/user',
  async ({ form, setSuccess }, { getState, rejectWithValue }) => {
    const {
      user: { currentUser }
    } = getState();
    try {
      const userData = removeEmptyProperties({
        ...form
      });
      const res = await AxiosInstance.put(`/api/users/${currentUser._id}`, {
        userData
      });
      setSuccess(true);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initialState = {
  currentUser: '',
  pulseOnce: true,
  success: false,
  error: false,
  lodaing: false,
  message: '',
  email: '',
  password: '',
  username: '',
  telephone: '',
  consent: false,
  showPassword: false,
  img: '',
  public_id: '',
  city: '',
  submitted: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    animeOnce: (state) => {
      state.pulseOnce = false;
    },
    USER_LOGOUT: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.success = false;
      state.message = '';
      state.error = false;
    },
    reset: (state) => {
      state.success = false;
      state.error = false;
      state.lodaing = false;
      state.message = '';
      state.email = '';
      state.password = '';
      state.username = '';
      state.telephone = '';
      state.consent = false;
      state.showPassword = false;
      state.pulseOnce = true;
    },
    resetProfile: (state) => {
      state.email = '';
      state.username = '';
      state.telephone = '';
      state.img = '';
      state.public_id = '';
      state.city = '';
      state.success = false;
      state.error = false;
      state.pulseOnce = true;
    },
    registerStart: (state) => {
      state.loading = true;
    },
    registerSucess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    registerFailure: (state, action) => {
      state.message = action.payload;
      state.error = true;
    },
    updateStart: (state) => {
      state.loading = true;
    },
    updateSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = '';
      state.error = false;
      state.currentUser = action.payload;
    },
    updateFailure: (state) => {
      state.loading = false;
      state.error = true;
      state.message = 'Failed to update user profile';
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.success = false;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = '';
      state.error = false;
      state.pulseOnce = true;
      state.currentUser = action.payload;
    },
    [login.rejected]: (state, action) => {
      state.error = true;
      state.loading = false;
      if (action.payload) {
        state.message = action.payload;
      } else {
        state.message = 'General server error';
      }
      state.success = false;
    },
    [register.pending]: (state) => {
      state.loading = true;
      state.error = false;
      state.isFetching = true;
      state.success = false;
    },
    [register.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.message = action.payload;
    },
    [register.rejected]: (state, action) => {
      state.error = true;
      state.success = false;
      state.isFetching = false;
      state.message = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.success = false;
      state.loading = true;
      state.error = false;
      state.isFetching = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.isFetching = false;
      state.loading = false;
      state.success = true;
      state.error = false;
      state.currentUser = action.payload;
    },
    [updateUser.rejected]: (state, action) => {
      state.success = false;
      state.error = true;
      state.isFetching = false;
      state.message = action.payload.message;
    }
  }
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  USER_LOGOUT,
  reset,
  registerStart,
  registerSucess,
  registerFailure,
  updateStart,
  updateSuccess,
  updateFailure,
  setImg,
  setCity,
  resetProfile,
  animeOnce
} = userSlice.actions;

export default userSlice.reducer;
