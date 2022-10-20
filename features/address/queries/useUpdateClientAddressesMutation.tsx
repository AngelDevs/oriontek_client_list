import { useMutation } from "@tanstack/react-query";
import { apiClientKeys, queryClient } from "../../core/config/client";
import { addressesService } from "../services/addressesService";

export const useUpdateClientAddressesMutation = () => {
  const mutation = useMutation(addressesService.updateClientAddresses, {
    onSuccess: (client) => {
      queryClient.invalidateQueries([apiClientKeys.clients]);
      queryClient.invalidateQueries([apiClientKeys.clients, client.id]);
    },
  });

  const { mutate, isLoading, error } = mutation;

  return { mutate, isLoading, error };
};
