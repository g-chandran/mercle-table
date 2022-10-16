import styles from "./Table.module.css";
import { Mockdata, STATUS_BACKGROUND_MAPPING } from "../../assets/mockData";
import { SoloText } from "../tableComponents/SoloText/SoloText";
import { NftTitle } from "../tableComponents/NftTitle/NftTitle";

export function Table({ data }: { data: Mockdata[] }) {
  const getFormattedClaimedDate = (date: EpochTimeStamp) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

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
        {data.map((row, index) => (
          <tr key={`${row.id}_${index}`}>
            <td>{row.id}</td>
            <td>
              <NftTitle title={row.nftName} imgUrl={row.nftAvatar} />
            </td>
            <td>{row.description}</td>
            <td>
              {row.attributes.map((attribute) => (
                <SoloText key={attribute} text={attribute} />
              ))}
            </td>
            <td>
              <SoloText
                text={row.status}
                style={STATUS_BACKGROUND_MAPPING[row.status]}
              />
            </td>
            <td>{getFormattedClaimedDate(row.dateClaimed)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
