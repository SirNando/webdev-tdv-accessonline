import ParteActora from "./includes/ParteActora";
import ParteDemandada from "./includes/ParteDemandada";
import Escritos from "./includes/Escritos";
import DatosDelMatrimonio from "./includes/DatosMatrimonio";
import Honorarios from "./includes/Honorarios";
import Comprobante from "./includes/Comprobante";

const Form = () => {
  return (
    <>
      <ParteActora></ParteActora>
      <ParteDemandada></ParteDemandada>
      <Escritos></Escritos>
      <DatosDelMatrimonio></DatosDelMatrimonio>
      <Honorarios></Honorarios>
      <Comprobante></Comprobante>
    </>
  );
};

export default Form;
