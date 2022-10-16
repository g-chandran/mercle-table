import styles from "./SearchBox.module.css";
import { FiSearch } from "react-icons/fi";

export function SearchBox() {
  return (
    <div className={styles.search}>
      <div>
        <FiSearch />
      </div>
      <input
        type="text"
        name="search-box"
        placeholder="Search"
        className={styles.searchBox}
      />
    </div>
  );
}
