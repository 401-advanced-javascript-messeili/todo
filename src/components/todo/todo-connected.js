import React, { useEffect, useState, useContext } from 'react';
import TodoForm from './form.js';
import TodoList from './list.js';
import Login from '../auth/login';
import useAjax from '../hooks/useAjax';
import { SettingsContext } from '../../context/settings';

import './todo.scss';

const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

const ToDo = () => {
  const [list, setList] = useState([]);
  console.log('list', list);
  const [_getTodoItems, _toggleComplete, _addItem, _deleteItem] = useAjax(setList, list);
  const context = useContext(SettingsContext);
  console.log('Hi', context);

  const addItem = (item) => {
    item.due = new Date();
    _addItem(item);
  };

  const toggleComplete = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    if (item._id) {
      item.complete = !item.complete;

      let url = `${todoAPI}/${id}`;
      _toggleComplete(item, url);
    }
  };

  const deleteItems = (id) => {
    let item = list.filter((i) => i._id === id)[0] || {};

    let url = `${todoAPI}/${id}`;
    _deleteItem(item, url);
  };

  const getTodoItems = () => {
    _getTodoItems();
  };

  useEffect(() => {
    getTodoItems();
  }, []);

  return (
    <>
      <header>
        <h2>There are {list.filter((item) => !item.complete).length} Items To Complete</h2>
      </header>

      <Login />

      <section className='todo'>
        <div>
          <TodoForm handleSubmit={addItem} />
        </div>

        <div>
          <TodoList list={list} handleComplete={toggleComplete} handleDelete={deleteItems} />
        </div>
      </section>
    </>
  );
};

export default ToDo;
