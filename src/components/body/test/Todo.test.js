import React from 'react';
import { mount } from 'enzyme';
import Todo from './../Todo';

describe('Todo', () => {
  let props;
  let mountedTodo;
  const todoScreen = () => {
    if (!mountedTodo) {
      mountedTodo = mount(
        <Todo { ...props } />
      );
    }
    return mountedTodo;
  }

  beforeEach(() => {
    props = {
      toggleStatus: () => { console.log('toggle'); },
      openModal: () => { console.log('open modal'); },
      handleDelete: () => { console.log('handle delete'); },
      todo: {},
    };
    mountedTodo = undefined;
  });

  it('always renders a li', () => {
    const li = todoScreen().find('li');
    expect(li.length).toBeGreaterThan(0);
  });
});
