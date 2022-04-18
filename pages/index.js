import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Site from "../components/base/index";
import HomePage from "../components/pages/home/home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Site>
        <HomePage />
      </Site>
    </div>
  );
}
