import axios from 'axios';
const todoAPI = 'https://api-js401.herokuapp.com/api/v1/todo';

export default function useAjax(cb, list) {
  const _addItem = (item) => {
    axios({
      method: 'post',
      url: todoAPI,
      data: item,
    }).then((res) => cb([...list, res.data]));
  };

  const _toggleComplete = (item, url) => {
    axios
      .put(url, item)
      .then((res) => {
        console.log('res', res);
        cb(list.map((listItem) => (listItem._id === item._id ? res.data : listItem)));
      })
      .catch(console.error);
  };

  const _deleteItem = (item, url) => {
    axios
      .delete(url)
      .then((res) => {
        console.log('res', res);
        cb(list.filter((listItem) => listItem._id !== item._id));
      })
      .catch(console.error);
  };

  const _getTodoItems = () => {
    axios
      .get(todoAPI)
      .then((data) => cb(data.data.results))
      .catch(console.error);
  };
  return [_getTodoItems, _toggleComplete, _addItem, _deleteItem];
}
