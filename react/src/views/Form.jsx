import "./Form.css";
import ParteActora from "./FormIncludes/ParteActora";
import ParteDemandada from "./FormIncludes/ParteDemandada";
import Escritos from "./FormIncludes/Escritos";
import DatosDelMatrimonio from "./FormIncludes/DatosMatrimonio";
import Honorarios from "./FormIncludes/Honorarios";
import Comprobante from "./FormIncludes/Comprobante";
import Submission from "./FormIncludes/Submission";

const Form = () => {
  return (
    <form>
      <div className="section-container">
        <ParteActora></ParteActora>
        <ParteDemandada></ParteDemandada>
        <Honorarios></Honorarios>
        <DatosDelMatrimonio></DatosDelMatrimonio>
        <Escritos></Escritos>
        <div className="section-group">
          <Comprobante></Comprobante>
          <Submission></Submission>
        </div>
      </div>
    </form>
  );
};

export default Form;
