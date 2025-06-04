import { style } from "@vanilla-extract/css";

export const wrapper = style({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  margin: "10px auto",
});

export const inputLabel = style({
  color: "#424242",
  fontSize: "12px",
  fontWeight: 500,
  display: "contents",
  justifyContent: "center",
  alignItems: "center",
});

export const radioItem = style({
  color: "#424242",
  fontSize: "10px",
});

export const required = style({
  color: "red",
  fontSize: "14px",
  marginLeft: "1px",
});
