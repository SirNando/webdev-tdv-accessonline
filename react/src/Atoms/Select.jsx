import "./Select.css"
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SelectOptions = (props) => {
  const options = props.options;

  const optionElements = options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return <>{optionElements}</>;
};

const Select = (props) => {
  const options = props.options;

  return (
    <>
      <FloatingLabel
        controlId={props.id}
        label={props.label}
        className="mb-3 Select"
      >
        <Form.Select value={props.value}>
          <SelectOptions options={options}></SelectOptions>
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default Select;
