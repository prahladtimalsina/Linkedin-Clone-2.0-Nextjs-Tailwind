import { signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Linkedin-2.0</title>
        <meta
          name="description"
          content="Linkedin clone | nextjs | tailwind | mongodb"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
