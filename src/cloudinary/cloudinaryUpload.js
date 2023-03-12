/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
/* eslint-disable prefer-destructuring */

import axios from 'axios';
import { generateSignature } from './generateSignature';

const cldName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const preset = process.env.REACT_APP_CLOUDINARY_API_PRESET;
const apiKey = process.env.REACT_APP_CLOUDINARY_API_KEY;

export const uploadImage = async (image, currentUser, form) => {
  if (image) {
    const API_ENDPOINT = `https://api.cloudinary.com/v1_1/${cldName}/image/upload`;
    const imageId = form ? form.public_id : currentUser.public_id;
    const sign = await generateSignature(imageId);
    const { signature, timestamp } = sign.data;

    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', preset);
    data.append('cloud_name', cldName);
    data.append('api_key', apiKey);
    data.append('signature', signature);
    data.append('timestamp', timestamp);
    if (imageId) {
      const id = imageId.split('/')[1];
      data.append('public_id', id);
    }

    const resp = await axios.post(API_ENDPOINT, data);
    return resp;
  }
  // ERROR MESSAGE IF IMAGE IS NOT SUPPLIED
};
