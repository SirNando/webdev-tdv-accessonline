import Input from "../../Atoms/Input";
import SelectBox from "../../Atoms/Select";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";

const ParteActora = ({ data, onChange }) => {
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
    <Section title="Parte Actora">
      <SectionGroup>
        <Input
          label="Nombre"
          value={data.nombre}
          name="actorData_nombre"
          onChange={onChange}
        ></Input>
        <Input
          label="Apellido"
          value={data.apellido}
          onChange={onChange}
          name="actorData_apellido" 
        ></Input>
        <Input
          label="DNI"
          type="number"
          value={data.documento}
          name="actorData_documento"
          onChange={onChange}
        ></Input>
        <Input
          label="Nacionalidad"
          value={data.nacionalidad}
          name="actorData_nacionalidad"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Domicilio"
          value={data.domicilio}
          name="actorData_domicilio"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Localidad"
          value={data.localidad}
          name="actorData_localidad"
          onChange={onChange}
        ></Input>
        <Input
          label="Partido"
          value={data.partido}
          name="actorData_partido"
        ></Input>
        <Input
          label="Provincia"
          value={data.provincia}
          name="actorData_provincia"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Entrecalle"
          value={data.entrecalle}
          name="actorData_entrecalle"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Correo"
          value={data.correo}
          name="actorData_correo"
          onChange={onChange}
        ></Input>
        <Input
          label="Codigo de país"
          type="number"
          value={data.codigoPais}
          name="actorData_codigoPais"
          onChange={onChange}
        ></Input>
        <Input
          label="Código de área"
          type="number"
          value={data.codigoArea}
          name="actorData_codigoArea"
          onChange={onChange}
        ></Input>
        <Input
          label="Teléfono"
          type="number"
          value={data.telefono}
          name="actorData_telefono"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Teléfono alternativo"
          onChange={onChange}
          value={data.telefonoAlt}
          name="actorData_telefonoAlt"
        ></Input>
        <Input
          label="Pertenece a"
          value={data.telefonoAltWho}
          name="actorData_telefonoAltWho"
          onChange={onChange}
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <SelectBox
          label="Asistencia"
          options={asistenciaOptions}
          value={data.asistencia}
          name="actorData_asistencia"
          onChange={onChange}
        ></SelectBox>
        <SelectBox
          label="M/F"
          options={mfOptions}
          onChange={onChange}
          value={data.mf}
          name="actorData_mf"
        ></SelectBox>
      </SectionGroup>
    </Section>
  );
};

export default ParteActora;
