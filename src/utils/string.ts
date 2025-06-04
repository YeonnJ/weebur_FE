export const getNumricString = (value: string) => {
  if (!value) return "";
  return value.replace(/[^0-9]/, "");
};
