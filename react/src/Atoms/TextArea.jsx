import { InputGroup } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function TextArea(props) {
  return (
    <InputGroup className="mb-3">
      <FloatingLabel controlId={props.id} label={props.label}>
        <Form.Control
          as="textarea"
          placeholder="placeholding"
          value={props.value}
        />
      </FloatingLabel>
      {props.checkbox ? <InputGroup.Checkbox id={props.id + "Checkbox"}></InputGroup.Checkbox> : ""}
    </InputGroup>
  );
}

export default TextArea;
