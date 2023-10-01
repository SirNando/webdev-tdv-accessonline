import "./Form.css";
import ParteActora from "./FormIncludes/ParteActora";
import ParteDemandada from "./FormIncludes/ParteDemandada";
import Escritos from "./FormIncludes/Escritos";
import DatosDelMatrimonio from "./FormIncludes/DatosMatrimonio";
import Honorarios from "./FormIncludes/Honorarios";
import Comprobante from "./FormIncludes/Comprobante";
import Submission from "./FormIncludes/Submission";

async function getClientData() {}

const Form = () => {
  let clientData;
  const headers = { "Content-Type": "application/json" };

  fetch("http://localhost:3000/accessOnline/client/6519e3e8e3382b8ab39b66a4", {
    headers,
  })
    .then((response) => response.json())
    .then((data) => (clientData = data));
    
  return (
    <form>
      <div className="section-container">
        <ParteActora clientData={clientData}></ParteActora>
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
