import "./Input.css";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Input = (props) => {
  return (
    <FloatingLabel
      controlId={props.id}
      label={props.label}
      className="mb-3 Input"
    >
      <Form.Control
        type={props.type || "text"}
        placeholder="placeholding"
        value={props.value}
      />
    </FloatingLabel>
  );
};

export default Input;
