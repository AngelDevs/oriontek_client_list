import { Address } from "../../address/models/address";

export interface Client {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  addresses: Address[];
}
