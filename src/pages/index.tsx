import { useUser } from "@clerk/nextjs";
import Head from "next/head";
import Login from "./login";
import Navbar from "./navbar";
import Presentation from "./presentation";

export default function Home() {
  const { isSignedIn } = useUser();
  return (
    <>
      <Head>
        <title>El Cuarderno del Ceramista</title>
        <meta name="description" content="El cuaderno del ceramista" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-gray-50">
        {!isSignedIn && <Login />}
        {!!isSignedIn && (
          <>
            <Navbar />
            <div className="min-w-screen flex min-h-screen w-full items-center justify-center">
              <Presentation />
            </div>
          </>
        )}
      </main>
    </>
  );
}
