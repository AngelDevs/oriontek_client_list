import { Client } from "../../clients/models/client";
import {
  updateClientAddresses,
  UpdateClientAddressesParams,
} from "./updateClientAddresses";

export interface AddressesService {
  updateClientAddresses: (
    params: UpdateClientAddressesParams
  ) => Promise<Client>;
}
updateClientAddresses;
export const addressesService: AddressesService = {
  updateClientAddresses,
};
