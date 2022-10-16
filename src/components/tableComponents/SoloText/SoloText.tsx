import styles from "./SoloText.module.css";

export function SoloText({
  text,
  style = "",
  Tooltip = null,
}: {
  text: string;
  style?: string;
  Tooltip?: JSX.Element | null;
}) {
  return (
    <div className={`${styles.textWrapper} ${styles[style]}`}>
      {Tooltip && <div className={styles.tooltipWrapper}>{Tooltip}</div>}
      <p>{text}</p>
    </div>
  );
}
