import { useEffect, useRef, useState } from "react";
import { ENDPOINT, LIMIT } from "./../../configs";
import Item from "./Item";
import styles from "./../../styles/CoinList.module.css";

const List = ({ coins }) => {
  const list = useRef(null);
  const [isLoading, setisloading] = useState(false);
  const [coinsList, setCoinsList] = useState(coins);
  const [pageCount, setPageCount] = useState(1);

  const fetchCoins = async () => {
    const skip = pageCount * 20;
    await fetch(`${ENDPOINT}coins?skip=${skip}&limit=${LIMIT}`)
      .then((response) => response.json())
      .then((data) => {
        const { coins } = data;
        setCoinsList((prev) => [...prev, ...coins]);
        setisloading(false);
        setPageCount((prev) => prev + 1);
      });
  };

  const handleScroll = () => {
    if (
      list.current.scrollTop + 50 >=
      list.current.scrollHeight - list.current.offsetHeight
    ) {
      fetchCoins();
      setisloading(true);
    }
  };

  useEffect(() => {
    if (!isLoading && list.current) {
      list.current.addEventListener("scroll", handleScroll);
      return () => {
        if (list.current)
          list.current.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isLoading, pageCount]);

  return (
    <div className={styles.container} ref={list}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price BTC</th>
            <th>1H Change</th>
            <th>1D Change</th>
            <th>7W Change</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {coinsList &&
            coinsList.map((coin, index) => (
              <Item key={coin.id} coin={coin} index={index} />
            ))}
        </tbody>
      </table>
      {isLoading && <div className={styles.loading}></div>}
    </div>
  );
};
export default List;
