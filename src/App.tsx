import "./App.css";
import { SearchBox } from "./components/SearchBox/SearchBox";
import { Table } from "./components/Table/Table";
import { MOCKDATA } from "./lib/mockData";

function App() {
  return (
    <div className="App">
      <h1>Mercle Table</h1>
      <SearchBox />
      <Table data={MOCKDATA} />
    </div>
  );
}

export default App;
