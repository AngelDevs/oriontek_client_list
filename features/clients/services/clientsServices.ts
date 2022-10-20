import { Address } from "../models/address";
import { Client } from "../models/client";
import { getClientById } from "./getClientById";
import { getClients } from "./getClients";
import { updateClientAddresses } from "./updateClientAddresses";

export interface ClientServices {
  getClients: () => Promise<Client[]>;
  getClientById: (id: string) => Promise<Client | undefined>;
  updateClientAddresses: (
    client: Client,
    addresses: Address[]
  ) => Promise<Client>;
}

export const clientsServices: ClientServices = {
  getClients,
  updateClientAddresses,
  getClientById,
};

export const getClientsLocalState = () => {
  const clientsString = localStorage.getItem("clients");
  const clients = clientsString ? JSON.parse(clientsString) : [];
  return clients as Client[];
};
