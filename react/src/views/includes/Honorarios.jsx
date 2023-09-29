import Section from "../UI/Section";
import Input from "../UI/Input";
import SectionGroup from "../UI/SectionGroup";

const Honorarios = () => {
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
        </Section>
    )
}

export default Honorarios;