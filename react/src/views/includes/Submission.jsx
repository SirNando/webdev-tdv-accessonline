import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import Section from "../UI/Section";

const Submission = () => {
  return (
    <Section title="Generador">
      <ButtonGroup>
        <Button>Generar Todos</Button>
        <Button>Generar Contrato</Button>
        <Button>Generar Demanda</Button>
        <Button>Generar Escritos</Button>
        <Button>Generar Recibo</Button>
        <Button>Generar Excel</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-nested-dropdown"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
    </Section>
  );
};

export default Submission;
