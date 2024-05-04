import { style, styleVariants } from "@vanilla-extract/css";

export const button = style({
  outline: "none",
  position: "relative",
  display: "inline-block",
  fontWeight: 400,
  whiteSpace: "nowrap",
  textAlign: "center",
  backgroundImage: "none",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "all 0.3s",
  userSelect: "none",
  touchAction: "manipulation",
  borderRadius: "4px",
});

const palette = {
  primary: {
    color: "white",
    background: "#1677ff",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
  secondary: {
    color: "white",
    background: "green",
    boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.1)",
  },
};

export const buttonType = styleVariants(
  palette,
  (paletteColor) => paletteColor
);
