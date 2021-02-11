import styles from "./../../styles/CoinList.module.css";

const Name = ({ icon, name, symbol }) => {
  return (
    <div className="flex">
      <div
        className="icon"
        style={{
          backgroundImage: `url(${icon}`,
        }}
      ></div>
      {name}
      <span className={styles.symbol}>&#183; {symbol}</span>
    </div>
  );
};
export default Name;
