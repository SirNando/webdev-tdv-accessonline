import Button from "../../Atoms/Button";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";
import Input from "../../Atoms/Input";

export default function Submission({ data }) {
  return (
    <Section title="Generador">
      <SectionGroup>
        <Button>Todos</Button>
        <Button type={"submit"}>Guardar</Button>
        <Button secondary>Contrato</Button>
        <Button secondary>Demanda</Button>
        <Button secondary>Escritos</Button>
        <Button secondary>Recibo</Button>
        <Button secondary>Excel</Button>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Notas"
          value={data.notas}
          name="submission_notas"
          multiline
          rows={4}
        ></Input>
      </SectionGroup>
    </Section>
  );
}
