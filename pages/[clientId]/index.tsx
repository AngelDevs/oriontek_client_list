import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Address } from "../../features/address/models/address";
import { useUpdateClientAddressesMutation } from "../../features/address/queries/useUpdateClientAddressesMutation";
import AddAddressModal, {
  AddAddressFormData,
} from "../../features/address/ui/actions/AddAddressModal/AddAddressModal";
import AddressCard from "../../features/address/ui/layout/AddressGrid/AddressCard";
import AddressGrid from "../../features/address/ui/layout/AddressGrid/AddressGrid";
import { useGetClientsByIdQuert } from "../../features/clients/queries/useGetClientByIdQuery";
import ClientBasicInfoCard from "../../features/clients/ui/layout/ClientBasicInfoCard/ClientBasicInfoCard";
import Header from "../../features/core/ui/layout/Header";
import Loader from "../../features/core/ui/layout/Loader";

const ClientPageLayout = (props: { children?: React.ReactNode }) => {
  const { children } = props;

  return (
    <div>
      <Head>
        <title>Clients Manager</title>
        <meta
          name="description"
          content="Client manager that adds and deletes clients and their addresses"
        />
      </Head>
      <Header></Header>
      <main className="p-4">{children}</main>
      <footer></footer>
    </div>
  );
};

const Client: NextPage = () => {
  const router = useRouter();
  const { clientId } = router.query;
  const clientIdString = clientId as string;

  const { data: client, isLoading: isGetClientsByIdLoading } =
    useGetClientsByIdQuert(clientIdString ?? "");

  const mainAddress = client?.addresses.find((address) => address.isMain);
  const otherAddresses = client?.addresses.filter((address) => !address.isMain);
  const hasAddresses = (client?.addresses?.length ?? 0) > 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    isLoading: isDeleteAddressLoading,
    error,
    mutate,
  } = useUpdateClientAddressesMutation();

  if (isGetClientsByIdLoading) {
    return (
      <ClientPageLayout>
        <Loader />
      </ClientPageLayout>
    );
  }

  if (!client) {
    return (
      <ClientPageLayout>
        <div className="flex justify-center ">
          <span className="text-lg text-gradient-primary font-bold">
            Client not found
          </span>
        </div>
      </ClientPageLayout>
    );
  }

  const handleDeleteAddress = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    address: Address
  ) => {
    const updatedAddresses = client.addresses.filter(
      (_address) => _address.id !== address.id
    );

    mutate({
      client: client,
      addresses: updatedAddresses,
    });
  };

  const handleAddAddress = (newAddress: AddAddressFormData) => {
    const newAddressWithId = { ...newAddress, id: uuidv4() };
    let addresses = [...client.addresses];
    if (newAddressWithId.isMain) {
      addresses = addresses.map((address) => ({ ...address, isMain: false }));
    }

    mutate({
      client: client,
      addresses: [...addresses, newAddressWithId],
    });
  };

  const handleUpdateMainAddress = (newMainAddress: Address) => {
    let addresses = [...client.addresses];

    addresses = addresses.map((address) => {
      if (address.id === newMainAddress.id) {
        return { ...address, isMain: true };
      }

      return { ...address, isMain: false };
    });

    mutate({
      client: client,
      addresses: [...addresses],
    });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <ClientPageLayout>
      <section className="p-2 flex justify-end">
        <input
          onClick={toggleModal}
          type="button"
          value={"Add address"}
          className="btn modal-button"
        />
      </section>
      <section className="pb-4 block sm:flex">
        <ClientBasicInfoCard client={client} className=" sm:mr-2" />
        {hasAddresses && (
          <AddressCard
            address={mainAddress ?? client.addresses[0]}
            className="grow mt-4 sm:mt-0"
          />
        )}
      </section>
      <section>
        <AddressGrid
          addresses={otherAddresses ?? []}
          onClickDelete={handleDeleteAddress}
          onClickUpdateMainAddress={handleUpdateMainAddress}
        />
      </section>
      <section>
        <AddAddressModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          onSubmit={handleAddAddress}
        />
      </section>
    </ClientPageLayout>
  );
};

export default Client;
