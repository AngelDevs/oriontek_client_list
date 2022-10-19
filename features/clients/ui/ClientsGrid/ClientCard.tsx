import { Client } from "../../models/client";

type Props = {
  client: Client;
};

const ClientCard = (props: Props) => {
  const { client } = props;
  return (
    <div className="card bg-base-300 shadow-xl break-all" key={client.id}>
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-gradient-primary">{client.name}</span>
        </h2>
        <p>
          <span>{client.addresses[0].suite}, </span>
          <span>{client.addresses[0].street}</span>
          <br></br>
          <span>{client.addresses[0].city}</span>
          <br></br>
          <span>{client.addresses[0].zipcode}</span>
        </p>
        <p>
          <span className="text-gradient-primary">Contacto:</span>
        </p>
        <a
          href={`mailto: ${client.email}`}
          className="text-blue-500 hover:text-blue-400/80"
        >
          {client.email}
        </a>
        <span className="text-blue-500">Phone: {client.phone}</span>
      </div>
    </div>
  );
};

export default ClientCard;
