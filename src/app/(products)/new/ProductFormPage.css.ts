import { style } from "@vanilla-extract/css";

export const wrapper = style({
  padding: "0 20px",
  height: "100%",
  minHeight: "100vh",
  margin: "50px auto",
  maxWidth: "700px",
});

export const submit = style({
  width: "100%",
  border: "1px solid rgb(219, 222, 226)",
  padding: "10px",
  backgroundColor: "#0070f3",
  color: "white",
  selectors: {
    "&:hover": {
      backgroundColor: "#0059c1",
    },
    "&:disabled": {
      backgroundColor: "#999",
      cursor: "not-allowed",
    },
  },
});
