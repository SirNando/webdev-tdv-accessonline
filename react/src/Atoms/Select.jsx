import { Select, MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { InputLabel } from "@mui/material";
import { useState } from "react";

export default function SelectBox({ options, value = "", name, label }) {
  const [content, setContent] = useState(value);

  function handleChange(event) {
    setContent(event.target.value);
  }

  return (
    <FormControl className="w-full m-2">
      <InputLabel>{label}</InputLabel>
      <Select
        value={content}
        name={name}
        onChange={handleChange}
        label={label}
        autoWidth
      >
        {options.map((option, key) => {
          return (
            <MenuItem value={option.value} key={key}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
