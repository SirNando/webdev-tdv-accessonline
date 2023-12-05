import { TextField } from "@mui/material";
import { useState } from "react";

export default function InputField({ label, value = "", name, type = "text", multiline, rows = 2 }) {
  const [content, setContent] = useState(value);


  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <TextField
      className="w-full m-2"
      variant="outlined"
      multiline={multiline}
      rows={rows}
      name={name}
      label={label}
      type={type}
      value={content}
      onChange={handleChange}
    />
  );
}
