import { Client } from "../models/client";
import { Address } from "./../models/address";

export const updateClientAddresses = (client: Client, addresses: Address[]) => {
  return new Promise<Client>((resolve, reject) => {
    const updatedClient = { ...client, addresses };
    return resolve(updatedClient);
  });
};
