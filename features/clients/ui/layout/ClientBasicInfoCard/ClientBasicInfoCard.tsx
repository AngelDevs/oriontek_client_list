import { Client } from "../../../models/client";

type Props = {
  client: Client;
  className?: string;
  onClick?: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    client: Client
  ) => void;
};

const ClientBasicInfoCard = (props: Props) => {
  const { client, onClick, className } = props;

  const onClickCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) onClick(e, client);
  };

  const { id, name, email, phone } = client;

  const cardClicableStyles = onClick
    ? "active:bg-base-300/50 hover:bg-base-300/50 cursor-pointer"
    : "";

  return (
    <div
      onClick={onClickCard}
      className={`card bg-base-300 shadow-xl break-all ${cardClicableStyles} ${className}`}
      key={id}
    >
      <div className="card-body">
        <h2 className="card-title">
          <span className="text-gradient-primary">{name}</span>
        </h2>
        <span className="text-blue-500">{email}</span>
        <span className="text-blue-500">Phone: {phone}</span>
      </div>
    </div>
  );
};

export default ClientBasicInfoCard;
