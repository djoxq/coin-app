import Link from "next/link";
import Name from "./Name";
import CoinActions from "./../CoinActions";

const Item = ({ coin, index }) => {
  return (
    <Link href={`/${coin.id}`}>
      <tr key={coin.id}>
        <td>{index + 1}</td>
        <td>
          <Name icon={coin.icon} name={coin.name} symbol={coin.symbol} />
        </td>
        <td>{coin.price}</td>
        <td>{coin.priceBtc}</td>
        <td>{coin.priceChange1d}</td>
        <td>{coin.priceChange1h}</td>
        <td>{coin.priceChange1w}</td>
        <td>
          <CoinActions
            twitter={coin.twitterUrl}
            website={coin.websiteUrl}
            id={coin.id}
          />
        </td>
      </tr>
    </Link>
  );
};
export default Item;
