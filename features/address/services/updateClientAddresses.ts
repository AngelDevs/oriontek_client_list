import { Client } from "../../clients/models/client";
import { getClientsLocalState } from "../../clients/services/clientsServices";
import { Address } from "../models/address";

export type UpdateClientAddressesParams = {
  client: Client;
  addresses: Address[];
};

export const updateClientAddresses = (params: UpdateClientAddressesParams) => {
  const { client, addresses } = params;

  return new Promise<Client>((resolve, reject) => {
    const clients = [...getClientsLocalState()];

    const clientIndex = clients.findIndex((c) => c.id === client.id);

    if (clientIndex === -1) {
      reject("Client not found");
    }

    clients[clientIndex] = {
      ...clients[clientIndex],
      addresses: addresses,
    };

    localStorage.setItem("clients", JSON.stringify(clients));

    return resolve(clients[clientIndex]);
  });
};
