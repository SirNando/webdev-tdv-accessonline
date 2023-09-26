import Input from "../UI/Input";
import Select from "../UI/Select";
import Section from "../UI/Section";
import SectionGroup from "../UI/SectionGroup";

const ParteDemandada = () => {
  const asistenciaOptions = [
    { label: "Conferencia", value: "conferencia" },
    { label: "Remarketing", value: "rmkt" },
    { label: "Ninguno", value: "ninguno" },
  ];

  const mfOptions = [
    { label: "M", value: "m" },
    { label: "F", value: "f" },
  ];

  return (
    <Section title="Parte Demandada">
      <SectionGroup>
        <Input label="Nombre"></Input>
        <Input label="Apellido"></Input>
        <Input label="DNI" type="number"></Input>
        <Input label="Nacionalidad"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Domicilio"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Localidad"></Input>
        <Input label="Partido"></Input>
        <Input label="Provincia"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Entrecalle"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Codigo de país" type="number"></Input>
        <Input label="Código de área" type="number"></Input>
        <Input label="Teléfono" type="number"></Input>
        <Input label="Fijo"></Input>
      </SectionGroup>
    </Section>
  );
};

export default ParteDemandada;
