const defaultSizes = {
  xxxxl: "2rem",
  xxxl: "1.8rem",
  xxl: "1.6rem",
  xl: "1.4rem",
  lg: "1.2rem",
  md: "1rem",
  sm: "0.8rem",
  xs: "0.6rem",
  xxs: "0.4rem",
};

const family = {
  default: '"Roboto", sans-serif',
};

const size = {
  ...defaultSizes,
  h1: defaultSizes.xxxxl,
  h2: defaultSizes.xxxl,
  h3: defaultSizes.xxl,
  h4: defaultSizes.xl,
  h5: defaultSizes.lg,
  h6: defaultSizes.lg,
};

export const fonts = {
  family,
  size,
};
