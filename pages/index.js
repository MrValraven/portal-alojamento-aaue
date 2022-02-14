import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import ListingsBoard from "../components/ListingsBoard/ListingsBoard";
import Hero from "../components/Hero/Hero";

/* export const getStaticProps = async () => {
  /*  const response = await fetch(URL);
  const data = await response.json(); */
/* return {
    props: { posts: data}
  } 
}; */

export default function Home() {
  return (
    <>
      <Head>
        <title>Portal do Alojamento | Encontra a casa perfeita para ti!</title>
        <meta></meta>
      </Head>
      <div>
        <Hero />
      </div>
      <div>
        <h1>Anúncios mais recentes</h1>
        <ListingsBoard />
      </div>
    </>
  );
}
