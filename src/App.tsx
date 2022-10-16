import { useState } from "react";
import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Table } from "./components/Table/Table";
import { MOCKDATA } from "./lib/mockData";

function App() {
  const [mockData, setMockData] = useState(MOCKDATA.slice(0, 10));

  const searchInputHandler = (value: string) => {
    const searchResult = MOCKDATA.slice(0, 10).filter((element) =>
      element.id.includes(value)
    );
    setMockData(searchResult);
  };

  return (
    <div className="App">
      <h1>Mercle Table</h1>
      <SearchBox onChangeHandler={searchInputHandler} />
      <Table data={mockData} />
    </div>
  );
}

export default App;
