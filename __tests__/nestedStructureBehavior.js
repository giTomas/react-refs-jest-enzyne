import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../app/components/app';

// https://www.codementor.io/vijayst/unit-testing-react-components-jest-or-enzyme-du1087lh8
// https://hackernoon.com/testing-react-components-with-jest-and-enzyme-41d592c174f#.4i2brkdy2

describe('App', () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it('Nested', () => {
    expect(app.find('Add').length).toEqual(1);
    expect(app.find('List').length).toEqual(1);
  });

  it('Interaction test', () => {
    const add = app.find('Add').first();
    add.props().onAdd('Name 1');
    app.update();
    const list = app.find('List').first();
    const listData = list.props().data;
    expect(listData.length).toEqual(1);
    expect(listData[0]).toEqual('Name');
  })
});
