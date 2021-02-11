import Link from "next/link";
import styles from "./../../styles/CoinInfo.module.css";

const Back = () => {
  return (
    <Link href="/">
      <div className={styles.back + " flex"}>
        <div className={styles.backIcon + " icon"}></div> Back To List
      </div>
    </Link>
  );
};
export default Back;
