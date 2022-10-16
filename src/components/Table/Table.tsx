import styles from "./Table.module.css";

export function Table() {
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
