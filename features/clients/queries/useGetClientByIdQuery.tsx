import { useQuery } from "@tanstack/react-query";
import { apiClientKeys } from "../../core/config/client";
import { clientsServices } from "../services/clientsServices";

export const useGetClientsByIdQuert = (id: string) => {
  const { data, isLoading } = useQuery(
    [apiClientKeys.clients, id],
    () => clientsServices.getClientById(id),
    {
      enabled: !!id,
    }
  );

  return { isLoading, data };
};
