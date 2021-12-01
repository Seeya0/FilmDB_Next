import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Film DB</title>
        <meta name="description" content="The Database of films!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
    </div>
  );
}
