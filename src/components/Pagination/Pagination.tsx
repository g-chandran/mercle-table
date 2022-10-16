import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import styles from "./Pagination.module.css";

export function Pagination({
  totalLength,
  rangeChangeHandler,
}: {
  totalLength: number;
  rangeChangeHandler: (range: [number, number]) => void;
}) {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPageLength, setPerPageLength] = useState(10);
  const [range, setRange] = useState([1, perPageLength]);

  useEffect(() => {
    updateRange(0);
  }, [perPageLength, totalLength]);

  const canGoBack = () => !(currentPage <= 0);
  const canGoForward = () =>
    !(Math.ceil(totalLength / perPageLength) <= currentPage + 1);

  const updateRange = (currentPage: number) => {
    const range: [number, number] = [
      currentPage * perPageLength,
      Math.min((currentPage + 1) * perPageLength, totalLength),
    ];
    rangeChangeHandler(range);
    setRange(range);
  };

  const incrementPage = () => {
    if (canGoForward()) {
      updateRange(currentPage + 1);
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };

  const decrementPage = () => {
    if (canGoBack()) {
      updateRange(currentPage - 1);
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };

  const updatePageRange = (value: number) => {
    setCurrentPage(0);
    setPerPageLength(value);
  };

  return (
    <div className={styles.paginationWrapper}>
      <p>{`${range[0] + 1} - ${range[1]} of ${totalLength}`}</p>
      <div className={styles.navigationWrapper}>
        <button title="previous-page" disabled={!canGoBack()}>
          <MdNavigateBefore onClick={decrementPage} />
        </button>
        <button title="next-page" disabled={!canGoForward()}>
          <MdNavigateNext onClick={incrementPage} />
        </button>
      </div>
      <select
        title="Select rows per page"
        defaultValue={10}
        onChange={(e) => {
          updatePageRange(Number(e.target.value));
        }}
      >
        <option value={10}>10/ page</option>
        <option value={25}>25/ page</option>
        <option value={50}>50/ page</option>
      </select>
    </div>
  );
}
