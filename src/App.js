import React, { useEffect } from 'react';
import './App.scss';
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './components/header'
import GroceryList from './components/grocery-list';
import GroceryDetails from './components/grocery-details';
import Basket from './components/basket';
import { updateGroceries } from './actions'


function App(props) {

  // eslint-disable-next-line
  useEffect(() => { props.updateGroceries() },[])

  return (
    <div className="App">
      <Header />
      <Container id="main-app-container">
        <Row className="justify-content-md-center">
          <Col sm={8}>
            { props.selectedGrocery ? (
              <GroceryDetails
                grocery={props.selectedGrocery}
              />
            ) : (
              <GroceryList />
            )}
          </Col>
          <Col sm={4}>
            <Basket items={[]}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    groceriesList: state.groceriesList,
    selectedGrocery: state.selectedGrocery
  }
}

export default connect(mapStateToProps, { updateGroceries })(App);
