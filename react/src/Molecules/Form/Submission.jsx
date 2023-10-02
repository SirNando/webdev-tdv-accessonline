import Button from "react-bootstrap/Button";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";
import TextArea from "../../Atoms/TextArea";

const Submission = () => {
  return (
    <Section title="Generador">
      <SectionGroup>
        <Button size="lg">Generar Todos</Button>
        <Button size="lg" variant="outline-primary">
          Generar Contrato
        </Button>
        <Button size="lg" variant="outline-primary">
          Generar Demanda
        </Button>
        <Button size="lg" variant="outline-primary">
          Generar Escritos
        </Button>
        <Button size="lg" variant="outline-primary">
          Generar Recibo
        </Button>
        <Button size="lg" variant="outline-primary">
          Generar Excel
        </Button>
        <Button size="lg" variant="success">
          Guardar
        </Button>
      </SectionGroup>
      <SectionGroup>
        <TextArea label="Notas"></TextArea>
      </SectionGroup>
    </Section>
  );
};

export default Submission;
