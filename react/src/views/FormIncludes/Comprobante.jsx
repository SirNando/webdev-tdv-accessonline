import Input from "../UI/Input";
import Section from "../UI/Section";
import SectionGroup from "../UI/SectionGroup";
import Select from "../UI/Select";

const Comprobante = () => {
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
        <Select options={motivoOptions} label="Motivo"></Select>
        <Input label="Importe"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Carátula"></Input>
        <Input label="Nombre"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Fecha" type="date"></Input>
        <Select
          options={oficinaClienteOptions}
          label="Oficina Cliente"
        ></Select>
        <Select options={origenOptions} label="Origan"></Select>
        <Input label="Fecha de entrevista" type="date"></Input>
      </SectionGroup>
    </Section>
  );
};

export default Comprobante;
