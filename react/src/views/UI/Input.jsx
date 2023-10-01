import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Input = (props) => {
  const inputStyles = {
    width: "100%",
  };

  return (
    <FloatingLabel
      style={inputStyles}
      controlId="floatingInput"
      label={props.label || ""}
      className="mb-3"
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
