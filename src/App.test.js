import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { render } from '@testing-library/react';
import App from './App';
import GroceryList from './components/grocery-list';
import GroceryDetails from './components/grocery-details';

it('renders grocery list component', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/groceries/i);
  expect(headingElement).toBeInTheDocument();
});

it('renders grocery list component if no selected grocery', () => {
  const shoppingPage = render(<App />);
  expect(document.getElementById('grocery-list-div')).toBeInTheDocument();
});

// integration tests will be moved into serparate file

Enzyme.configure({ adapter: new Adapter() })
let wrapper

describe('grocery list or details', () => {
  it('displays grocery details if grocery selected', () => {
    wrapper = Enzyme.shallow(<App />)
    expect(wrapper.find(GroceryList).length).toBe(1)
    wrapper.find(GroceryList).dive().find('#grocery-1').props().onClick()
    expect(wrapper.find(GroceryList).length).toBe(0)
    expect(wrapper.find(GroceryDetails).length).toBe(1)
  })

  it('returns to grocery list if back button hit', () => {
    expect(wrapper.find(GroceryList).length).toBe(0)
    expect(wrapper.find(GroceryDetails).length).toBe(1)
    wrapper.find(GroceryDetails).dive().find('a').props().onClick()
    expect(wrapper.find(GroceryList).length).toBe(1)
    expect(wrapper.find(GroceryDetails).length).toBe(0)
  })
})
