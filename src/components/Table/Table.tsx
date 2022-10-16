import styles from "./Table.module.css";
import {
  Attributes,
  Mockdata,
  STATUS_BACKGROUND_MAPPING,
} from "../../lib/mockData";
import { SoloText } from "../tableComponents/SoloText/SoloText";
import { NftTitle } from "../tableComponents/NftTitle/NftTitle";
import { textTruncate } from "../../lib/utils";

export function Table({ data }: { data: Mockdata[] }) {
  const getFormattedClaimedDate = (date: EpochTimeStamp) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  const splitAttributes = (attributes: Attributes) => {
    if (attributes.length > 2) {
      return [...attributes.slice(0, 2), `+${attributes.length - 2}`];
    }
    return attributes;
  };

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
          <th
            className={`${styles.theadTitle} ${styles.dateClaimed} ${styles.dateClaimedRow}`}
          >
            Date Claimed
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => {
          const id = textTruncate(row.id, 30);
          const name = textTruncate(row.nftName, 20);
          const description = textTruncate(row.description, 100);
          return (
            <tr key={`${row.id}_${index}`}>
              <td title={id.isModified ? row.id : ""}>{id.text}</td>
              <td title={name.isModified ? row.nftName : ""}>
                <NftTitle title={name.text} imgUrl={row.nftAvatar} />
              </td>
              <td title={description.isModified ? row.description : ""}>
                {description.text}
              </td>
              <td>
                {splitAttributes(row.attributes).map((attribute) => (
                  <SoloText key={attribute} text={attribute} />
                ))}
              </td>
              <td>
                <SoloText
                  text={row.status}
                  style={STATUS_BACKGROUND_MAPPING[row.status]}
                />
              </td>
              <td className={styles.dateClaimedRow}>
                {getFormattedClaimedDate(row.dateClaimed)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
