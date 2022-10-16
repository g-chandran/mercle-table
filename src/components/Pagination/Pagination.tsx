import { useEffect, useState } from "react";

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

  const updateRange = (currentPage: number) => {
    const range: [number, number] = [
      currentPage * perPageLength,
      Math.min((currentPage + 1) * perPageLength, totalLength),
    ];
    rangeChangeHandler(range);
    setRange(range);
  };

  const incrementPage = () => {
    if (Math.ceil(totalLength / perPageLength) <= currentPage + 1) return;
    updateRange(currentPage + 1);
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const decrementPage = () => {
    if (currentPage <= 0) return;
    updateRange(currentPage - 1);
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const updatePageRange = (value: number) => {
    setCurrentPage(0);
    setPerPageLength(value);
  };

  return (
    <div>
      <p>{`${range[0] + 1} - ${range[1]} of ${totalLength}`}</p>
      <div>
        <button type="button" onClick={decrementPage}>
          Prev
        </button>
        <button type="button" onClick={incrementPage}>
          Next
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
