import SectionGroup from "../../Atoms/SectionGroup";
import Section from "../../Atoms/Section";
import Input from "../../Atoms/Input";
import Select from "../../Atoms/Select";

export default function Escritos({ data }) {
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
        <Input
          label="Alimentos"
          value={data.alimentos}
          name="escritos_alimentos"
          multiline
          checkbox
        />
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Comunicación"
          value={data.comunicacion}
          name="escritos_comunicacion"
          multiline
          checkbox
        />
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Cuidado Personal"
          value={data.cuidadoPersonal}
          name="escritos_cuidadoPersonal"
          multiline
          checkbox
        />
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Bienes"
          value={data.bienes}
          name="escritos_bienes"
          multiline
          checkbox
        />
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Propuesta de bienes"
          options={propuestaBienesOptions}
          value={data.propuestaBienes}
          name="escritos_propuestaBienes"
        />
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Atribución vivienda conyugal"
          options={atribucionViviendaOptions}
          value={data.atribucionVivienda}
          name="escritos_atribucionVivienda"
        />
        <Select
          label="Matrícula"
          options={matriculaOptions}
          value={data.matricula}
          name="escritos_matricula"
        />
      </SectionGroup>
    </Section>
  );
}
