/* eslint-disable no-new */
/* eslint-disable no-undef */
import Compressor from 'compressorjs';

const handleCompressedUpload = async (file) => {
  //   return smallerImg;
  const result = await new Promise((resolve, reject) => {
    new Compressor(file, {
      quality: 0.6,
      convertSize: 2000000,
      success: resolve,
      error: reject
    });
  });

  return result;
};

export default handleCompressedUpload;
