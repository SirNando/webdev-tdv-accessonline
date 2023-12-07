import Input from "../../Atoms/Input";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";
import Select from "../../Atoms/Select";

export default function Comprobante({ data }) {
  const motivoOptions = [
    { label: "Consulta", value: "consulta" },
    { label: "Cuota", value: "cuota" },
  ];

  const oficinaClienteOptions = [
    { label: "La plata", value: "la plata" },
    { label: "San Miguel", value: "sanmiguel" },
    { label: "Morón", value: "moron" },
  ];
  const origenOptions = [
    { label: "Google", value: "google" },
    { label: "Crónica", value: "cronica" },
    ,
    { label: "Facebook", value: "facebook" },
  ];

  return (
    <Section title="Comprobante de pago">
      <SectionGroup>
        <Select
          options={motivoOptions}
          label="Motivo"
          value={data.motivo}
          name="comprobante_motivo"
        ></Select>
        <Input
          label="Importe"
          value={data.importe}
          name="comprobante_importe"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Carátula"
          value={data.caratula}
          name="comprobante_caratula"
        ></Input>
        <Input
          label="Nombre"
          value={data.nombre}
          name="comprobante_nombre"
        ></Input>
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Fecha"
          type="date"
          value={data.fecha}
          name="comprobante_fecha"
        ></Input>
        <Select
          options={oficinaClienteOptions}
          label="Oficina Cliente"
          value={data.oficinaCliente}
          name="comprobante_oficina"
        ></Select>
        <Select
          options={origenOptions}
          label="Origen"
          value={data.origen}
          name="comprobante_origen"
        ></Select>
        <Input
          label="Fecha de entrevista"
          type="date"
          value={data.fechaEntrevista}
          name="comprobante_fechaEntrevista"
        ></Input>
      </SectionGroup>
    </Section>
  );
}
