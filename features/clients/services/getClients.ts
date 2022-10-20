import { users } from "../../../public/users";
import { Client } from "../models/client";
import { getClientsLocalState } from "./clientsServices";

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
  localStorage.setItem("isFirstTime", false.toString());
};

const getIsFirstTimeLocalState = () => {
  const isFirstTimeString = localStorage.getItem("isFirstTime");

  if (isFirstTimeString === "false") {
    return false;
  } else {
    return true;
  }
};
