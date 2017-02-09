import React from 'react';
import { shallow } from 'enzyme';
import List from '../app/components/tab';

// test('List internal structure', () => {
//   const rendered = shallow(<List />)
// });

describe('List - internal structrure', () => {
  let list;
  beforeEach(() => {
    list = shallow(<List data={['name1', 'name2', 'name3']} />);
  })

  it('Class of rendered table', () => {
    expect(list.find('.myClass').length).toEqual(1);
  })

  it('List renders table', () => {
    expect(list.find('table').length).toEqual(1);
  });

  it('List renders column', () => {
    const arr = list.find('th');
    expect(arr.length).toEqual(1);
    expect(arr.first().text()).toEqual('Name');
  });

  it('List renders data', () => {
    const arr = list.find('td');
    expect(arr.length).toEqual(3);
    expect(arr.at(0).text()).toEqual('name1');
  });
});
