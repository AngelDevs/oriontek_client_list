import { Client } from "../../models/client";

type Props = {
  client: Client;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    client: Client
  ) => void;
};

const ClientCard = (props: Props) => {
  const { client, onClick } = props;

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e, client);
  };

  const { id, name, email, phone, addresses } = client;

  const cardClicableStyles = onClick
    ? "active:bg-base-300/50 hover:bg-base-300/50 cursor-pointer"
    : "";

  return (
    <div
      onClick={onClickCard}
      className={`card bg-base-300 shadow-xl break-all ${cardClicableStyles}`}
      key={id}
    >
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-gradient-primary">{name}</span>
        </h2>
        <p>
          <span>{addresses[0].suite}, </span>
          <span>{addresses[0].street}</span>
          <br></br>
          <span>{addresses[0].city}</span>
          <br></br>
          <span>{addresses[0].zipcode}</span>
        </p>
        <p>
          <span className="text-gradient-primary">Contacto:</span>
        </p>
        <span className="text-blue-500">{email}</span>
        <span className="text-blue-500">Phone: {phone}</span>
      </div>
    </div>
  );
};

export default ClientCard;
