import Section from "../UI/Section";
import Input from "../UI/Input";
import SectionGroup from "../UI/SectionGroup";
import Checkbox from "../UI/Checkbox";
import Select from "../UI/Select";

const Honorarios = () => {
  const medioDePagoOptions = [
    { label: "Oficina", value: "oficina" },
    { label: "Mercado Pago", value: "mp" },
  ];

  const partidaOptions = [
    { label: "Si", value: true },
    { label: "No", value: false },
  ];

  return (
    <Section title="Honorarios">
      <SectionGroup>
        <Input label="Total"></Input>
        <Input label="Cantidad de cuotas"></Input>
        <Input label="Valor de cuotas"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Descuento"></Input>
        <Input label="Valor de cuota descontada"></Input>
      </SectionGroup>
      <SectionGroup>
        <Input label="Primer vencimiento" type="date"></Input>
        <Input label="Fecha de firma" type="date"></Input>
      </SectionGroup>
      <Section title="Partida de matrimonio">
        <SectionGroup>
          <Select options={partidaOptions} label="Con Partida"></Select>
          <Input label="Cantidad de cuotas"></Input>
          <Input label="Valor de cuotas"></Input>
          <Select options={medioDePagoOptions} label="Medio de pago"></Select>
        </SectionGroup>
      </Section>
    </Section>
  );
};

export default Honorarios;
