import React from "react";
import { ENDPOINT, LIMIT } from "./../configs";
import List from "./../components/CoinList/";
import styles from "./../styles/Home.module.css";

export default function Home({ coins }) {
  return (
    <div className="layout">
      <h1 className={styles.title}>
        Hey. Welcome to Test Task for Tigran Nazaryan
      </h1>
      <h3 className={styles.title}>
        Here's the list of Coins, Just scroll down for more...
      </h3>
      <List coins={coins} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${ENDPOINT}coins?skip=0&limit=${LIMIT}`);
  const coins = await res.json();

  return {
    props: {
      coins: coins.coins,
    },
  };
};
