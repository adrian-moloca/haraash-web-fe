/* eslint-disable import/prefer-default-export */

const removeEmptyProperties = (data) => {
  const assignedData = data;
  const arr = Object.keys(data);

  arr.forEach((el) => {
    if (assignedData[el] === '' || assignedData[el] === null) {
      delete assignedData[el];
    }
  });
  return assignedData;
};

export { removeEmptyProperties };
