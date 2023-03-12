/* eslint-disable import/prefer-default-export */
import AxiosInstance from '../utils/AxiosInstance';

export const generateSignature = async (publicId) => {
  try {
    const resp = await AxiosInstance.post('/api/products/sign', {
      publicId
    });
    return resp;
  } catch (error) {
    console.log(error);
    return undefined;
  }
};
