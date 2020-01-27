import React from 'react';
import './App.css';

import GroceryList from './components/grocery-list';

function App() {

  const tempGroceryList = [{
    id: 1,
    name: "Carrots",
    amount: 800,
    measurement: "grams",
    price: 1.5
  },
  {
    id: 2,
    name: "Beef Mince",
    amount: 500,
    measurement: "grams",
    price: 4
  }]

  return (
    <div className="App">
      <GroceryList groceries={tempGroceryList} />
    </div>
  );
}

export default App;
