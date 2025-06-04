import { style } from "@vanilla-extract/css";

export const productsMainPageContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: "0 auto",
  maxWidth: "1024px",
  marginTop: "50px",
  width: "100%",
});

export const productsNewPageContainer = style({
  padding: "0 20px",
  height: "100%",
  margin: "50px auto",
  maxWidth: "1024px",
});
