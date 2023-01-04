import { AppProps } from "next/app";
import Head from "next/head";
import { AppShell, Container, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import SDAFooter from "../components/Footer";
import SDAHeader from "../components/Header";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          components: {
            Headers: {},
          },
        }}
      >
        <AppShell
          footer={<SDAFooter></SDAFooter>}
          header={<SDAHeader></SDAHeader>}
          padding="md"
        >
          <Container>
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </MantineProvider>
    </>
  );
}
