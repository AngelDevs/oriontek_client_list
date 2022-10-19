import { Client } from "../../models/client";
import ClientCard from "./ClientCard";

type Props = {
  clients: Client[];
};

const ClientsGrid = (props: Props) => {
  const { clients } = props;

  if (clients.length === 0) {
    return <div>No clients found</div>;
  }

  return (
    <div className="p-4 grid grid-cols-fill-72 gap-8">
      {clients.map((client) => {
        return <ClientCard key={client.id} client={client} />;
      })}
    </div>
  );
};

export default ClientsGrid;
