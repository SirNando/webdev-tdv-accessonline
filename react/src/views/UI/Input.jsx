import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

const Input = (props) => {
  const label = props.label;
  var type = "text";
  const inputStyles = {
    width: "100%",
  };
  const value = props.value;

  if (props.type) type = props.type;

  return (
    <FloatingLabel
      style={inputStyles}
      controlId="floatingInput"
      label={label}
      className="mb-3"
    >
      <Form.Control type={type} placeholder="" value={value}/>
    </FloatingLabel>
  );
};

export default Input;
