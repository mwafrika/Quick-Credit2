/* eslint-disable linebreak-style */
function replacer(key, value) {
  if (key === 'password') return undefined;
  if (key === 'id') return undefined;
  return value;
}
module.exports = replacer;
