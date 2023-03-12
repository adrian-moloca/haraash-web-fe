/* eslint-disable prefer-const */
/* eslint-disable import/no-mutable-exports */
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import cartReducer from './cartRedux';
import userReducer from './userRedux';
import productReducer from './productRedux';
import resetPassReducer from './verifyEmailRedux';
import changePasswordReducer from './changePasswordRedux';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: ['resetPass']
};

const appReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  resetPass: resetPassReducer,
  changePassword: changePasswordReducer
});

const initialState = {
  user: {
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
  },
  cart: {
    products: [],
    quantity: 0,
    loading: false,
    cartFetched: false,
    hasError: false
  },
  changePassword: {
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
  },
  product: {
    myproducts: ''
  },
  resetPass: {
    email: '',
    verificationCode: '',
    password: '',
    showPassword: false,
    submitted: false,
    verifiedCode: false,
    registered: false,
    loading: false,
    hasError: false,
    message: ''
  }
};

const rootReducer = (state, action) => {
  if (action.type === 'user/USER_LOGOUT') {
    return initialState;
  }
  return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export let persistor = persistStore(store);
