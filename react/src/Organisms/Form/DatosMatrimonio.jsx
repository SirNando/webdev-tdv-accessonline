import Section from "../../Atoms/Section";
import SectionGroup from "../../Atoms/SectionGroup";
import Input from "../../Atoms/Input";
import Select from "../../Atoms/Select";

export default function DatosDelMatrimonio({ data }) {
  const domiciliosLegales = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const pruebaOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const deptoJudicialOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const conyugeFirmaOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  const radicacionOptions = [
    { label: "Almirante Brown", value: "moron" },
    { label: "Arieta 3223", value: "san justo" },
  ];

  return (
    <Section title="Datos del Matrimonio">
      <SectionGroup>
        <Input label="Sobre" value={data.sobre} name="matrimonio_sobre" />
        <Select
          label="Domicilio Legal"
          value={data.domicilioLegal}
          name="matrimonio_domicilioLegal"
          options={domiciliosLegales}
        ></Select>
      </SectionGroup>
      <Section title="Ultimo domicilio conyugal" subsection>
        <SectionGroup>
          <Input
            label="Calle, numero, piso, depto"
            value={data.calleNroPisoDpto}
            name="matrimonio_calleNroPisoDpto"
          />
        </SectionGroup>
        <SectionGroup>
          <Input
            label="Localidad"
            value={data.localidad}
            name="matrimonio_localidad"
          />
          <Input
            label="Partido"
            value={data.partido}
            name="matrimonio_partido"
          />
          <Input
            label="Provincia"
            value={data.provincia}
            name="matrimonio_provincia"
          />
        </SectionGroup>
      </Section>
      <SectionGroup>
        <Input label="Acta" value={data.acta} name="matrimonio_acta" />
        <Input label="Tomo" value={data.tomo} name="matrimonio_tomo" />
        <Input label="Folio" value={data.folio} name="matrimonio_folio" />
        <Input label="Año" value={data.anio} name="matrimonio_anio" />
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Prueba"
          value={data.prueba}
          name="matrimonio_prueba"
          options={pruebaOptions}
        />
        <Select
          label="Departamento Judicial"
          value={data.deptoJudicial}
          name="matrimonio_deptoJudicial"
          options={deptoJudicialOptions}
        />
      </SectionGroup>
      <SectionGroup>
        <Select
          label="Conyuge Firma"
          value={data.conyugeFirma}
          name="matrimonio_conyugeFirma"
          options={conyugeFirmaOptions}
        />
        <Select
          label="Radicacion"
          value={data.radicacion}
          name="matrimonio_radicacion"
          options={radicacionOptions}
        />
      </SectionGroup>
    </Section>
  );
}
