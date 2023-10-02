import "./ClientList.css";
import { Button, Pagination, Table } from "react-bootstrap";

const ClientList = () => {
  const clients = [
    {
      caratula: "Mati y Cata",
      fechaFirma: "Hoy",
      nombreActor: "Mati",
      apellidoActor: "Nandin",
      nombreDemandado: "Catalina",
      apellidoDemandado: "Nunies",
      opciones: ["Editar", "Borrar"],
    },
    {
      caratula: "Mati y Cata",
      fechaFirma: "Hoy",
      nombreActor: "Mati",
      apellidoActor: "Nandin",
      nombreDemandado: "Catalina",
      apellidoDemandado: "Nunies",
      opciones: ["Editar", "Borrar"],
    },
    {
      caratula: "Mati y Cata",
      fechaFirma: "Hoy",
      nombreActor: "Mati",
      apellidoActor: "Nandin",
      nombreDemandado: "Catalina",
      apellidoDemandado: "Nunies",
      opciones: ["Editar", "Borrar"],
    },
  ];

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
        {clients.map((client) => {
          return (
            <tr>
              <td>{client.caratula}</td>
              <td>{client.fechaFirma}</td>
              <td>{client.nombreActor}</td>
              <td>{client.apellidoActor}</td>
              <td>{client.nombreDemandado}</td>
              <td>{client.apellidoDemandado}</td>
              <td>
                {client.opciones.map((option) => {
                  return <Button>{option}</Button>;
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
      <Pagination>
        <Pagination.Item active>1</Pagination.Item>
        <Pagination.Item>2</Pagination.Item>
        <Pagination.Item>3</Pagination.Item>
      </Pagination>
    </Table>
  );
};

export default ClientList;
