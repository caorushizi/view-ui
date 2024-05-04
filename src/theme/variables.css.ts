import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const vars = createThemeContract({
  palette: {},
  color: {
    primary: null,
    text: null,
    border: null,
    disabled: null,
  },
  text: {
    fontSize: null,
    fontFamily: null,
    lineHeight: null,
  },
  bg: {
    container: null,
  },
  line: {
    width: null,
    style: null,
  },
  motion: {
    durationMid: null,
    durationSlow: null,
    easeInOutCirc: null,
  },
  padding: {
    xs: null,
  },
});

createGlobalTheme(":root", vars, {
  palette: {},
  color: {
    primary: "#1890ff",
    text: "rgba(0,0,0,0.88)",
    border: "#d9d9d9",
    disabled: "rgba(0,0,0,0.25)",
  },
  text: {
    fontSize: "14px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.5",
  },
  bg: {
    container: "#fff",
  },
  line: {
    width: "1px",
    style: "solid",
  },
  motion: {
    durationMid: "0.2s",
    durationSlow: "0.3s",
    easeInOutCirc: "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  },
  padding: {
    xs: "8px",
  },
});
