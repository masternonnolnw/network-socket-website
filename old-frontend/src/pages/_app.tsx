import { MantineProvider } from "@mantine/core";
import Layout from "common/components/Layout";
import { AuthProvider } from "common/contexts/AuthContext";
import { LayoutProvider } from "common/contexts/LayoutContext";
import { AppProps } from "next/app";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LayoutProvider>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Montserrat",
          breakpoints: {
            xs: 576,
            sm: 768,
            md: 1020,
            lg: 1200,
            xl: 1400
          },
          headings: {
            fontWeight: "400",
            fontFamily: "Dela Gothic One",
            sizes: {
              h1: {
                fontSize: "56px",
                lineHeight: "56px"
              },
              h2: {
                fontSize: "48px",
                lineHeight: "48px"
              },
              h3: {
                fontSize: "32px",
                lineHeight: "32px"
              },
              h4: {
                fontSize: "24px",
                lineHeight: "24px"
              }
            }
          },
          fontSizes: {
            xs: 10,
            sm: 12,
            md: 14,
            lg: 16,
            xl: 18
          }
        }}
      >
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthProvider>
      </MantineProvider>
    </LayoutProvider>
  );
}

export default MyApp;
