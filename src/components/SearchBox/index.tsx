import styles from "./SearchBox.module.css";
import { FiSearch } from "react-icons/fi";
import { ChangeEvent } from "react";

export function SearchBox({
  onChangeHandler,
}: {
  onChangeHandler: (value: string) => void;
}) {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeHandler(e.currentTarget.value);
  };

  return (
    <div className={styles.search}>
      <div>
        <FiSearch />
      </div>
      <input
        onChange={onChange}
        type="text"
        name="search-box"
        placeholder="Search"
        className={styles.searchBox}
      />
    </div>
  );
}
