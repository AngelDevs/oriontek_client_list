import { Client } from "../models/client";
import { getClientById } from "./getClientById";
import { getClients } from "./getClients";

export interface ClientServices {
  getClients: () => Promise<Client[]>;
  getClientById: (id: string) => Promise<Client | undefined>;
}

export const clientsServices: ClientServices = {
  getClients,

  getClientById,
};

export const getClientsLocalState = () => {
  const clientsString = localStorage.getItem("clients");
  const clients = clientsString ? JSON.parse(clientsString) : [];
  return clients as Client[];
};
