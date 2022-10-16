import styles from "./Table.module.css";
import type { Mockdata } from "../../assets/mockData";

export function Table({ data }: { data: Mockdata[] }) {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={`${styles.theadTitle} ${styles.id}`}>
            Discord / Wallet / Email ID
          </th>
          <th className={`${styles.theadTitle} ${styles.nftName}`}>NFT</th>
          <th className={`${styles.theadTitle} ${styles.description}`}>
            NFT Description
          </th>
          <th className={`${styles.theadTitle} ${styles.attributes}`}>
            Attributes
          </th>
          <th className={`${styles.theadTitle} ${styles.status}`}>Status</th>
          <th className={`${styles.theadTitle} ${styles.dateClaimed}`}>
            Date Claimed
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.nftName}</td>
            <td>{row.description}</td>
            <td>{row.attributes}</td>
            <td>{row.status}</td>
            <td>{row.dateClaimed.toDateString()}</td>
          </tr>
        ))}
        <tr>
          <td>hey</td>
          <td>hey</td>
          <td>hey</td>
          <td>hey</td>
          <td>hey</td>
          <td>hey</td>
        </tr>
      </tbody>
    </table>
  );
}
