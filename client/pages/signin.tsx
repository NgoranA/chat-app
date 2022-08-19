import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>RT Chat App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">signin</div>
    </div>
  );
};

export default Home;
