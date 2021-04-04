import React from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
  const todoList = [
    {
      id: 1,
      title: 'Eat',
    },
    {
      id: 2,
      title: 'Code',
    },
    {
      id: 3,
      title: 'Sleep',
    },
  ];

  return (
    <div>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
