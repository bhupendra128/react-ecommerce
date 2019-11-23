const dimension = {
  MOBILE: 360,
  TABLET: 780,
  DESKTOP: 1024,
  DESKTOP_XL: 1366,
  DESKTOP_XXL : 1440,
};

const mediaQuery = {
  mobile: `(min-width: ${dimension.MOBILE}px`,
  tablet: `(min-width: ${dimension.TABLET}`,
  desktop: `(min-width: ${dimension.DESKTOP}`,
  desktop_xl: `(min-width: ${dimension.DESKTOP_XL})`,
  desktop_xxl: `(min-width: ${dimension.DESKTOP_XXL})`,
}
