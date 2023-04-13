import './App.css';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [data,setData] = useState({});
  const updateData = (searchParams) =>{
    setData(searchParams);
  }
  return (
    <div className="App">
        <SearchBar callBack= {updateData}/>
        <p>Name: {"name" in data ? data["name"]: "no Data to Display"}</p>
        <p>Max Price: {"price" in data ? data["price"]: "no Data to Display"}</p>
        <p>Type: {"type" in data ? data["type"]: "no Data to Display"}</p>
        <p>Brand: {"brand" in data ? data["brand"]: "no Data to Display"}</p>
    </div>
  );
}


export default App;
