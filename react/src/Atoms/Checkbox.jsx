import { useState } from "react";
import { Checkbox } from "@mui/material";

export default function CheckboxElement({ name }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    setIsChecked((prevState) => !prevState);
    console.log(event.target);
  }

  return <Checkbox onChange={handleClick} name={name} value={isChecked} />;
}
