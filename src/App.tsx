import { useState } from "react";
import "./App.css";
import { Pagination } from "./components/Pagination/Pagination";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Table } from "./components/Table/Table";
import { MOCKDATA } from "./lib/mockData";

function App() {
  const [mockData, setMockData] = useState(MOCKDATA);
  const [range, setRange] = useState([0]);

  const searchInputHandler = (value: string) => {
    const searchResult = MOCKDATA.filter((e) => e.id.includes(value));
    setMockData(searchResult);
  };

  const updateRange = (range: [number, number]) => {
    console.log(range);
    setRange(range);
  };

  return (
    <div className="App">
      <h1>Mercle Table</h1>
      <SearchBox onChangeHandler={searchInputHandler} />
      <Table data={mockData.slice(range[0], range[1])} />
      <Pagination
        totalLength={mockData.length}
        rangeChangeHandler={updateRange}
      />
    </div>
  );
}

export default App;
