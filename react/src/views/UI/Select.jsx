import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

const SelectOptions = (props) => {
  const options = props.options;

  // Map over the options array and create <option> elements
  const optionElements = options.map((option, index) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return <>{optionElements}</>;
};

const Select = (props) => {
  const label = props.label;
  const options = props.options;
  const selectStyles = {
    width: "100%",
  };

  return (
    <>
      <FloatingLabel
        style={selectStyles}
        controlId="floatingSelect"
        label={label}
      >
        <Form.Select aria-label="Floating label select example">
          <SelectOptions options={options}></SelectOptions>
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default Select;
