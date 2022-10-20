import { Client } from "../../models/client";
import ClientCard from "./ClientCard";

type Props = {
  clients: Client[];
  onCardClick: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    client: Client
  ) => void;
};

const ClientsGrid = (props: Props) => {
  const { clients, onCardClick } = props;

  if (clients.length === 0) {
    return <div>No clients found</div>;
  }

  return (
    <div className="grid grid-cols-fill-72 gap-8">
      {clients.map((client) => {
        return (
          <ClientCard key={client.id} client={client} onClick={onCardClick} />
        );
      })}
    </div>
  );
};

export default ClientsGrid;
