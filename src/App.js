import React, { useState } from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
      <Container>
        <Row className="justify-content-md-center">
          <Col sm={8}>
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
          </Col>
          <Col sm={4}>
            <Basket items={basketItems}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
