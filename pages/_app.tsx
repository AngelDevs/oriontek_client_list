import type { AppProps } from "next/app";
import "../styles/globals.css";
import "../styles/reset.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../features/core/config/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
