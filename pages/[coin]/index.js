import React from "react";
import { ENDPOINT } from "../../configs";
import Info from "./../../components/Coin/Info";
import Back from "./../../components/Coin/Back";
import Chart from "./../../components/Coin/Chart";
import styles from "./../../styles/CoinInfo.module.css";

export default function Coin({ coins, chart: nestedChart }) {
  const { coin } = coins;
  const { chart } = nestedChart;
  return (
    <div className="layout">
      <div className={styles.container + " flex"}>
        <Back />
        <Info coin={coin} />
        <Chart chart={chart} />
      </div>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  const coins = await fetch(`${ENDPOINT}coins/${context.params.coin}`);
  const coinsJson = await coins.json();

  const chart = await fetch(
    `${ENDPOINT}charts?period=1m&coinId=${context.params.coin}`
  );
  const chartJson = await chart.json();

  return {
    props: {
      coins: coinsJson,
      chart: chartJson,
    },
  };
};
