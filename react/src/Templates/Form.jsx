import { useEffect, useState } from "react";
import "./Form.css";
import ParteActora from "../Molecules/Form/ParteActora";
import ParteDemandada from "../Molecules/Form/ParteDemandada";
import Escritos from "../Molecules/Form/Escritos";
import DatosDelMatrimonio from "../Molecules/Form/DatosMatrimonio";
import Honorarios from "../Molecules/Form/Honorarios";
import Comprobante from "../Molecules/Form/Comprobante";
import Submission from "../Molecules/Form/Submission";

const Form = () => {
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

  useEffect(() => {
    // Fetch data from the database and store it in the 'data' state
    const headers = { "Content-Type": "application/json" };
    fetch(
      "http://localhost:3000/accessOnline/client/6519e3e8e3382b8ab39b66a4",
      headers
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) setClientData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <form>
      <div className="section-container">
        <ParteActora data={clientData.actorData}></ParteActora>
        <ParteDemandada data={clientData.demandadoData}></ParteDemandada>
        <Honorarios data={clientData.honorariosData}></Honorarios>
        <DatosDelMatrimonio
          data={clientData.matrimonioData}
        ></DatosDelMatrimonio>
        <Escritos data={clientData.escritosData}></Escritos>
        <div className="section-group">
          <Comprobante data={clientData.comprobanteData}></Comprobante>
          <Submission data={clientData.submissionData}></Submission>
        </div>
      </div>
    </form>
  );
};

export default Form;
