export const getRandomNumberFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const generateRandomString = (
  // eslint-disable-next-line no-undef
  length = _.random(5, 25),
  allSymbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
) => {
  let result = '';
  for (let i = 0; i < length; i++) {
    result += allSymbols.charAt(Math.floor(Math.random() * allSymbols.length));
  }

  return result;
};
