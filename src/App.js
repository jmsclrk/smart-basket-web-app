import React, { useState } from 'react';
import './App.css';

import GroceryList from './components/grocery-list';
import GroceryDetails from './components/grocery-details';
import Basket from './components/basket';
import { testMultiGroceryList } from './components/config/test-groceries';


function App() {
  const [selectedGrocery, setSelectedGrocery] = useState(null)
  const [basketItems, setBasketItems] = useState([])

  const selectGrocery = (grocery) => {
    setSelectedGrocery(grocery)
  }

  const deselectGrocery = () => {
    setSelectedGrocery(null)
  }

  return (
    <div className="App">
      { selectedGrocery ? (
        <GroceryDetails
          grocery={selectedGrocery}
          deselectGrocery={deselectGrocery}
        />
      ) : (
        <GroceryList
          groceries={testMultiGroceryList}
          selectGrocery={selectGrocery}
        />
      )}
      <Basket items={basketItems}/>
  </div>
  );
}

export default App;
