import { QueryClient } from "@tanstack/react-query";

// Create a client
export const queryClient = new QueryClient();

export const apiClientKeys = {
  clients: "clients",
  address: "address",
};
