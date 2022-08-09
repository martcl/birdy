import { SessionProvider } from "next-auth/react";
import "./styles.css";

import type { AppProps } from "next/app";
import ToggleColorModeProvider from "../components/layout/toggleColorModeProvider";

// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session} refetchInterval={0}>
      <ToggleColorModeProvider>
        <Component {...pageProps} />
      </ToggleColorModeProvider>
    </SessionProvider>
  );
}
