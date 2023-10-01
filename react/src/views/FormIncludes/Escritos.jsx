import SectionGroup from "../UI/SectionGroup";
import Section from "../UI/Section";
import TextArea from "../UI/TextArea";
import Select from "../UI/Select";

const Escritos = () => {
  const propuestaBienesOptions = [
    {
      label:
        "Propongo mantener transitoriamente la indivisión post comunitaria.",
      value: 1,
    },
    { label: "Propongo la venta y división en partes iguales.", value: 2 },
  ];

  const atribucionViviendaOptions = [
    { label: "Parte Actora", value: "actor" },
    { label: "Parte Demandada", value: "demandado" },
    { label: "No contesta", value: "nc" },
  ];

  const matriculaOptions = [
    { label: "Provincia", value: "provincia" },
    { label: "CABA", value: "caba" },
  ];

  return (
    <Section title="Escritos">
      <SectionGroup>
        <TextArea label="Alimentos" checkbox></TextArea>
      </SectionGroup>
      <SectionGroup>
        <TextArea label="Comunicación" checkbox></TextArea>
      </SectionGroup>
      <SectionGroup>
        <TextArea label="Cuidado personal" checkbox></TextArea>
      </SectionGroup>
      <SectionGroup>
        <TextArea
          label="Bienes"
          defaultText="Prueba de texto por defecto."
          checkbox
        ></TextArea>
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Propuesta de bienes"
          options={propuestaBienesOptions}
        ></Select>
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Atribución vivienda conyugal"
          options={atribucionViviendaOptions}
        ></Select>
        <Select label="Matrícula" options={matriculaOptions}></Select>
      </SectionGroup>
    </Section>
  );
};

export default Escritos;
