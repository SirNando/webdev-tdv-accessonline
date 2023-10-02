import Input from "../../Atoms/Input";
import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";
import Select from "../../Atoms/Select";

const Comprobante = (props) => {
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

  const clientData = props.data;

  return (
    <Section title="Comprobante de pago">
      <SectionGroup>
        <Select
          options={motivoOptions}
          label="Motivo"
          value={clientData.motivo}
        ></Select>
        <Input label="Importe" value={clientData.importe}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Carátula" value={clientData.caratula}></Input>
        <Input label="Nombre" value={clientData.nombre}></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Fecha" type="date" value={clientData.fecha}></Input>
        <Select
          options={oficinaClienteOptions}
          label="Oficina Cliente"
          value={clientData.oficinaCliente}
        ></Select>
        <Select
          options={origenOptions}
          label="Origen"
          value={clientData.origen}
        ></Select>
        <Input
          label="Fecha de entrevista"
          type="date"
          value={clientData.fechaEntrevista}
        ></Input>
      </SectionGroup>
    </Section>
  );
};

export default Comprobante;
