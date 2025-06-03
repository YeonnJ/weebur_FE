import { style } from "@vanilla-extract/css";

export const formContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "48px",
  margin: "auto",
  padding: "0 20px",
});

export const input = style({
  width: "100%",
  display: "flex",
  border: "1px solid rgb(216, 220, 226)",
  padding: "8px 12px",
  height: "48px",
  borderRadius: "8px",
  marginBottom: "10px",
  boxSizing: "border-box",
  margin: "5px auto",
});

export const inputLabel = style({
  color: "#424242",
  fontSize: "12px",
  margin: "10px 0 0 0",
  fontWeight: 500,
});
