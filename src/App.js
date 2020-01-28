import React, { useState } from 'react';
import './App.css';

import GroceryList from './components/grocery-list';
import GroceryDetails from './components/grocery-details';
import { testSingleGroceryList, testMultiGroceryList } from './components/config/test-groceries';


function App() {
  const [selectedGrocery, setSelectedGrocery] = useState(null)

  const selectGrocery = (grocery) => {
    setSelectedGrocery(grocery)
  }

  return (
    <div className="App">
      { selectedGrocery ? (
        <GroceryDetails grocery={selectedGrocery} />
      ) : (
        <GroceryList
          groceries={testMultiGroceryList}
          selectGrocery={selectGrocery}
        />

      )}
  </div>
  );
}

export default App;
