import colors from './colors.js';
import dimension from './screen.js';

const theme = {
LIGHT_BLUE: colors.LIGHT_BLUE,
RED: colors.RED,
};

const themes = {
  dimension,
  ...theme,
}

export default themes;

