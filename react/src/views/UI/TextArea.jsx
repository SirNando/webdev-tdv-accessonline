import { InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const sideCheckbox = (withCheckbox) => {
  if(withCheckbox) {
    return <InputGroup.Checkbox></InputGroup.Checkbox>
  } else {
    return
  }
}

function TextArea(props) {
  const label = props.label;
  const withCheckbox = props.checkbox;
  let defaultText = "";
  if (props.defaultText) defaultText = props.defaultText;

  return (
    <InputGroup className="mb-3">
      <FloatingLabel controlId="floatingTextarea" label={label}>
        <Form.Control as="textarea" placeholder="" defaultValue={defaultText} />
      </FloatingLabel>
      {sideCheckbox(withCheckbox)}
    </InputGroup>
  );
}

export default TextArea;
