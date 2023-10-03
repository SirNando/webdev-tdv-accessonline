import "./ClientList.css";
import { Button, Pagination, Table } from "react-bootstrap";
import { useState, useEffect } from "react";

const ClientList = () => {

  const [allClients, setAllClients] = useState([]);


  useEffect(() => {
    const headers = { "Content-Type": "application/json" };
    fetch("http://localhost:3000/accessOnline/clientList", headers)
      .then((response) => response.json())
      .then((data) => {
        if (data) setAllClients(data);
        console.log(allClients)
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Caratula</th>
          <th>Fecha de firma</th>
          <th>Nombre Actor</th>
          <th>Apellido Actor</th>
          <th>Nombre Demandado</th>
          <th>Apellido Demandado</th>
          <th>Opciones</th>
        </tr>
      </thead>
      <tbody>
        {allClients.map((client, index) => {
          return (
            <tr key={index}>
                <td>{client.actorData.nombre}</td>
                <td>{client.fechaFirma}</td>
                <td>{client.actorData.nombre}</td>
                <td>{client.apellidoActor}</td>
                <td>{client.nombreDemandado}</td>
                <td>{client.apellidoDemandado}</td>
                <td>
                {Array.isArray(client.opciones) &&
                    client.opciones.map((option, optionIndex) => (
                      <Button key={optionIndex}>{option}</Button>
                    ))}
                </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ClientList;
