import React from 'react'
import { shallow } from 'enzyme'
import { findByDataTestAttr } from './../config/test-utils'
import Header from '.'

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />)
  return component
}

describe('Header Component', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  it('Should render without erros', () => {
    const wrapper = findByDataTestAttr(component, 'header-component')
    expect(wrapper.length).toBe(1)
  })

  it('Should render a logo', () => {
    const logo = findByDataTestAttr(component, 'logo-img')
    expect(logo.length).toBe(1)
  })
})
