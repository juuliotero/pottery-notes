import { type AppType } from "next/app";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { ClerkProvider, useUser } from "@clerk/nextjs";
import { esES } from "@clerk/localizations";
import Head from "next/head";
import Navbar from "./navbar";
import Login from "./login";
import { LoadingPage } from "~/components/loading";

const MyApp: AppType = ({ Component, pageProps }) => {
  const Main = () => {
    const { isSignedIn, isLoaded } = useUser();
    return (
      <main className="bg-gray-50 flex">
        {!isLoaded && <LoadingPage />}
        {isLoaded && !isSignedIn && <Login />}
        {!!isSignedIn && (
          <>
            <Navbar />
            <div className="min-w-screen flex min-h-screen w-full items-center justify-center">
              <Component {...pageProps} />
            </div>
          </>
        )}
      </main>
    );
  };
  return (
    <ClerkProvider localization={esES}>
      <Head>
        <title>El Cuarderno del Ceramista</title>
        <meta name="description" content="El cuaderno del ceramista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
