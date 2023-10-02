import { Form } from "react-bootstrap";

const Checkbox = (props) => {
  const label = props.label;
  return <Form.Check type="checkbox" id={`default-checkbox`} label={label} />;
};

export default Checkbox;
