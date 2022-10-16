import styles from "./Tooltip.module.css";

export function Tooltip({ accessory }: { accessory: string }) {
  return (
    <div className={styles.tooltip}>
      <p>Accessories</p>
      <p>{accessory}</p>
    </div>
  );
}
