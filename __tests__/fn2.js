import React from 'react';
import { mount } from 'enzyme';
import Todo  from '../app/todo';

test('TodoComponent calls doneChange when todo is clicked', () => {
  const todo = { id: 1, done: false, name: 'Learn'};
  const doneChange = jest.fn();
  const wrapper = mount(
    <Todo todo={todo} doneChange={doneChange} />
  );
  const p = wrapper.find('.toggle-todo');
  p.simulate('click');
  expect(doneChange).toBeCalledWith(1);
});
