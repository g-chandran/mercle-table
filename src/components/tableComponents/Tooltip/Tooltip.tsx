import styles from "./Tooltip.module.css";

export function Tooltip({ accessory }: { accessory: string }) {
  return (
    <div className={styles.tooltip}>
      <p className={styles.tooltipTitle}>Accessories</p>
      <p className={styles.tooltipContent}>{accessory}</p>
      <p className={styles.tooltipSubContext}>20% have this trait</p>
    </div>
  );
}
