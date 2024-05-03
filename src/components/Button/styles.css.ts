import {
  createTheme,
  style,
  createVar,
  styleVariants,
} from "@vanilla-extract/css";

export const accentVar = createVar();

export const [themeClass, vars] = createTheme({
  color: {
    brand: "blue",
  },
  font: {
    body: "arial",
  },
});

const palette = {
  primary: "blue",
  secondary: "aqua",
};

export const exampleStyle = style({
  backgroundColor: vars.color.brand,
  fontFamily: vars.font.body,
  color: "white",
  padding: 10,
  border: 0,
});

const base = style({ padding: 12 });

export const variant = styleVariants(palette, (paletteColor) => [
  base,
  { background: paletteColor },
]);
