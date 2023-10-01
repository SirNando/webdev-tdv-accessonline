import { useEffect, useState } from "react";
import "./Form.css";
import ParteActora from "./FormIncludes/ParteActora";
import ParteDemandada from "./FormIncludes/ParteDemandada";
import Escritos from "./FormIncludes/Escritos";
import DatosDelMatrimonio from "./FormIncludes/DatosMatrimonio";
import Honorarios from "./FormIncludes/Honorarios";
import Comprobante from "./FormIncludes/Comprobante";
import Submission from "./FormIncludes/Submission";

const Form = () => {
  const [clientData, setClientData] = useState("");

  useEffect(() => {
    // Fetch data from the database and store it in the 'data' state
    const headers = { "Content-Type": "application/json" };
    fetch(
      "http://localhost:3000/accessOnline/client/6519e3e8e3382b8ab39b66a4",
      headers
    )
      .then((response) => response.json())
      .then((data) => setClientData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  let actorData = {
    nombre: clientData.actorNombre,
    apellido: clientData.actorApellido,
    documento: clientData.actorDNI,
    nacionalidad: clientData.actorNacionalidad,
    domicilio: clientData.actorDomicilio,
    localidad: clientData.actorLocalidad,
    partido: clientData.actorPartido,
    provincia: clientData.actorProvincia,
    entrecalle: clientData.actorEntrecalle,
    correo: clientData.actorCorreo,
    codigoPais: clientData.actorCodigoPais,
    codigoArea: clientData.actorCodigoArea,
    telefono: clientData.actorTelefono,
    telefonoAlt: clientData.actorTelefonoAlt,
    telefonoAltWho: clientData.actorTelefonoAltWho,
    asistencia: clientData.actorAsistencia,
    mf: clientData.actorMf,
  };

  let demandadoData = {
    nombre: clientData.demandadoNombre,
    apellido: clientData.demandadoApellido,
    documento: clientData.demandadoDNI,
    nacionalidad: clientData.demandadoNacionalidad,
    domicilio: clientData.demandadoDomicilio,
    localidad: clientData.demandadoLocalidad,
    partido: clientData.demandadoPartido,
    provincia: clientData.demandadoProvincia,
    entrecalle: clientData.demandadoEntrecalle,
    codigoPais: clientData.demandadoCodigoPais,
    codigoArea: clientData.demandadoCodigoArea,
    telefono: clientData.demandadoTelefono,
    telefonoFijo: clientData.demandadoTelefonoFijo,
  };

  let honorariosData;
  let matrimonioData;
  let escritosData = {
    bienes: clientData.bienes,
  };
  let comprobanteData;
  let submissionData;
  return (
    <form>
      <div className="section-container">
        <ParteActora data={actorData}></ParteActora>
        <ParteDemandada data={demandadoData}></ParteDemandada>
        <Honorarios></Honorarios>
        <DatosDelMatrimonio></DatosDelMatrimonio>
        <Escritos data={escritosData}></Escritos>
        <div className="section-group">
          <Comprobante></Comprobante>
          <Submission></Submission>
        </div>
      </div>
    </form>
  );
};

export default Form;
