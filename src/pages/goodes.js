import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>掲示板作ってみた</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main title="うちらチョーかわいい" />
    </div>
  );
}
