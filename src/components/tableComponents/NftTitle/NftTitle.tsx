import { TITLE_BG_COLORS } from "../../../lib/constants";
import styles from "./NftTitle.module.css";

export function NftTitle({ imgUrl, title }: { imgUrl: string; title: string }) {
  const bgIndex = Math.ceil(Math.random() * TITLE_BG_COLORS.length - 1);
  const bgColor = TITLE_BG_COLORS[bgIndex];

  return (
    <div className={styles.nftTitle}>
      <span className={styles.avatar}>
        <img
          className={styles[bgColor]}
          src={imgUrl}
          loading="lazy"
          width="36px"
          height="36px"
          alt={title}
        />
      </span>
      <p>{title}</p>
    </div>
  );
}
