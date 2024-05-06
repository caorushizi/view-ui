import { style } from "@vanilla-extract/css";

export const managerWrapper = style({
  display: "flex",
  height: "100vh",
});

export const left = style({
  width: 200,
  flexShrink: 0,
  borderRight: "1px solid #f0f0f0",
});

export const center = style({
  flexGrow: 1,
});

export const right = style({
  width: 200,
  flexShrink: 0,
  borderLeft: "1px solid #f0f0f0",
});

export const draggable = style({
  cursor: "grab",
  border: "1px solid #f0f0f0",
  borderRadius: 4,
  margin: 10,
  padding: 10,
});

export const droppable = style({
  height: 200,
  border: "1px dashed #f0f0f0",
  margin: 10,
});
