import React, { useEffect, useState } from "react";
import styles from "./../styles/CoinList.module.css";
import { getWishList, manageWishList } from "./../helpers";

const CoinActions = ({ website, twitter, id }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    setWishList(getWishList());
  }, [setWishList]);

  const handleWishList = () => {
    manageWishList(id);
    if (wishList.includes(id))
      setWishList((prev) => prev.filter((item) => item !== id));
    else setWishList((prev) => [...prev, id]);
  };

  return (
    <div
      className="flex"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        onClick={handleWishList}
        className={
          (wishList.includes(id) ? styles.wishListActive : styles.wishList) +
          " icon"
        }
      ></div>
      {twitter && (
        <a
          className={styles.twitter + " icon"}
          href={twitter}
          target="_blank"
        ></a>
      )}
      {website && (
        <a
          className={styles.website + " icon"}
          href={website}
          target="_blank"
        ></a>
      )}
    </div>
  );
};
export default CoinActions;
