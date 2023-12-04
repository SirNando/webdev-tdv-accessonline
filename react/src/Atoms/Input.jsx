import { TextField } from "@mui/material";

export default function InputField({ label, value, name, type, onChange }) {
  return (
      <TextField
        className="w-full m-2"
        variant="outlined"
        label={label}
        type={type}
        value={value}
        onChange={(event) => onChange(event, name)}
      />
  );
}