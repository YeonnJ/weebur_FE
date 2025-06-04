import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "0 20px",
  height: "100%",
  margin: "50px auto",
  maxWidth: "700px",
});

export const resultPrice = style({
  width: "100%",
  boxSizing: "border-box",
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

export const submit = style({
  width: "100%",
  border: "1px solid rgb(219, 222, 226)",
  padding: "10px",
  backgroundColor: "#0070f3",
  color: "white",
  cursor: "pointer",
  selectors: {
    "&:hover": {
      backgroundColor: "#0059c1",
    },
    "&:disabled": {
      backgroundColor: "#c9c9c9",
      cursor: "not-allowed",
    },
  },
});
