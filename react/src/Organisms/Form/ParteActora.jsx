import Input from "../../Atoms/Input";
import SelectBox from "../../Atoms/Select";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";

export default function ParteActora({ data }) {
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
        ></Input>
        <Input
          label="Apellido"
          value={data.apellido}
          name="actorData_apellido"
        ></Input>
        <Input
          label="DNI"
          type="number"
          value={data.documento}
          name="actorData_documento"
        ></Input>
        <Input
          label="Nacionalidad"
          value={data.nacionalidad}
          name="actorData_nacionalidad"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Domicilio"
          value={data.domicilio}
          name="actorData_domicilio"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Localidad"
          value={data.localidad}
          name="actorData_localidad"
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
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Entrecalle"
          value={data.entrecalle}
          name="actorData_entrecalle"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Correo"
          value={data.correo}
          name="actorData_correo"
        ></Input>
        <Input
          label="Codigo de país"
          type="number"
          value={data.codigoPais}
          name="actorData_codigoPais"
        ></Input>
        <Input
          label="Código de área"
          type="number"
          value={data.codigoArea}
          name="actorData_codigoArea"
        ></Input>
        <Input
          label="Teléfono"
          type="number"
          value={data.telefono}
          name="actorData_telefono"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Teléfono alternativo"
          value={data.telefonoAlt}
          name="actorData_telefonoAlt"
        ></Input>
        <Input
          label="Pertenece a"
          value={data.telefonoAltWho}
          name="actorData_telefonoAltWho"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <SelectBox
          label="Asistencia"
          options={asistenciaOptions}
          value={data.asistencia}
          name="actorData_asistencia"
        ></SelectBox>
        <SelectBox
          label="M/F"
          options={mfOptions}
          value={data.mf}
          name="actorData_mf"
        ></SelectBox>
      </SectionGroup>
    </Section>
  );
}
