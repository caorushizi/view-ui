// FIXME: 使用别名进行引入
import { calc } from "@vanilla-extract/css-utils";
import { vars } from "../../theme/variables.css";
import { createTheme, style, styleVariants } from "@vanilla-extract/css";

export const [radioTheme, radioVars] = createTheme({
  size: "16",
  radioColor: "#fff",
  dotSize: "6",
});

export const radioWrapper = style({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: vars.color.text,
  fontSize: vars.text.fontSize,
  lineHeight: vars.text.lineHeight,
  listStyle: "none",
  fontFamily: vars.text.fontFamily,
  display: "inline-flex",
  alignItems: "baseline",
  marginInlineStart: 0,
  marginInlineEnd: 8,
  cursor: "pointer",
});

export const radioWrapperDisabled = style({
  cursor: "not-allowed",
  color: vars.color.disabled,
});

export const radio = style({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: vars.color.text,
  fontSize: vars.text.fontSize,
  lineHeight: vars.text.lineHeight,
  listStyle: "none",
  fontFamily: vars.text.fontFamily,
  position: "relative",
  display: "inline-block",
  outline: "none",
  cursor: "pointer",
  alignSelf: "center",
  borderRadius: "50%",
});

export const radioDisabled = style({
  cursor: "not-allowed",
});

export const radioChecked = style({
  ":after": {
    position: "absolute",
    insetBlockStart: 0,
    insetInlineStart: 0,
    width: "100%",
    height: "100%",
    border: `${vars.line.width} ${vars.line.style} ${vars.color.primary}`,
    borderRadius: "50%",
    visibility: "hidden",
    opacity: 0,
    content: "",
  },
});

export const radioInput = style({
  position: "absolute",
  inset: 0,
  zIndex: 1,
  cursor: "pointer",
  opacity: 0,
  selectors: {
    [`${radioDisabled} &`]: {
      cursor: "not-allowed",
    },
  },
});

export const radioInner = style({
  boxSizing: "border-box",
  position: "relative",
  insetBlockStart: 0,
  insetInlineStart: 0,
  display: "block",
  width: `calc(1px * ${radioVars.size})`,
  height: `calc(1px * ${radioVars.size})`,
  backgroundColor: vars.bg.container,
  borderColor: vars.color.border,
  borderStyle: "solid",
  borderWidth: vars.line.width,
  borderRadius: "50%",
  transition: `all ${vars.motion.durationMid}`,
  ":after": {
    boxSizing: "border-box",
    position: "absolute",
    insetBlockStart: "50%",
    insetInlineStart: "50%",
    display: "block",
    width: `calc(1px * ${radioVars.size})`,
    height: `calc(1px * ${radioVars.size})`,
    marginBlockStart: `calc(1px * ${radioVars.size} / -2)`,
    marginInlineStart: `calc(1px * ${radioVars.size} / -2)`,
    backgroundColor: radioVars.radioColor,
    borderBlockStart: 0,
    borderInlineStart: 0,
    borderRadius: "50%",
    transform: "scale(0)",
    opacity: 0,
    transition: `all ${vars.motion.durationMid}`,
    content: "",
  },
  selectors: {
    [`${radioInput}:checked + &`]: {
      backgroundColor: vars.color.primary,
      borderColor: vars.color.primary,
    },
    [`${radioInput}:checked + &:after`]: {
      transform: `scale(${calc(radioVars.dotSize).divide(radioVars.size)})`,
      opacity: 1,
      transition: `all ${vars.motion.durationSlow} ${vars.motion.easeInOutCirc}`,
    },
  },
});

export const radioGroup = style({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: vars.color.text,
  fontSize: vars.text.fontSize,
  lineHeight: vars.text.lineHeight,
  listStyle: "none",
  fontFeatureSettings: "tnum",
  display: "inline-block",
});
