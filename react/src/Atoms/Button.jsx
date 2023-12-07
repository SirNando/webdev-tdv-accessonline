import { Button } from "@mui/material";

export default function ButtonElement({ children, secondary = false, type }) {
  return (
    <Button variant={secondary ? "outlined" : "contained"} type={type}>{children}</Button>
  );
}
