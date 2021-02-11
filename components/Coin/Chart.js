import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import styles from "./../../styles/CoinInfo.module.css";

const Chart = ({ chart }) => {
  const options = {
    chart: {
      type: "line",
      marginRight: 10,
      backgroundColor: "transparent",
    },

    time: {
      useUTC: false,
    },

    title: false,

    xAxis: {
      visible: false,
    },

    yAxis: {
      title: false,
      gridLineColor: "#ffffff26",
    },

    tooltip: {
      enabled: false,
    },

    legend: {
      enabled: false,
    },

    exporting: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },

    series: [
      {
        data: chart,
      },
    ],
  };

  return (
    <div className={styles.chart}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
export default Chart;
