import { Address } from "./address";

export interface Client {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  addresses: Address[];
}
