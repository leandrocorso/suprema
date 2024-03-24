const basic = {
  blue: "#723EE6",
  cyan: "#3EE6DD",
  green: "#399B4F",
  yellow: "#E6BC23",
  red: "#C63156",
  gray: "#4F4F64",
  lightgray: "#dcdcdc",
  black: "#14141A",
  white: "#FAFAFA",
};

const semantic = {
  primary: basic.blue,
  info: basic.cyan,
  success: basic.green,
  warning: basic.yellow,
  danger: basic.red,
  default: basic.gray,
};

const pokemon = {
  red: "#E60033",
  blue: "#0095D9",
  yellow: "#FFD900",
  green: "#3EB370",
  black: "#2B2B2B",
  brown: "#965042",
  purple: "#884898",
  gray: "#7D7D7D",
  white: "#F3F3F3",
  pink: "#E38698",

  types: {
    normal: "#9FA19F",
    fighting: "#FF8000",
    flying: "#81B9EF",
    poison: "#9141CB",
    ground: "#915121",
    rock: "#AFA981",
    bug: "#91A119",
    ghost: "#704170",
    steel: "#60A1B8",
    fire: "#E62829",
    water: "#2980EF",
    grass: "#3FA129",
    electric: "#FAC000",
    psychic: "#EF4179",
    ice: "#3DCEF3",
    dragon: "#5060E1",
    dark: "#624D4E",
    fairy: "#EF70EF",
  },
};

export const colors = {
  ...basic,
  semantic,
  pokemon,
};
