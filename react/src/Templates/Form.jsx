import { useEffect, useState } from "react";
import ParteActora from "../Organisms/Form/ParteActora";
import ParteDemandada from "../Organisms/Form/ParteDemandada";
import Escritos from "../Organisms/Form/Escritos";
import DatosDelMatrimonio from "../Organisms/Form/DatosMatrimonio";
import Honorarios from "../Organisms/Form/Honorarios";
import Comprobante from "../Organisms/Form/Comprobante";
import Submission from "../Organisms/Form/Submission";

export default function Form({ isNewClient }) {
  const [clientData, setClientData] = useState({
    _id: "",
    actorData: {},
    demandadoData: {},
    honorariosData: {},
    matrimonioData: {},
    escritosData: {},
    comprobanteData: {},
    submissionData: {},
  });

  function handleSubmit(event) {
    const [section, name] = fullName.split("_");
    const value = event.target.value;

    switch (section) {
      case "actorData":
        setActorData((previousData) => ({
          ...previousData,
          [name]: value,
        }));
        break;
      case "demandadoData":
        setDemandadoData((previousData) => ({
          ...previousData,
          [name]: value,
        }));
        break;
    }
  }

  /* useEffect(() => {
    console.log(actorData);
  }, [actorData]); */

  return (
    <form onSubmit={handleSubmit} className="w-[2500px] m-auto">
      <div className="grid grid-cols-3 gap-4 m-4">
        <ParteActora data={clientData.actorData}></ParteActora>
        <ParteDemandada data={clientData.demandadoData}></ParteDemandada>
        <Honorarios data={clientData.honorariosData}></Honorarios>
        <DatosDelMatrimonio
          data={clientData.matrimonioData}
        ></DatosDelMatrimonio>
        <Escritos data={clientData.escritosData}></Escritos>
        <div className="w-full flex gap-4 flex-col">
          <Comprobante data={clientData.comprobanteData}></Comprobante>
          <Submission data={clientData.submissionData}></Submission>
        </div>
      </div>
    </form>
  );
}
