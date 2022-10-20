import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useGetClientsQuery } from "../features/clients/queries/useGetClientsQuery";
import ClientsGrid from "../features/clients/ui/ClientsGrid/ClientsGrid";
import Header from "../features/core/ui/layout/Header";

const Home: NextPage = () => {
  const router = useRouter();
  const { isLoading, data } = useGetClientsQuery();

  return (
    <div className="w-full">
      <Head>
        <title>Clients Manager</title>
        <meta
          name="description"
          content="Client manager that adds and deletes clients and their addresses"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="p-4">
        {isLoading ? (
          <span>Loading...</span>
        ) : (
          <ClientsGrid
            clients={data ?? []}
            onCardClick={(e, client) => {
              router.push(`/${client.id}`);
            }}
          />
        )}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
