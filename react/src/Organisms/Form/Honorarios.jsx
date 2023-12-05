import Section from "../../Atoms/Section";
import SubSection from "../../Atoms/SubSection";
import Input from "../../Atoms/Input";
import SectionGroup from "../../Atoms/SectionGroup";
import Select from "../../Atoms/Select";

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
      <SubSection title="Partida de matrimonio">
        <SectionGroup>
          <Select options={partidaOptions} label="Con Partida"></Select>
          <Input label="Cantidad cuotas"></Input>
          <Input label="Valor cuotas"></Input>
          <Select options={medioDePagoOptions} label="Medio de pago"></Select>
        </SectionGroup>
      </SubSection>
    </Section>
  );
};

export default Honorarios;
