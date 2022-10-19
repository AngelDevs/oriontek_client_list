import { Address } from "../models/address";
import { Client } from "../models/client";
import { getClients } from "./getClients";
import { updateClientAddresses } from "./updateClientAddresses";

export interface ClientServices {
  getClients: () => Promise<Client[]>;
  updateClientAddresses: (
    client: Client,
    addresses: Address[]
  ) => Promise<Client>;
}

export const clientsServices: ClientServices = {
  getClients,
  updateClientAddresses,
};
