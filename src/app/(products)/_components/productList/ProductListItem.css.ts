import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const baseContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  border: "1px solid rgb(219, 222, 226)",
  marginBottom: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
});

export const itemContainer = styleVariants({
  list: [baseContainer],
  grid: [baseContainer, { flexDirection: "column" }],
});

export const itemContent = styleVariants({
  list: [],
  grid: [{ padding: "10px" }],
});

export const description = style({
  color: "rgb(130 130 130)",
  fontSize: "14px",
  fontWeight: 500,
});

export const itemDescription = styleVariants({
  list: [description],
  grid: [description, { height: "90px", overflow: "auto" }],
});

export const thumbnail = style({
  padding: "4px",
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "rgb(32, 39, 49)",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "260px",
});

export const rating = style({
  color: "rgb(88 88 88)",
  fontSize: "14px",
  fontWeight: 600,
});

export const reviews = style({
  fontWeight: 400,
  marginLeft: "2px",
  fontSize: "13px",
});
