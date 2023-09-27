import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Input = (props) => {
  const label = props.label;
  var type = "text";
  const inputStyles = {
    width: "100%",
  };

  if (props.type) type = props.type;

  return (
    <FloatingLabel
      style={inputStyles}
      controlId="floatingInput"
      label={label}
      className="mb-3"
    >
      <Form.Control type={type} placeholder="" />
    </FloatingLabel>
  );
};

export default Input;
