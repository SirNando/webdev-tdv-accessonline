import Input from "../UI/Input";
import Select from "../UI/Select";
import Section from "../UI/Section";
import SectionGroup from "../UI/SectionGroup";

const ParteActora = (props) => {
  const asistenciaOptions = [
    { label: "Conferencia", value: "conferencia" },
    { label: "Remarketing", value: "rmkt" },
    { label: "Ninguno", value: "ninguno" },
  ];

  const mfOptions = [
    { label: "M", value: "m" },
    { label: "F", value: "f" },
  ];
  const clientData = props.clientData;
  console.log(clientData);

  return (
    <Section title="Parte Actora">
      <SectionGroup>
        <Input label="Nombre" value={clientData}></Input>
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
        <Input label="Correo"></Input>
        <Input label="Codigo de país" type="number"></Input>
        <Input label="Código de área" type="number"></Input>
        <Input label="Teléfono" type="number"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Teléfono alternativo"></Input>
        <Input label="Pertenece a"></Input>
      </SectionGroup>
      <SectionGroup>
        <Select label="Asistencia" options={asistenciaOptions}></Select>
        <Select label="M/F" options={mfOptions}></Select>
      </SectionGroup>
    </Section>
  );
};

export default ParteActora;
