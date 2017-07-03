import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import App from './App';


describe('<App> component', () => {
  const app_wrapper = shallow(<App />)

  // =======
  //  OUTPUT
  // =======

  it('render App successfully', () => {
    expect (app_wrapper).toHaveLength(1);
  });

  // =======
  //  INSTANCE METHOD
  // =======

  it('function fillState successfully', () => {

    let expected = [{
        assigned : 'perut',
        desc : 'minum',
        severity : 'high',
        status : 'open'
      }]

    app_wrapper.instance().fillState(expected);
    let bugs_state = app_wrapper.state('bugs')
    expect (bugs_state).toHaveLength(1);
  });

  it('function addBug successfully', () => {

    let expected = [{
        assigned : 'perut',
        desc : 'minum',
        severity : 'high',
        status : 'open'
      }]

    let new_bug = {
        assigned : 'kepala',
        desc : 'pusing',
        severity : 'high',
        status : 'open'
      }

    app_wrapper.instance().fillState(expected);
    app_wrapper.instance().addBug(new_bug);
    let bugs_state = app_wrapper.state('bugs')
    expect (bugs_state).toHaveLength(2);
  });

  // =======
  //  DOM
  // =======

  it('render div successfully', () => {
    let div = app_wrapper.find('div')
    expect (div).toHaveLength(1);
  });

// =======
//  STATE
// =======

  it('have bugs state', () => {
    let bugs_state = app_wrapper.state('bugs')
    expect (bugs_state).toBeDefined();
  });

  it('bugs state is a array', () => {
    let bugs_state = app_wrapper.state('bugs')
    let is_array = typeof bugs_state === 'object'
    expect (is_array).toBeTruthy();
  });


  it('have assigned state', () => {
    let assigned_state = app_wrapper.state('assigned')
    expect (assigned_state).toBeDefined();
  });

  it('assigned state is a string', () => {
    let assigned_state = app_wrapper.state('assigned')
    let is_string = typeof assigned_state === 'string'
    expect (is_string).toBeTruthy();
  });

  it('have desc state', () => {
    let desc_state = app_wrapper.state('desc')
    expect (desc_state).toBeDefined();
  });

  it('desc state is a string', () => {
    let desc_state = app_wrapper.state('desc')
    let is_string = typeof desc_state === 'string'
    expect (is_string).toBeTruthy();
  });

  it('have severity state', () => {
    let severity_state = app_wrapper.state('severity')
    expect (severity_state).toBeDefined();
  });

  it('severity state is a string', () => {
    let severity_state = app_wrapper.state('severity')
    let is_string = typeof severity_state === 'string'
    expect (is_string).toBeTruthy();
  });

});
