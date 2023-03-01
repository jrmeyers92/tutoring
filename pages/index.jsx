import Head from "next/head";
import Header from "../sections/header";
import Approach from "../sections/Approach";
import App from "next/app";
export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Prost K-12 Tutoring</title>
        <meta name="description" content="St. Louis tutoring service" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="tutoring, K-12, Elementary Education, St. Louis, Saint Louis, Missouri, Anna Prost"
        />
      </Head>
      <Header />
      <Approach />
    </>
  );
}
