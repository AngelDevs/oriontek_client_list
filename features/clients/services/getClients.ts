import { users } from "../../../public/users";
import { Client } from "../models/client";

export const getClients = () => {
  return new Promise<Client[]>((resolve, reject) => {
    const isFirstTime = getIsFirstTimeLocalState();
    if (isFirstTime) {
      saveClientsLocalState(users);
      return resolve(users);
    }

    const clients = getClientsLocalState();
    return resolve(clients);
  });
};

const saveClientsLocalState = (clients: Client[]) => {
  const clientsString = JSON.stringify(clients);
  localStorage.setItem("clients", clientsString);
};

const getIsFirstTimeLocalState = () => {
  const isFirstTimeString = localStorage.getItem("isFirstTime");
  const isFirstTime = isFirstTimeString ? Boolean(isFirstTimeString) : true;
  return isFirstTime;
};

const getClientsLocalState = () => {
  const clientsString = localStorage.getItem("clients");
  const clients = clientsString ? JSON.parse(clientsString) : [];
  return clients as Client[];
};
