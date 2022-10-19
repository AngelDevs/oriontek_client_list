import { Address } from "./address";

export interface Client {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  addresses: Address[];
}
