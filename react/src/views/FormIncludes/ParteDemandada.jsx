import Input from "../UI/Input";
import Section from "../UI/Section";
import SectionGroup from "../UI/SectionGroup";

const ParteDemandada = (props) => {
  const clientData = props.data;

  return (
    <Section title="Parte Demandada">
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
        <Input label="Codigo de país" type="number" value={clientData.codigoPais}></Input>
        <Input label="Código de área" type="number" value={clientData.codigoArea}></Input>
        <Input label="Teléfono" type="number" value={clientData.telefono}></Input>
        <Input label="Fijo" value={clientData.telefonoFijo}></Input>
      </SectionGroup>
    </Section>
  );
};

export default ParteDemandada;
