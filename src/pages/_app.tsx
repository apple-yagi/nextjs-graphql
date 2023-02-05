import "@/styles/globals.css";
import "@generated/tailwindcss/app.css";
import { urqlClient } from "@/urql-client";
import type { AppProps } from "next/app";
import { Provider as UrqlProvider } from "urql";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // Render browser only
  const [isBrowser, setBrowser] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") setBrowser(true);
  }, []);
  if (!isBrowser) return <></>;

  return (
    <UrqlProvider value={urqlClient}>
      <Component {...pageProps} />
    </UrqlProvider>
  );
}
