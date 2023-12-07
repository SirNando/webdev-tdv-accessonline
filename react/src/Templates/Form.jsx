import ParteActora from "../Organisms/Form/ParteActora";
import ParteDemandada from "../Organisms/Form/ParteDemandada";
import Escritos from "../Organisms/Form/Escritos";
import DatosDelMatrimonio from "../Organisms/Form/DatosMatrimonio";
import Honorarios from "../Organisms/Form/Honorarios";
import Comprobante from "../Organisms/Form/Comprobante";
import Submission from "../Organisms/Form/Submission";
import extractFormData from "../Logic/form-handling";

export default function Form({ isNewClient }) {
  let clientData = {
    _id: "",
    actor: {},
    demandado: {},
    honorarios: {},
    matrimonio: {},
    escritos: {},
    comprobante: {},
    submission: {},
  };

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const extractedData = extractFormData(formData);

    // Update clientData state to reflect the submitted contents of the form
    clientData = extractedData;
    console.log(clientData);
  }

  return (
    <form onSubmit={handleSubmit} className="w-[2500px] m-auto">
      <div className="grid grid-cols-3 gap-4 m-4">
        <ParteActora data={clientData.actor}></ParteActora>
        <ParteDemandada data={clientData.demandado}></ParteDemandada>
        <Honorarios data={clientData.honorarios}></Honorarios>
        <DatosDelMatrimonio data={clientData.matrimonio}></DatosDelMatrimonio>
        <Escritos data={clientData.escritos}></Escritos>
        <div className="w-full flex gap-4 flex-col">
          <Comprobante data={clientData.comprobante}></Comprobante>
          <Submission data={clientData.submission}></Submission>
        </div>
      </div>
    </form>
  );
}
