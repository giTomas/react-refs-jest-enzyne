import React from 'react';
import { toggleDone, deleteTodo } from '../app/functions/fns';
import Todo from '../app/components/todo';
import { mount } from 'enzyme';

test('toggleDone completes an incomplete todo', () => {
    const startState = {
        todos: [{ id: 1, done: false, name: 'Sleep' }]
        };

    const finState = toggleDone(startState, 1);

    expect(finState.todos).toEqual([
          {id: 1, done: true, name: 'Sleep'}
    ])
});

test('deleteTodo', () => {
  const startState = {
      todos: [{ id: 1, done: false, name: 'Sleep' }]
      };

  const finState = deleteTodo(startState, 1);

  expect(finState.todos).toEqual([]);
});

test('TodoComponent renders the text', () => {
  const todo = { id: 1, done: false, name: 'Eat'};
  const wrapper = mount(
    <Todo todo={todo} />
  );
  const p = wrapper.find('.toggle-todo');
  expect(p.text()).toBe('Eat');
});
