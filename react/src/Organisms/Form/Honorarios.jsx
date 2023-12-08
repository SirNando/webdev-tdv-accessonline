import Section from "../../Atoms/Section";
import Input from "../../Atoms/Input";
import SectionGroup from "../../Atoms/SectionGroup";
import Select from "../../Atoms/Select";

export default function Honorarios({ data }) {
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
        <Input label="Total" value={data.total} name="honorarios_total" />
        <Input
          label="Cantidad de cuotas"
          value={data.cantCuotas}
          name="honorarios_cantCuotas"
        />
        <Input
          label="Valor de cuotas"
          value={data.valorCuota}
          name="honorarios_valorCuota"
        />
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Descuento"
          value={data.descuento}
          name="honorarios_descuento"
        />
        <Input
          label="Valor de cuota descontada"
          value={data.valorCuotaDescuento}
          name="honorarios_valorCuotaDescuento"
        />
      </SectionGroup>
      <SectionGroup>
        <Input
          label="Primer vencimiento"
          value={data.primerVencimiento}
          name="honorarios_primerVencimiento"
          type="date"
        />
        <Input
          label="Fecha de firma"
          value={data.fechaFirma}
          name="honorarios_fechaFirma"
          type="date"
        />
      </SectionGroup>
      <Section title="Partida de matrimonio" subsection>
        <SectionGroup>
          <Select
            label="Con Partida"
            value={data.conPartida}
            name="honorarios_conPartida"
            options={partidaOptions}
          />
          <Input
            label="Cantidad cuotas"
            value={data.cantCuotasPartida}
            name="honorarios_cantCuotasPartida"
          />
          <Input
            label="Valor cuotas"
            value={data.valorCuotaPartida}
            name="honorarios_valorCuotaPartida"
          />
          <Select
            label="Medio de pago"
            value={data.medioDePago}
            name="honorarios_medioDePago"
            options={medioDePagoOptions}
          />
        </SectionGroup>
      </Section>
    </Section>
  );
}
