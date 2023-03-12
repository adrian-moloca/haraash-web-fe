/* eslint-disable no-param-reassign */
/* eslint-disable dot-notation */

import axios from 'axios';

let store;

export const injectStore = (_store) => {
  store = _store;
};

const url =
  process.env.REACT_APP_NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : process.env.REACT_APP_API_ROUTE;

const AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: url,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// eslint-disable-next-line consistent-return
AxiosInstance.interceptors.request.use((config) => {
  if (store.getState().user.currentUser) {
    config.headers.authorization = `Bearer ${
      store.getState().user.currentUser.accessToken
    }`;
    return config;
  }
  return config;
});

export default AxiosInstance;
