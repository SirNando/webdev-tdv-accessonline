import { useEffect, useState } from "react";
import ParteActora from "../Molecules/Form/ParteActora";
import ParteDemandada from "../Molecules/Form/ParteDemandada";
import Escritos from "../Molecules/Form/Escritos";
import DatosDelMatrimonio from "../Molecules/Form/DatosMatrimonio";
import Honorarios from "../Molecules/Form/Honorarios";
import Comprobante from "../Molecules/Form/Comprobante";
import Submission from "../Molecules/Form/Submission";
import { debounce } from "@mui/material";

export default function Form({ isNewClient }) {
  const [clientData, setClientData] = useState({
    _id: "",
    actorData: {
      nombre: "",
      apellido: "",
      documento: "",
      nacionalidad: "",
      domicilio: "",
      localidad: "",
      partido: "",
      provincia: "",
      entrecalle: "",
      correo: "",
      codigoPais: "",
      codigoArea: "",
      telefono: "",
      telefonoAlt: "",
      telefonoAltWho: "",
      asistencia: "",
      mf: "",
    },
    demandadoData: {
      nombre: "",
      apellido: "",
      documento: "",
      nacionalidad: "",
      domicilio: "",
      localidad: "",
      partido: "",
      provincia: "",
      entrecalle: "",
      codigoPais: "",
      codigoArea: "",
      telefono: "",
      telefonoFijo: "",
    },
    honorariosData: {},
    matrimonioData: {},
    escritosData: {},
    comprobanteData: {},
    submissionData: {},
  });

  const [actorData, setActorData] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    nacionalidad: "",
    domicilio: "",
    localidad: "",
    partido: "",
    provincia: "",
    entrecalle: "",
    correo: "",
    codigoPais: "",
    codigoArea: "",
    telefono: "",
    telefonoAlt: "",
    telefonoAltWho: "",
    asistencia: "",
    mf: "",
  });
  const [demandadoData, setDemandadoData] = useState({
    nombre: "",
    apellido: "",
    documento: "",
    nacionalidad: "",
    domicilio: "",
    localidad: "",
    partido: "",
    provincia: "",
    entrecalle: "",
    codigoPais: "",
    codigoArea: "",
    telefono: "",
    telefonoFijo: "",
  });

  function handleInputChange(event, fullName) {
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
    <form>
      <div className="grid grid-cols-3 w-[90%] gap-4 my-4 mx-auto">
        <ParteActora
          data={actorData}
          onChange={handleInputChange}
        ></ParteActora>
        <ParteDemandada
          data={demandadoData}
          onChange={handleInputChange}
        ></ParteDemandada>
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
