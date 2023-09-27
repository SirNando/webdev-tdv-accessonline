import { InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function TextArea(props) {
  const label = props.label;
  let defaultText = "";
  if (props.defaultText) defaultText = props.defaultText;

  return (
    <InputGroup className="mb-3">
      <FloatingLabel controlId="floatingTextarea" label={label}>
        <Form.Control as="textarea" placeholder="" defaultValue={defaultText} />
      </FloatingLabel>
      <InputGroup.Checkbox></InputGroup.Checkbox>
    </InputGroup>
  );
}

export default TextArea;
