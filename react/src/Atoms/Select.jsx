import { Select, MenuItem } from "@mui/material";

const SelectBox = ({ options, value, name, onChange }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={value}
      label="Test"
      onChange={(event) => onChange(event, name)}
      className="m-2 w-full"
    >
      {options.map((option, key) => {
        return (
          <MenuItem key={key} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
      <MenuItem value={undefined}></MenuItem>
    </Select>
  );
};

export default SelectBox;
