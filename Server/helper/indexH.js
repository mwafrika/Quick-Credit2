/* eslint-disable linebreak-style */
/* eslint-disable import/prefer-default-export */
/* eslint-disable linebreak-style */
export const replacer = (key, value) => {
  if (key === 'password') return undefined;
  if (key === 'id') return undefined;
  return value;
};
