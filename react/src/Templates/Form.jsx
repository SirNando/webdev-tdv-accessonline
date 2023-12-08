import ParteActora from "../Organisms/Form/ParteActora";
import ParteDemandada from "../Organisms/Form/ParteDemandada";
import Escritos from "../Organisms/Form/Escritos";
import DatosDelMatrimonio from "../Organisms/Form/DatosMatrimonio";
import Honorarios from "../Organisms/Form/Honorarios";
import Comprobante from "../Organisms/Form/Comprobante";
import Submission from "../Organisms/Form/Submission";
import {
  extractFormData,
  createClient,
  getClient,
} from "../Logic/form-handling";
import { useEffect, useState } from "react";

export default function Form({ clientId }) {
  clientId = "657265d6f90d7b0be29de8ca";

  const [dataLoaded, setDataLoaded] = useState(false);
  const [clientData, setClientData] = useState({
    _id: { clientId },
    actor: {},
    demandado: {},
    honorarios: {},
    matrimonio: {},
    escritos: {},
    comprobante: {},
    submission: {},
  });

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const extractedData = extractFormData(formData);

    // Update clientData state to reflect the submitted contents of the form
    setClientData(extractedData);

    let result = createClient(clientData);
    if (!result) {
      console.error("There was a problem with the request");
    } else {
      console.log("Success!");
    }
  }

  useEffect(() => {
    let result;
    const updateData = async (clientId) => {
      if (clientId) {
        result = await getClient(clientId);
        if (result) setClientData(result);
      }
    };
    updateData(clientId);
    setDataLoaded(true);
  }, [clientId]);
  return (
    <>
      {dataLoaded ? (
        <form onSubmit={handleSubmit} className="w-[2500px] m-auto">
          <div className="grid grid-cols-3 gap-4 m-4">
            <ParteActora data={clientData.actor}></ParteActora>
            <ParteDemandada data={clientData.demandado}></ParteDemandada>
            <Honorarios data={clientData.honorarios}></Honorarios>
            <DatosDelMatrimonio
              data={clientData.matrimonio}
            ></DatosDelMatrimonio>
            <Escritos data={clientData.escritos}></Escritos>
            <div className="w-full flex gap-4 flex-col">
              <Comprobante data={clientData.comprobante}></Comprobante>
              <Submission data={clientData.submission}></Submission>
            </div>
          </div>
        </form>
      ) : (
        <p>No data loaded</p>
      )}
    </>
  );
}
