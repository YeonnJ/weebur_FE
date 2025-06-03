import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: "0 auto",
  maxWidth: "1200px",
});

const baseListContainer = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "10px",
});

export const listContainer = styleVariants({
  list: [baseListContainer],
  grid: [
    baseListContainer,
    {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "20px",
    },
  ],
});
