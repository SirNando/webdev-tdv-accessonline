import "./Form.css";
import ParteActora from "./includes/ParteActora";
import ParteDemandada from "./includes/ParteDemandada";
import Escritos from "./includes/Escritos";
import DatosDelMatrimonio from "./includes/DatosMatrimonio";
import Honorarios from "./includes/Honorarios";
import Comprobante from "./includes/Comprobante";
import Submission from "./includes/Submission";

const Form = () => {
  return (
    <form>
      <div>
        <ParteActora></ParteActora>
        <ParteDemandada></ParteDemandada>
        <Honorarios></Honorarios>
      </div>
      <div>
        <DatosDelMatrimonio></DatosDelMatrimonio>
        <Escritos></Escritos>
        <div>
          <Comprobante></Comprobante>
          <Submission></Submission>
        </div>
      </div>
    </form>
  );
};

export default Form;
