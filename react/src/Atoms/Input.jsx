import { TextField } from "@mui/material";
import { useState } from "react";
import Checkbox from "./Checkbox";

export default function Input({
  label,
  value = "",
  name,
  type = "text",
  multiline,
  rows = 2,
  checkbox,
}) {
  const [content, setContent] = useState(value);

  // Workaround for datetime inputs since there could be overlapping
  const labelProps = type === "date" ? { shrink: true } : {};

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <>
      <TextField
        className="w-full m-2"
        variant="outlined"
        InputLabelProps={labelProps}
        multiline={multiline}
        minRows={rows}
        maxRows={10}
        name={name}
        label={label}
        type={type}
        value={content}
        onChange={handleChange}
      />
      {checkbox && <Checkbox name={name + "_check"} />}
    </>
  );
}
