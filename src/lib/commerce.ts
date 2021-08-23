import Commerce from '@chec/commerce.js';

export const commerce = new Commerce(
  <string>process.env.REACT_APP_CHEC_PUBLIC_KEY,
  true
);
