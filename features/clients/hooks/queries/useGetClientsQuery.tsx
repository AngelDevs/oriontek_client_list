import { useQuery } from "@tanstack/react-query";
import { apiClientKeys } from "../../../core/config/client";
import { clientsServices } from "../../services/clientsServices";
// Queries

export const useGetClientsQuery = () => {
  const { data, isLoading } = useQuery(
    [apiClientKeys.clients],
    clientsServices.getClients
  );

  return { isLoading, data };
};
