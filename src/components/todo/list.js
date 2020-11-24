import React from 'react';

const TodoList = (props) => {
  const { list, handleComplete, handleDelete } = props;
  return (
    <ul>
      {list.map((item) => (
        <li className={`complete-${item.complete.toString()}`} key={item._id}>
          <span onClick={() => handleComplete(item._id)}>
            name: {item.assignee} <br />
            task: {item.text}
          </span>
          <button onClick={() => handleDelete(item._id)}>x</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
