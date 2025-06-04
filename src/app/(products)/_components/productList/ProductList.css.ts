import { style } from "@vanilla-extract/css";
import { styleVariants } from "@vanilla-extract/css";

const baseListContainer = style({
  width: "100%",
  marginTop: "10px",
  padding: 0,
});

export const listContainer = styleVariants({
  list: [
    baseListContainer,
    {
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      gap: "10px",
    },
  ],
  grid: [
    baseListContainer,
    {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "10px",
    },
  ],
});
