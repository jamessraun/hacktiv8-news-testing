import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Form from './Form';


describe('<Form> component', () => {
  const formWrapper = shallow(<Form />)

  // =======
  //  OUTPUT
  // =======

  it('render Form successfully', () => {
    expect (formWrapper).toHaveLength(1);
  });

  // =======
  //  PROPS
  // =======

  it('have desc props', () => {
    const desc_props = formWrapper.props('desc')
    expect (desc_props).toBeDefined;
  });

  it('have assigned props', () => {
    const assigned_props = formWrapper.props('assigned')
    expect (assigned_props).toBeDefined;
  });

  it('have severity props', () => {
    const severity_props = formWrapper.props('severity')
    expect (severity_props).toBeDefined;
  });

  it('have handleChangeSeverity props', () => {
    const handleChangeSeverity_props = formWrapper.props('handleChangeSeverity')
    expect (handleChangeSeverity_props).toBeDefined;
  });

  it('have handleChangeAssigned props', () => {
    const handleChangeAssigned_props = formWrapper.props('handleChangeAssigned')
    expect (handleChangeAssigned_props).toBeDefined;
  });

  it('have handleChangeDesc props', () => {
    const handleChangeDesc_props = formWrapper.props('handleChangeDesc')
    expect (handleChangeDesc_props).toBeDefined;
  });

  it('have handleSubmit props', () => {
    const handleSubmit_props = formWrapper.props('handleSubmit')
    expect (handleSubmit_props).toBeDefined;
  });

});
