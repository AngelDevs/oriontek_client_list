import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGetClientsByIdQuert } from "../../features/clients/queries/useGetClientByIdQuery";
import AddressCard from "../../features/clients/ui/AddressGrid/AddressCard";
import AddressGrid from "../../features/clients/ui/AddressGrid/AddressGrid";
import ClientBasicInfoCard from "../../features/clients/ui/ClientBasicInfoCard/ClientBasicInfoCard";
import Header from "../../features/core/ui/layout/Header";

const Client: NextPage = () => {
  const router = useRouter();
  const { clientId } = router.query;
  const clientIdString = clientId as string;
  const { data, isLoading } = useGetClientsByIdQuert(clientIdString ?? "");

  const mainAddress = data?.addresses.find((address) => address.isMain);
  const otherAddresses = data?.addresses.filter((address) => !address.isMain);

  const hasAddresses = (data?.addresses?.length ?? 0) > 0;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Client not found</div>;
  }

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
      <main className="p-4 ">
        <section className="p-2 flex justify-end">
          <p className="text-xl text-blue-500 hover:text-blue-300/80 cursor-pointer">
            Add address
          </p>
        </section>
        <section className="pb-4 block sm:flex">
          <ClientBasicInfoCard client={data} className=" sm:mr-2" />

          {hasAddresses && (
            <AddressCard
              address={mainAddress ?? data.addresses[0]}
              className="grow mt-4 sm:mt-0"
            />
          )}
        </section>
        <section>
          <AddressGrid addresses={otherAddresses ?? []} />
        </section>
      </main>

      <footer></footer>
    </div>
  );
};

export default Client;
