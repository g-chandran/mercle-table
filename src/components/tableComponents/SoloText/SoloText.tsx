import styles from "./SoloText.module.css";

export function SoloText({
  text,
  style,
}: {
  text: string;
  style: string | "";
}) {
  return <span className={`${styles.text} ${styles[style]}`}>{text}</span>;
}

SoloText.defaultProps = { style: "" };
