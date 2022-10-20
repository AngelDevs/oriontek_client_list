import { Client } from "../models/client";
import { getClientsLocalState } from "./clientsServices";

export const getClientById = (id: string) => {
  return new Promise<Client | undefined>((resolve, reject) => {
    const clients = getClientsLocalState();
    const client = clients?.find((client) => client.id === id);

    return resolve(client);
  });
};
