import Section from "../UI/Section";
import SubSection from "../UI/SubSection";
import SectionGroup from "../UI/SectionGroup";
import Input from "../UI/Input";
import Select from "../UI/Select";

const DatosDelMatrimonio = () => {
  const domiciliosLegales = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const pruebaOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const deptoJudicialOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const conyugeFirmaOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const radicacionOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  return (
    <Section title="Datos del Matrimonio">
      <SectionGroup>
        <Input label="Sobre"></Input>
        <Select label="Domicilio Legal" options={domiciliosLegales}></Select>
      </SectionGroup>
      <SubSection title="Ultimo domicilio conyugal">
        <SectionGroup>
          <Input label="Calle, numero, piso, depto"></Input>
        </SectionGroup>
        <SectionGroup>
          <Input label="Localicad"></Input>
          <Input label="Partido"></Input>
          <Input label="Provincia"></Input>
        </SectionGroup>
      </SubSection>
      <SectionGroup>
        <Input label="Acta"></Input>
        <Input label="Tomo"></Input>
        <Input label="Folio"></Input>
        <Input label="Año"></Input>
      </SectionGroup>
      <SectionGroup>
        <Select label="Prueba" options={pruebaOptions}></Select>
        <Select
          label="Departamento Judicial"
          options={deptoJudicialOptions}
        ></Select>
      </SectionGroup>
      <SectionGroup>
        <Select label="Conyuge Firma" options={conyugeFirmaOptions}></Select>
        <Select label="Radicacion" options={radicacionOptions}></Select>
      </SectionGroup>
    </Section>
  );
};

export default DatosDelMatrimonio;
