import Input from "../../Atoms/Input";
import Select from "../../Atoms/Select";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";

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

  const clientData = props.data;

  return (
    <Section title="Parte Actora">
      <SectionGroup>
        <Input label="Nombre" value={clientData.nombre}></Input>
        <Input label="Apellido" value={clientData.apellido}></Input>
        <Input label="DNI" type="number" value={clientData.documento}></Input>
        <Input label="Nacionalidad" value={clientData.nacionalidad}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Domicilio" value={clientData.domicilio}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Localidad" value={clientData.localidad}></Input>
        <Input label="Partido" value={clientData.partido}></Input>
        <Input label="Provincia" value={clientData.provincia}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Entrecalle" value={clientData.entrecalle}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Correo" value={clientData.correo}></Input>
        <Input
          label="Codigo de país"
          type="number"
          value={clientData.codigoPais}
        ></Input>
        <Input
          label="Código de área"
          type="number"
          value={clientData.codigoArea}
        ></Input>
        <Input
          label="Teléfono"
          type="number"
          value={clientData.telefono}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Teléfono alternativo"
          value={clientData.telefonoAlt}
        ></Input>
        <Input label="Pertenece a" value={clientData.telefonoAltWho}></Input>
      </SectionGroup>
      <SectionGroup>
        <Select label="Asistencia" options={asistenciaOptions}></Select>
        <Select label="M/F" options={mfOptions}></Select>
      </SectionGroup>
    </Section>
  );
};

export default ParteActora;
