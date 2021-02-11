import CoinActions from "./../CoinActions";
import styles from "./../../styles/CoinInfo.module.css";

const Info = ({ coin }) => {
  return (
    <>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${coin.icon})`,
        }}
      ></div>
      <div className={styles.info}>
        <div className={styles.field + " flex"}>
          <div className={styles.name}>Name</div>
          <div className={styles.value}>{coin.name}</div>
        </div>
        <div className={styles.field + " flex"}>
          <div className={styles.name}>Market Cap</div>
          <div className={styles.value}>{coin.marketCap}</div>
        </div>
        <div className={styles.field + " flex"}>
          <div className={styles.name}>Price</div>
          <div className={styles.value}>{coin.price}</div>
        </div>
        <div className={styles.field + " flex"}>
          <div className={styles.name}>Price Btc</div>
          <div className={styles.value}>{coin.priceBtc}</div>
        </div>
        <div className={styles.field + " flex"}>
          <div className={styles.name}>Rank</div>
          <div className={styles.value}>{coin.rank}</div>
        </div>
        <div className={styles.field + " flex"}>
          <CoinActions
            twitter={coin.twitterUrl}
            website={coin.websiteUrl}
            id={coin.id}
          />
        </div>
      </div>
    </>
  );
};
export default Info;
