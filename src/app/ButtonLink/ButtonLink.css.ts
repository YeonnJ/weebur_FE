import { style } from "@vanilla-extract/css";

export const button = style({
  padding: "10px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "none",
  backgroundColor: "#0070f3",
  color: "white",
  cursor: "pointer",
  transition: "background-color 0.2s ease",
  textDecoration: "none",
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
