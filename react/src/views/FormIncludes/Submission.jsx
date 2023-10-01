import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { ButtonGroup } from "react-bootstrap";
import Section from "../UI/Section";
import SectionGroup from "../UI/SectionGroup";
import TextArea from "../UI/TextArea";

const Submission = () => {
  return (
    <Section title="Generador">
      <SectionGroup>
        <Button size="lg">Generar Todos</Button>
        <Button size="lg" variant="outline-primary">Generar Contrato</Button>
        <Button size="lg" variant="outline-primary">Generar Demanda</Button>
        <Button size="lg" variant="outline-primary">Generar Escritos</Button>
        <Button size="lg" variant="outline-primary">Generar Recibo</Button>
        <Button size="lg" variant="outline-primary">Generar Excel</Button>
        <Button size="lg" variant="success">Guardar</Button>
      </SectionGroup>
      <SectionGroup>
        <TextArea label="Notas"></TextArea>
      </SectionGroup>
    </Section>
  );
};

export default Submission;
