import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const baseContainer = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  border: "1px solid rgb(219, 222, 226)",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100%",
});

export const itemContent = style({
  padding: 10,
  width: "100%",
});

export const itemContainer = styleVariants({
  list: [baseContainer],
  grid: [baseContainer, { flexDirection: "column" }],
});

export const description = style({
  color: "rgb(130 130 130)",
  fontSize: "14px",
  fontWeight: 500,
});

export const itemDescription = styleVariants({
  list: [description],
  grid: [
    description,
    {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  ],
});

export const thumbnail = style({
  padding: "4px",
});

export const title = style({
  fontSize: "16px",
  fontWeight: 600,
  color: "rgb(32, 39, 49)",
  width: "100%",
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
