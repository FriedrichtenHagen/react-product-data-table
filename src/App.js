import logo from './logo.svg';
import './App.css';
import Header from "./Header.js"
import ProductTable from "./ProductTable"
import { useState } from 'react';

const jsonFile = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Frieds" }
]





function App() {
  const [textFilter, setTextFilter] = useState("")
  const [stockFilter, setStockFilter] = useState(false)

  function BottomText(){
    // conditional rendering
      return (
        <div>
        {
          stockFilter ? `The items shown are in stock` : `Some items may not be in stock!` 
        }
        </div> 
      )
  }

  return (
    <div className="App">
      <Header 
      textFilter={textFilter}
      stockFilter={stockFilter}
      onTextFilterChange={setTextFilter}
      onStockFilterChange={setStockFilter}
      />
      <ProductTable products={jsonFile} textFilter={textFilter} stockFilter={stockFilter}/>
      <BottomText/>

    </div>
  );
}




export default App;
