import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "0 20px",
  height: "100%",
  margin: "50px auto",
  maxWidth: "1024px",
});

export const resultPrice = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginBottom: "10px",
});

export const price = style({
  textDecoration: "line-through",
  color: "rgb(138 138 138)",
  fontSize: "13px",
  margin: 0,
});

export const totalPrice = style({
  color: "black",
  fontSize: "18px",
  fontWeight: 600,
  margin: "0 0 0 3px",
});

export const priceContainer = style({
  display: "flex",
});

export const discount = style({
  color: "rgb(243 17 16)",
  fontSize: "18px",
  fontWeight: 600,
  margin: 0,
});
